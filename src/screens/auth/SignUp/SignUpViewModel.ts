import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Alert, Platform } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { AuthService } from '../../../services/AuthService';
import { ApiError, ApiResponse, ApiStatusCode, Country, SignUpRequest, SocialLoginType } from '../../../types/api';
import { DeviceData } from '../../../utils/device';
import Toast from 'react-native-toast-message';


export const useSignUpViewModel = () => {
  const {
    control,
    handleSubmit,
  } = useForm<SignUpRequest>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      password: '',
    },
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  // React Query Mutation - Like the shared 'ApiManager' logic in iOS
  const signupMutation = useMutation({
    mutationFn: AuthService.signup,
    onSuccess: (res: ApiResponse, variables: SignUpRequest) => {
      if (res.code === ApiStatusCode.SUCCESS || res.code === ApiStatusCode.OTP_VERIFICATION) {
        Toast.show({
          type: 'success',
          text1: res.message || 'Signup successful!',
        });
        // Navigate to OTP Verification
        NavigationService.navigate(RouteConstant.OTPVerification, {
          type: 'phone',
          value: variables.phone,
          userData: res.data,
          fromScreen: 'signup'
        });
      } else {
        Toast.show({
          type: 'error',
          text1: res.message || 'Something went wrong during signup',
        });
      }

    },
    onError: (error: ApiError) => {
      Toast.show({
        type: 'error',
        text1: error.message || 'Something went wrong during signup',
      });
    },
  });

  const handleSignUp = (data: SignUpRequest) => {
    if (!agreeTerms) {
      Toast.show({
        type: 'error',
        text1: 'Terms & Conditions',
        text2: 'Please agree to the terms and conditions to proceed.',
      });
      return;
    }

    const payload: SignUpRequest = {
      ...data,
      country_code: selectedCountry?.country_code || "+1",
      country_id: selectedCountry?.id || 233,
      login_type: SocialLoginType.simple,
      social_id: "",
      type: "customer",
      delivery_type: "",
      device_type: Platform.OS === 'ios' ? 'I' : 'A',
      device_token: DeviceData.device_token || "sample_fcm_token",

      version: DeviceData.version || "1.0.0",
    }

    signupMutation.mutate(payload);
  };

  const navigateToLogin = () => {
    NavigationService.navigate(RouteConstant.Login);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleAgreeTerms = () => {
    setAgreeTerms(!agreeTerms);
  };

  return {
    control,
    handleSubmit,
    handleSignUp,
    agreeTerms,
    showPassword,
    selectedCountry,
    setSelectedCountry,
    showPicker,
    setShowPicker,
    navigateToLogin,
    toggleShowPassword,
    toggleAgreeTerms,
    isPending: signupMutation.isPending,
  };
};
