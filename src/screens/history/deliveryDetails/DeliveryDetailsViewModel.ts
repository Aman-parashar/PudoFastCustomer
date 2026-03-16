import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';

type DeliveryDetailsRouteProp = RouteProp<RootStackParamList, 'DeliveryDetails'>;

export const useDeliveryDetailsViewModel = () => {
  const route = useRoute<DeliveryDetailsRouteProp>();
  const { orderId } = route.params;

  // Mock data based on iOS structure
  const orderDetails = {
    deliveryNo: orderId || 'PF12345678',
    status: 'Delivered',
    price: 25.0,
    pickupAddress: '123 Pickup St, Downtown, City',
    dropAddress: '456 Delivery Ave, Uptown, City',
    receiverName: 'John Doe',
    receiverEmail: 'john.doe@example.com',
    receiverPhone: '+1 234 567 8900',
    itemType: 'General',
    deliveryType: 'Driver', // Cyclist, Driver, Services
    description: 'A small box containing electronics.',
    paymentMethod: 'Visa Card',
    cardNumber: '4242',
    driverName: 'Mike Driver',
    driverRating: 4.8,
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const goToHome = () => {
    NavigationService.navigate(RouteConstant.Main);
  };

  const getServiceIcon = () => {
    switch (orderDetails.deliveryType) {
      case 'Cyclist':
        return Images.cyclist_Type_Selected;
      case 'Driver':
        return Images.driver_Type_Selected;
      case 'Services':
        return Images.serviceTypeSelected;
      default:
        return Images.driver_Type_Selected;
    }
  };

  return {
    orderDetails,
    goBack,
    goToHome,
    getServiceIcon,
  };
};
