import { useState, useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../../../services/AuthService';
import { ApiError, ApiResponse, ApiStatusCode, VerifyOtpRequest } from '../../../types/api';
import Toast from 'react-native-toast-message';
import { storage } from '../../../helper/MMKVStorage';

type OTPVerificationRouteProp = RouteProp<RootStackParamList, 'OTPVerification'>;

export const useOTPViewModel = () => {
  const route = useRoute<any>();
  const { type, value, userData, fromScreen } = route.params;

  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputs = useRef<TextInput[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const resendOtpMutation = useMutation({
    mutationFn: AuthService.resendOtp,
    onSuccess: (res: any) => {
      const data = res;
      if (data.code === ApiStatusCode.SUCCESS || data.code === "1" || data.success) {
        Toast.show({
          type: 'success',
          text1: data.message || 'OTP Resent successfully!',
        });
        setTimer(60);
      } else {
        Toast.show({
          type: 'error',
          text1: data.message || 'Error resending OTP',
        });
      }
    },
    onError: (error: ApiError | any) => {
      Toast.show({
        type: 'error',
        text1: error.message || error?.response?.data?.message || 'Something went wrong',
      });
    },
  });

  const handleResend = () => {
    if (timer === 0) {
      const payload: any = {
        type: type as 'email' | 'phone',
        [type]: value,
      };

      if (type === 'phone') {
        payload.country_code = userData?.country_code || '+1';
      }

      console.log("resend otp payload:", payload);
      resendOtpMutation.mutate(payload);
    }
  };

  const verifyOtpMutation = useMutation({
    mutationFn: AuthService.verifyOtp,
    onSuccess: (res: any) => {

      console.log("verify otp response:", res?.data || res);
      // API typically wraps response inside an axios response.data, 
      // but AuthService might already extract it or it returns full AxiosResponse.
      // Let's assume AuthService doesn't extract data directly based on its simple call `apiService.post`.
      const data = res;
      if (data.code === ApiStatusCode.SUCCESS || data.code === "1") {
        Toast.show({
          type: 'success',
          text1: data.message || 'OTP Verified successfully!',
        });
        console.log("token at verfiy otp==>",data.data.token)
        if (data.data?.token) {
          storage.set('token', data.data.token);
        }

        if (fromScreen === 'forgotPassword') {
          NavigationService.navigate(RouteConstant.NewPassword, { userId: userData?.id });
        } else {
          NavigationService.navigate(RouteConstant.Main);
        }
      } else {
        Toast.show({
          type: 'error',
          text1: data.message || 'Invalid OTP',
        });
      }
    },
    onError: (error: ApiError | any) => {
      console.log("verify otp error:", error?.response?.data || error);
      Toast.show({
        type: 'error',
        text1: error.message || error?.response?.data?.message || 'Something went wrong',
      });
    },
  });

  const handleVerify = () => {
    const code = otp.join('');
    if (code.length < 4) {
      alert('Please enter complete OTP');
      return;
    }
    
    const payload: any = {
      otp: code,
      type: type as 'email' | 'phone',
      [type]: value,
      user_id: userData?.id,
    };
    
    console.log("verify otp payload:", payload);
    verifyOtpMutation.mutate(payload);
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `00:${secs < 10 ? '0' : ''}${secs}`;
  };

  return {
    otp,
    timer,
    inputs,
    type,
    value,
    handleOtpChange,
    handleKeyPress,
    handleResend,
    handleVerify,
    goBack,
    formatTime,
    isPending: verifyOtpMutation.isPending || resendOtpMutation.isPending,
  };
};
