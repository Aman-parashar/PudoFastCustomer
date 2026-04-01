import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { UserData } from '../../../models/User';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { storage } from '../../../helper/MMKVStorage';
import { LocalStorage } from '../../../utils/LocalStorage';
import { checkAndRequestCameraPermission, checkAndRequestPhotoLibraryPermission } from '../../../utils/permissions'
import { uploadImagesToS3 } from '../../../hooks/useAws';
import { ProfileService } from '../../../services/ProfileService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReactQuaryConst } from '../../../navigation/Constant';

interface EditProfileForm {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  profile_image: string;
}

export const useEditProfileViewModel = (user: UserData) => {
  const { control, handleSubmit } = useForm<EditProfileForm>({
    defaultValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
    },
  });

  const queryClient = useQueryClient();
  const [selectedImage, setSelectedImage] = useState<string | null>(user?.profile_image || null);
  const [imageMetadata, setImageMetadata] = useState<{ type: string; name: string } | null>(null);

  const { mutateAsync: updateProfile, isPending: isLoading } = useMutation({
    mutationFn: ProfileService.updateUserDetails,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ReactQuaryConst.USER_DATA] });
      // Alert.alert('Success', 'Profile updated successfully');
      NavigationService.goBack();
    },
    onError: (error: any) => {
      Alert.alert('Error', error.message || 'Failed to update profile');
    }
  });

  const handleSave = async (data: EditProfileForm) => {
    try {
      let profile_image = user?.profile_image;

      // If a new image was selected (and it's a local URI)
      if (selectedImage && selectedImage !== user?.profile_image && imageMetadata) {
        const uploadedUrls = await uploadImagesToS3([
          {
            uri: selectedImage,
            type: imageMetadata.type || 'image/jpeg',
            name: imageMetadata.name || 'profile_image.jpg',
          },
        ]);

        if (uploadedUrls.length > 0) {
          // Extract the filename from the S3 URL to send to the backend
          const fullUrl = uploadedUrls[0];
          profile_image = fullUrl.split('/').pop() || '';
        }
      }

      await updateProfile({
        ...data,
        profile_image,
      });

    } catch (error: any) {
      // Error is handled in useMutation.onError
    }
  };


  const goBack = () => {
    NavigationService.goBack();
  };

  const handleCamera = async () => {
    const status = storage.getString(LocalStorage.cameraPermission);
    if (status !== 'granted') {
      const result = await checkAndRequestCameraPermission();
      if (result.status !== 'granted') return;
    }

    try {
      const result = await launchCamera({
        mediaType: 'photo',
        quality: 0.8,
      });

      if (result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        setSelectedImage(asset.uri || null);
        setImageMetadata({
          type: asset.type || 'image/jpeg',
          name: asset.fileName || 'profile_image.jpg',
        });
      }
    } catch (error) {
      console.log('Camera error:', error);
    }
  };

  const handleGallery = async () => {
    const status = storage.getString(LocalStorage.photoLibraryPermission);
    if (status !== 'granted') {
      const result = await checkAndRequestPhotoLibraryPermission();
      if (result.status !== 'granted') return;
    }

    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
      });

      if (result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        setSelectedImage(asset.uri || null);
        setImageMetadata({
          type: asset.type || 'image/jpeg',
          name: asset.fileName || 'profile_image.jpg',
        });
      }
    } catch (error) {
      console.log('Gallery error:', error);
    }
  };

  return {
    control,
    handleSave,
    handleSubmit,
    goBack,
    handleCamera,
    handleGallery,
    selectedImage,
    isLoading,
  };
};
