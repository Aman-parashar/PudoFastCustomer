import { useState } from 'react';
import { Alert } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

type DeliveryConfirmationRouteProp = RouteProp<RootStackParamList, 'DeliveryConfirmation'>;

export const useDeliveryConfirmationViewModel = () => {
  const route = useRoute<DeliveryConfirmationRouteProp>();
  const { orderData, fromHistory } = route.params || {};

  const [comment, setComment] = useState('');

  const handleConfirm = () => {
    // Collect all data
    const finalOrder = {
      ...orderData,
      driverComment: comment,
    };
    
    // Process final confirmation
    Alert.alert(
      'Order Confirmed',
      'Your order has been placed successfully!',
      [
        {
          text: 'OK',
          onPress: () => NavigationService.navigate(RouteConstant.Main as any),
        },
      ]
    );
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    orderData,
    comment,
    setComment,
    handleConfirm,
    goBack,
    fromHistory,
  };
};
