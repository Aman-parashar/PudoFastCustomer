import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { AuthService } from '../../../services/AuthService';
import { ApiError } from '../../../types/api';
import { DeviceData } from '../../../utils/device';

export const useLoginViewModel = () => {
  enum SocialLoginType {
    google = "G",
    facebook = "F",
    apple = "A",
    simple = "S"
  }

  interface LoginFormValues {
    login_type: keyof SocialLoginType;
    login_with: "email" | "phone";
    country_code: string;
    email: string;
    phone: string;
    password: string;
    social_id?: string;
    device_type: string;
  }
  const {
    control,
    handleSubmit,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
      phone: "",
    },
  });

  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // React Query Mutation - Like the shared 'ApiManager' logic in iOS
  const loginMutation = useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      console.log('Login Success:', data, DeviceData.device_type);
      if (data.success) {
        // Handle session token as in iOS: storage.set('token', data.data.token);
        NavigationService.navigate(RouteConstant.Main);
      } else {
        Alert.alert('Login failed', data.message || 'Check your credentials.');
      }
    },
    onError: (error: ApiError) => {

      const message = error.message || 'Login failed';

      // We can handle specific status codes here if needed
      if (error.status === 422) {
        Alert.alert('Validation Error', 'Format of input is invalid.');
      } else if (error.status === 404) {
        Alert.alert('User not found', 'No account exists with this information.');
      } else {
        console.log(DeviceData.device_type, 'Login Error:', error);
        // Alert.alert('Error', message);
      }
    },
  });

  const handleLogin = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  const navigateToSignUp = () => {
    NavigationService.navigate(RouteConstant.SignUp);
  };

  const navigateToForgotPassword = () => {
    NavigationService.navigate(RouteConstant.ForgotPassword, { type: 'email' });
  };

  const skipToHome = () => {
    NavigationService.navigate(RouteConstant.Main);
  };

  const toggleLoginType = (type: 'email' | 'phone') => {
    setLoginType(type);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    loginType,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    showPassword,
    handleLogin,
    navigateToSignUp,
    navigateToForgotPassword,
    skipToHome,
    toggleLoginType,
    toggleShowPassword,
    handleSubmit,
    control,
    isPending: loginMutation.isPending,
  };
};
