import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

type DeliveryConfirmationRouteProp = RouteProp<RootStackParamList, 'DeliveryConfirmation'>;

export const useDeliveryConfirmationViewModel = () => {
  const route = useRoute<DeliveryConfirmationRouteProp>();
  const { orderData, fromHistory } = route.params || {};

  const [comment, setComment] = useState('');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const handleConfirm = () => {
    // Collect all data
    const finalOrder = {
      ...orderData,
      driverComment: comment,
    };
    
    // Show success modal instead of Alert
    setIsSuccessModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsSuccessModalVisible(false);
    NavigationService.navigate(RouteConstant.Main as any);
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
    isSuccessModalVisible,
    handleCloseModal,
  };
};
