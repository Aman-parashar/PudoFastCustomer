import { useState } from 'react';
import { Alert } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

type PaymentOptionsRouteProp = RouteProp<RootStackParamList, 'PaymentOptions'>;

export const PAYMENT_METHODS = [
  { id: '1', title: '**** **** **** 2545', expiry: 'Expires 08/25', type: 'Visa' },
  { id: '2', title: '**** **** **** 1289', expiry: 'Expires 12/26', type: 'Mastercard' },
];

export const usePaymentOptionsViewModel = () => {
  const route = useRoute<PaymentOptionsRouteProp>();
  const { orderData } = route.params;

  const [selectedMethod, setSelectedMethod] = useState('1');

  const handlePlaceOrder = () => {
    Alert.alert(
      'Success',
      'Your order has been placed successfully!',
      [{ text: 'OK', onPress: () => NavigationService.navigate(RouteConstant.Main as any) }]
    );
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const selectMethod = (id: string) => {
    setSelectedMethod(id);
  };

  return {
    orderData,
    selectedMethod,
    selectMethod,
    handlePlaceOrder,
    goBack,
  };
};
