import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

type PaymentOptionsRouteProp = RouteProp<RootStackParamList, 'PaymentOptions'>;

export const PAYMENT_METHODS = [
  { id: '1', title: '**** **** **** 2545', expiry: 'Expires 08/25' },
  { id: '2', title: '**** **** **** 2545', expiry: 'Expires 08/25' },
];

export const usePaymentOptionsViewModel = () => {
  const route = useRoute<PaymentOptionsRouteProp>();
  const { orderData } = route.params || {};

  const [paymentType, setPaymentType] = useState<'debit' | 'credit'>('debit');
  const [selectedMethod, setSelectedMethod] = useState('1');

  const handleNext = () => {
    const updatedOrderData = {
      ...orderData,
      paymentType: paymentType,
      cardId: selectedMethod,
    };
    // Navigating to Step 5 (DeliveryConfirmation)
    NavigationService.navigate(RouteConstant.DeliveryConfirmation, { orderData: updatedOrderData });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const selectMethod = (id: string) => {
    setSelectedMethod(id);
  };

  return {
    orderData,
    paymentType,
    setPaymentType,
    selectedMethod,
    selectMethod,
    handleNext,
    goBack,
  };
};
