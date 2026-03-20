import { useState, useMemo } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { OrderData } from '../../../components/common/HistoryCard';

export type TabType = 'upcoming' | 'completed' | 'cancelled';

const MOCK_DATA: Record<TabType, { title: string; data: OrderData[] }[]> = {
  upcoming: [
    {
      title: 'Today',
      data: [
        { id: '1', orderId: '14524512', price: '$20', status: 'confirmed', statusLabel: 'Confirmed' },
      ],
    },
    {
      title: 'Tomorrow',
      data: [
        { id: '2', orderId: '14524512', price: '$20', status: 'way_to_pickup', statusLabel: 'Way to pickup' },
      ],
    },
    {
      title: '12 Dec',
      data: [
        { id: '3', orderId: '14524512', price: '$20', status: 'pending', statusLabel: 'Pending' },
      ],
    },
  ],
  completed: [
    {
      title: '5 dec',
      data: [
        { id: '4', orderId: '14524512', price: '$20', status: 'delivered', statusLabel: 'Delivered' },
      ],
    },
    {
      title: '4 Dec',
      data: [
        { id: '5', orderId: '14524512', price: '$20', status: 'delivered', statusLabel: 'Delivered' },
      ],
    },
    {
      title: '3 Dec',
      data: [
        { id: '6', orderId: '14524512', price: '$20', status: 'delivered', statusLabel: 'Delivered' },
      ],
    },
  ],
  cancelled: [
    {
      title: '5 dec',
      data: [
        { id: '7', orderId: '14524512', price: '$20', status: 'cancelled', statusLabel: 'Cancelled' },
      ],
    },
    {
      title: '4 Dec',
      data: [
        { id: '8', orderId: '14524512', price: '$20', status: 'cancelled', statusLabel: 'Cancelled' },
      ],
    },
    {
      title: '3 Dec',
      data: [
        { id: '9', orderId: '14524512', price: '$20', status: 'cancelled', statusLabel: 'Cancelled' },
      ],
    },
  ],
};

export const useHistoryViewModel = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>('upcoming');

  const historyData = useMemo(() => MOCK_DATA[selectedTab], [selectedTab]);

  const navigateToDeliveryDetails = (orderId: string) => {
    NavigationService.navigate(RouteConstant.DeliveryDetails, { orderId });
  };

  const navigateToNotifications = () => {
    NavigationService.navigate(RouteConstant.Notification);
  };

  const onTrack = (id: string) => {
    NavigationService.navigate(RouteConstant.DeliveryConfirmation, { orderData: { orderId: id }, fromHistory: true });
  };

  const onCancel = (id: string) => {
    console.log('Cancel', id);
  };

  const onReview = (id: string) => {
    console.log('Review', id);
  };

  const onReport = (id: string) => {
    console.log('Report', id);
  };

  return {
    selectedTab,
    setSelectedTab: (val: string) => setSelectedTab(val as TabType),
    historyData,
    navigateToDeliveryDetails,
    navigateToNotifications,
    onTrack,
    onCancel,
    onReview,
    onReport,
  };
};
