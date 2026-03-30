import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { AuthService } from '../../../services/AuthService';
import Toast from 'react-native-toast-message';

interface ForgotFormValues {
  email: string;
  phone: string;
}

export const useForgotPasswordViewModel = () => {
  const { control, handleSubmit } = useForm<ForgotFormValues>({
    defaultValues: {
      email: '',
      phone: '',
    }
  });

  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [showPicker, setShowPicker] = useState(false);

  const forgotMutation = useMutation({
    mutationFn: AuthService.forgotPassword,
    onSuccess: (res: any) => {
      const data = res;
      if (data.code === "1" || data.success) {
        Toast.show({ type: 'success', text1: data.message || 'Verification sent successfully!' });
        
        NavigationService.navigate(RouteConstant.OTPVerification, { 
          type: loginType, 
          value: loginType === 'email' ? control._formValues.email : control._formValues.phone,
          fromScreen: 'forgotPassword',
          userData: data.data
        });
      } else {
        Toast.show({ type: 'error', text1: data.message || 'Could not verify account details.' });
      }
    },
    onError: (error: any) => {
      Toast.show({ type: 'error', text1: error.message || error?.response?.data?.message || 'Something went wrong' });
    }
  });

  const handleSend = (data: ForgotFormValues) => {
    const value = loginType === 'email' ? data.email : data.phone;
    if (!value || !value.trim()) {
      Toast.show({ type: 'error', text1: `Please enter your ${loginType}` });
      return;
    }

    const payload = {
      forgot_with: loginType,
      phone: loginType === 'phone' ? data.phone : "",
      country_code: loginType === 'phone' ? (selectedCountry?.country_code ?? "+1") : "",
      email: loginType === 'email' ? data.email : ""
    };

    console.log("Forgot Password payload:", payload);
    forgotMutation.mutate(payload);
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    control,
    handleSubmit,
    loginType,
    setLoginType,
    selectedCountry,
    setSelectedCountry,
    showPicker,
    setShowPicker,
    handleSend,
    goBack,
    isPending: forgotMutation.isPending,
  };
};
