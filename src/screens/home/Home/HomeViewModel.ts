import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useHomeViewModel = () => {
  const navigateToNotifications = () => {
    NavigationService.navigate(RouteConstant.Notification);
  };

  const navigateToChooseAddress = (type: 'pickup' | 'delivery') => {
    NavigationService.navigate(RouteConstant.ChooseAddress, { type });
  };

  const navigateToDeliveryMiles = () => {
    NavigationService.navigate(RouteConstant.DeliveryMiles);
  };

  return {
    navigateToNotifications,
    navigateToChooseAddress,
    navigateToDeliveryMiles,
  };
};
