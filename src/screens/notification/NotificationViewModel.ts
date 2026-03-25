import { useState, useMemo } from 'react';
import NavigationService from '../../navigation/NavigationService';

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  time: string;
  date: string; // e.g., '29 Jan'
}

export interface NotificationSection {
  title: string;
  data: NotificationItem[];
}

const STATIC_DATA: NotificationItem[] = [
  {
    id: '1',
    title: 'Order Delivered',
    body: 'Your order #12345 has been successfully delivered to the destination.',
    time: '02:22 PM',
    date: '29 Jan',
  },
  {
    id: '2',
    title: 'Promo Applied',
    body: 'A new promo code has been applied to your account. Enjoy your next delivery!',
    time: '04:24 PM',
    date: '29 Jan',
  },
  {
    id: '3',
    title: 'Pickup Scheduled',
    body: 'Your pickup for order #67890 has been successfully scheduled for tomorrow.',
    time: '02:22 PM',
    date: '30 Jan',
  },
  {
    id: '4',
    title: 'Payment Confirmed',
    body: 'Payment for your recent order has been received. Thank you for using PudoFast.',
    time: '04:24 PM',
    date: '30 Jan',
  },
  {
    id: '5',
    title: 'System Update',
    body: 'We have updated our terms and conditions. Please review them at your convenience.',
    time: '04:24 PM',
    date: '30 Jan',
  },
];

export const useNotificationViewModel = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>(STATIC_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const goBack = () => {
    NavigationService.goBack();
  };

  const groupedNotifications = useMemo(() => {
    const groups: { [key: string]: NotificationItem[] } = {};
    notifications.forEach(item => {
      if (!groups[item.date]) {
        groups[item.date] = [];
      }
      groups[item.date].push(item);
    });

    return Object.keys(groups).map(date => ({
      title: date,
      data: groups[date],
    }));
  }, [notifications]);

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return {
    notifications: groupedNotifications,
    totalCount: notifications.length,
    isLoading,
    deleteNotification,
    clearAll,
    goBack,
  };
};
