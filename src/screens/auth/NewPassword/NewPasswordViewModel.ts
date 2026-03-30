import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { AuthService } from '../../../services/AuthService';
import Toast from 'react-native-toast-message';

export const useNewPasswordViewModel = () => {
  const route = useRoute<any>();
  const { userId } = route.params || {};

  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    }
  });

  const resetMutation = useMutation({
    mutationFn: AuthService.resetPassword,
    onSuccess: (res: any) => {
      // The API returns the wrapper directly, so 'res' contains 'code'
      // Do not use res.data because the backend returns nested user profile inside 'data'
      const responseData = res.code !== undefined ? res : res.data;
      
      if (responseData.code === "1" || responseData.success) {
        Toast.show({ type: 'success', text1: responseData.message || 'Password updated successfully!' });
        NavigationService.reset(RouteConstant.Login);
      } else {
        Toast.show({ type: 'error', text1: responseData.message || 'Could not update password' });
      }
    },
    onError: (error: any) => {
      Toast.show({ type: 'error', text1: error.message || error?.response?.data?.message || 'Something went wrong' });
    }
  });

  const handleSetPassword = (data: any) => {
    if (!data.password || !data.confirmPassword) {
      Toast.show({ type: 'error', text1: 'Please enter all fields' });
      return;
    }
    if (data.password !== data.confirmPassword) {
      Toast.show({ type: 'error', text1: 'Passwords do not match' });
      return;
    }

    const payload = {
      id: userId,
      new_password: data.password,
      confirm_password: data.confirmPassword,
    };
    console.log("Reset Password Payload: ", payload);
    resetMutation.mutate(payload);
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    control,
    handleSubmit,
    handleSetPassword,
    goBack,
    isPending: resetMutation.isPending,
  };
};
