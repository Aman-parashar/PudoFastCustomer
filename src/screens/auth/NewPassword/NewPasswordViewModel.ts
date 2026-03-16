import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

type NewPasswordRouteProp = RouteProp<RootStackParamList, 'NewPassword'>;

export const useNewPasswordViewModel = () => {
  const route = useRoute<NewPasswordRouteProp>();
  const { userId } = route.params;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSetPassword = () => {
    if (!password || !confirmPassword) {
      alert('Please enter all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Password updated successfully!');
    NavigationService.navigate(RouteConstant.Login);
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    showConfirmPassword,
    handleSetPassword,
    goBack,
    toggleShowPassword,
    toggleShowConfirmPassword,
  };
};
