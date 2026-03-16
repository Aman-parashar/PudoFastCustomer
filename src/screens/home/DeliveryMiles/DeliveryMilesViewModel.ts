import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useDeliveryMilesViewModel = () => {
  const [miles, setMiles] = useState('5');

  const goBack = () => {
    NavigationService.goBack();
  };

  const continueToTransitDetails = () => {
    NavigationService.navigate(RouteConstant.TransitAndReceiverDetails, { orderData: { miles } });
  };

  return {
    miles,
    setMiles,
    goBack,
    continueToTransitDetails,
  };
};
