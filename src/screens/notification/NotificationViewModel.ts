import NavigationService from '../../navigation/NavigationService';

export const useNotificationViewModel = () => {
  const goBack = () => {
    NavigationService.goBack();
  };

  const notificationData = [1, 2, 3, 4, 5];

  return {
    goBack,
    notificationData,
  };
};
