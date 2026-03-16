import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/authSlice';
import { AuthService } from '../services/AuthService';
import { Alert } from 'react-native';

export const useLogin = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (loginData: any) => {
    dispatch(loginStart());
    setIsLoading(true);
    try {
      const response = await AuthService.login(loginData);
      if (response.status === 'success') {
        dispatch(loginSuccess({ user: response.data, token: response.data.token }));
        return response.data;
      } else {
        dispatch(loginFailure(response.message));
        Alert.alert('Error', response.message);
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Something went wrong';
      dispatch(loginFailure(errorMessage));
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
