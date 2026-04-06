import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

export enum OrderStatus {
  START_PICKUP = 'Start Pickup',
  ORDER_PICKED_UP = 'Order Picked up',
  ON_THE_WAY_TO_DELIVER = 'On the way to Deliver',
  DELIVER = 'Deliver',
  DELIVERED = 'Delivered',
}

export const useOrderTrackViewModel = () => {
  const [status, setStatus] = useState<OrderStatus>(OrderStatus.START_PICKUP);
  const [isDeliveredModalVisible, setIsDeliveredModalVisible] = useState(false);

  const pickupAddress = '103, Abs circle';
  const dropAddress = '124, Street, Ca Usa';
  const distance = status === OrderStatus.DELIVERED ? '0.0 km' : status === OrderStatus.START_PICKUP ? '3.4 km' : '5.2 km';
  const time = status === OrderStatus.DELIVERED ? '0 Min' : status === OrderStatus.START_PICKUP ? '17 Min' : '22 Min';

  const handleSwipeComplete = () => {
    switch (status) {
      case OrderStatus.START_PICKUP:
        setStatus(OrderStatus.ORDER_PICKED_UP);
        break;
      case OrderStatus.ORDER_PICKED_UP:
        setStatus(OrderStatus.DELIVER);
        break;
      case OrderStatus.DELIVER:
        setIsDeliveredModalVisible(true);
        break;
      default:
        break;
    }
  };

  const confirmDelivery = () => {
    setIsDeliveredModalVisible(false);
    setStatus(OrderStatus.DELIVERED);
    NavigationService.navigate(RouteConstant.DeliveryDetails, { orderId: '112515212' });
  };

  const cancelDelivery = () => {
    setIsDeliveredModalVisible(false);
  };

  const handleChat = () => {
    NavigationService.navigate(RouteConstant.Chat, { orderId: '112515212' });
  };

  const getSwipeButtonTitle = () => {
    switch (status) {
      case OrderStatus.START_PICKUP: return 'Start Pickup';
      case OrderStatus.ORDER_PICKED_UP: return 'Order Picked up';
      case OrderStatus.DELIVER: return 'Deliver';
      case OrderStatus.DELIVERED: return 'DONE';
      default: return 'Swipe';
    }
  };

  return {
    status,
    pickupAddress,
    dropAddress,
    distance,
    time,
    handleSwipeComplete,
    confirmDelivery,
    cancelDelivery,
    handleChat,
    swipeButtonTitle: getSwipeButtonTitle(),
    isDeliveredModalVisible,
  };
};
