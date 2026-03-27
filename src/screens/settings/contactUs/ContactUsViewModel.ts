import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { useForm } from 'react-hook-form';

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

  const handleSave = (data: ContactUsFormData) => {
    Alert.alert('Success', 'Contact Us submitted successfully');
    NavigationService.goBack();
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    control,
    handleSubmit,
    handleSave,
    goBack,
  };
};
