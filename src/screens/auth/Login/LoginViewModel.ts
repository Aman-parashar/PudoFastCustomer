import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Alert, Platform } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { AuthService } from '../../../services/AuthService';
import { ApiError, LoginFormValues, SocialLoginType, Country } from '../../../types/api';
import { DeviceData } from '../../../utils/device';
import Toast from 'react-native-toast-message';
import { storage } from '../../../helper/MMKVStorage';

export const useLoginViewModel = () => {

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
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  // React Query Mutation - Like the shared 'ApiManager' logic in iOS
  const loginMutation = useMutation({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      if (data.code == '1') {
         Toast.show({ type: 'success', text1: data.message || 'Login successfully' });
         
         if (data.data?.token) {
           storage.set('token', data.data.token);
         }

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

        // Alert.alert('Error', message);
      }
    },
  });

  const handleLogin = (data: LoginFormValues) => {
    const payload: LoginFormValues = {
      login_type: SocialLoginType.simple,
      login_with: data.email ? "email" : "phone",
      country_code: selectedCountry?.country_code ?? "+1",
      email: data.email ?? "",
      phone: data.phone ?? "",
      password: data.password,

      device_type: Platform.OS === 'ios' ? 'I' : 'A',
      device_token: DeviceData.device_token
    }
    console.log(payload, 'payload', DeviceData.device_token,);
    loginMutation.mutate(payload);
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
    selectedCountry,
    setSelectedCountry,
    showPicker,
    setShowPicker,
    isPending: loginMutation.isPending,
  };
};
