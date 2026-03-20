import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';

interface ChangePasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const useChangePasswordViewModel = () => {
  const { control, handleSubmit } = useForm<ChangePasswordForm>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const handleSave = (data: ChangePasswordForm) => {
    // Basic validation
    if (!data.oldPassword || !data.newPassword || !data.confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (data.newPassword !== data.confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match');
      return;
    }

    // Handle change password api
    Alert.alert('Success', 'Password changed successfully');
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
