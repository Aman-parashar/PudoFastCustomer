import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { ProfileService } from '../../../services/ProfileService';

interface ContactUsFormData {
  title: string;
  subject: string;
  descriptions: string;
}

export const useContactUsViewModel = () => {
  const { control, handleSubmit } = useForm<ContactUsFormData>({
    defaultValues: {
      title: '',
      subject: '',
      descriptions: '',
    },
  });

  const contactUsMutation = useMutation({
    mutationFn: (data: any) => {
        return ProfileService.contactUs({
            title: data.title,
            subject: data.subject,
            description: data.descriptions,
        });
    },
    onSuccess: (data: any) => {
      Toast.show({ 
        type: 'success', 
        text1: 'Submitted', 
        text2: data?.message || 'Your request has been sent successfully.' 
      });
      NavigationService.goBack();
    },
    onError: (error: any) => {
      Alert.alert('Error', error?.message || 'Something went wrong while submitting.');
    },
  });

  const handleSave = (data: ContactUsFormData) => {
    if (!data.title.trim() || !data.subject.trim() || !data.descriptions.trim()) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
    }
    contactUsMutation.mutate(data);
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    control,
    handleSubmit,
    handleSave,
    goBack,
    isSubmitting: contactUsMutation.isPending,
  };
};
