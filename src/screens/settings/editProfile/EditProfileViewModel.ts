import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';

interface EditProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export const useEditProfileViewModel = () => {
  const { control, handleSubmit } = useForm<EditProfileForm>({
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'samplemail@gmail.com',
      phone: '4578451412',
      address: 'B103, Abs cir, nxh St',
    },
  });

  const handleSave = (data: EditProfileForm) => {
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.address) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Handle update profile api
    Alert.alert('Success', 'Profile updated successfully');
    NavigationService.goBack();
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    control,
    handleSave,
    handleSubmit,
    goBack,
  };
};
