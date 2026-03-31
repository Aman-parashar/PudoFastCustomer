import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../../../services/AuthService';
import Toast from 'react-native-toast-message';
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

  const changePasswordMutation = useMutation({
    mutationFn: AuthService.changePassword,
    onSuccess: (data: any) => {
      if (data?.code == '1') {
        Toast.show({ type: 'success', text1: data?.message || 'Password changed successfully' });
        NavigationService.goBack();
      } else {
        Alert.alert('Error', data?.message || 'Failed to change password');
      }
    },
    onError: (error: any) => {
      Alert.alert('Error', error?.message || 'Something went wrong while changing password.');
    },
  });

  const handleSave = (data: ChangePasswordForm) => {
    if (!data.oldPassword || !data.newPassword || !data.confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (data.newPassword !== data.confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match');
      return;
    }

    const payload = {
      old_password: data.oldPassword,
      new_password: data.newPassword,
      confirm_password: data.confirmPassword,
    };

    changePasswordMutation.mutate(payload);
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    control,
    handleSave,
    handleSubmit,
    goBack,
    isLoading: changePasswordMutation.isPending,
  };
};
