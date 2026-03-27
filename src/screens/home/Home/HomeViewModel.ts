import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useHomeViewModel = () => {
  const [pickupAddress, setPickupAddress] = useState('Enter Address');
  const [deliveryAddress, setDeliveryAddress] = useState('Enter Address');

  const navigateToNotifications = () => {
    NavigationService.navigate(RouteConstant.Notification);
  };

  const navigateToChooseAddress = (
    type: 'pickup' | 'delivery',
    onSelect?: (address: string) => void,
  ) => {
    NavigationService.navigate(RouteConstant.ChooseAddress, { type, onSelect });
  };

  const navigateToDeliveryMiles = () => {
    NavigationService.navigate(RouteConstant.TransitAndReceiverDetails);
  };

  return {
    pickupAddress,
    setPickupAddress,
    deliveryAddress,
    setDeliveryAddress,
    navigateToNotifications,
    navigateToChooseAddress,
    navigateToDeliveryMiles,
  };
};
