import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useLoginViewModel = () => {
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    NavigationService.navigate(RouteConstant.Main);
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
  };
};
