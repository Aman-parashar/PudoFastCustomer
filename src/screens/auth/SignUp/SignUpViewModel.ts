import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useSignUpViewModel = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    NavigationService.navigate(RouteConstant.Main);
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
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    password,
    setPassword,
    agreeTerms,
    showPassword,
    handleSignUp,
    navigateToLogin,
    toggleShowPassword,
    toggleAgreeTerms,
  };
};
