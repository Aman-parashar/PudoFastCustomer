import { useState, useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

type OTPVerificationRouteProp = RouteProp<RootStackParamList, 'OTPVerification'>;

export const useOTPViewModel = () => {
  const route = useRoute<OTPVerificationRouteProp>();
  const { type, value } = route.params;

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

  const handleResend = () => {
    if (timer === 0) {
      setTimer(60);
      alert('OTP Resent Successfully');
    }
  };

  const handleVerify = () => {
    const code = otp.join('');
    if (code.length < 4) {
      alert('Please enter complete OTP');
      return;
    }
    NavigationService.navigate(RouteConstant.NewPassword, { userId: 'mock-user-id' });
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
  };
};
