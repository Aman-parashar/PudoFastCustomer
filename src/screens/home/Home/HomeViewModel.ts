import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useHomeViewModel = () => {

  const [pickupLocation, setPickupLocation] = useState<{ address: string, latitude: number, longitude: number }>({ address: 'Please Select Address', latitude: 0, longitude: 0 });
  const [deliveryLocation, setDeliveryLocation] = useState<{ address: string, latitude: number, longitude: number }>({ address: 'Please Select Address', latitude: 0, longitude: 0 });
  const navigateToNotifications = () => {
    NavigationService.navigate(RouteConstant.Notification);
  };

  const navigateToChooseAddress = (
    type: 'pickup' | 'delivery',
    onSelect?: (address: { address: string, latitude: number, longitude: number }) => void,
  ) => {
    NavigationService.navigate(RouteConstant.ChooseAddress, { type, onSelect });
  };

  const navigateToDeliveryMiles = () => {
    NavigationService.navigate(RouteConstant.TransitAndReceiverDetails, {
      orderData: {
        pickupLocation,
        deliveryLocation,
      },
    });
  };

  return {
    pickupLocation,
    deliveryLocation,
    setPickupLocation,
    setDeliveryLocation,
    navigateToNotifications,
    navigateToChooseAddress,
    navigateToDeliveryMiles,
  };
};
