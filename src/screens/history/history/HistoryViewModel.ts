import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export const useHistoryViewModel = () => {
  const navigateToDeliveryDetails = (orderId: string) => {
    NavigationService.navigate(RouteConstant.DeliveryDetails, { orderId });
  };

  const historyData = [1, 2, 3, 4, 5];

  return {
    navigateToDeliveryDetails,
    historyData,
  };
};
