import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useForgotPasswordViewModel = () => {
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleSend = () => {
    const value = loginType === 'email' ? email : phone;
    if (!value.trim()) {
      alert(`Please enter your ${loginType}`);
      return;
    }
    NavigationService.navigate(RouteConstant.OTPVerification, { type: loginType, value });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const toggleLoginType = (type: 'email' | 'phone') => {
    setLoginType(type);
  };

  return {
    loginType,
    email,
    setEmail,
    phone,
    setPhone,
    countryCode,
    setCountryCode,
    handleSend,
    goBack,
    toggleLoginType,
  };
};
