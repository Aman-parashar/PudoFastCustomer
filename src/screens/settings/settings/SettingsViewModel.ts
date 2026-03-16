import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';

export const useSettingsViewModel = () => {
  const navigateToNotifications = () => {
    NavigationService.navigate(RouteConstant.Notification);
  };

  const navigateToProfile = () => {
    NavigationService.navigate(RouteConstant.Profile);
  };

  const logout = () => {
    NavigationService.navigate(RouteConstant.Start);
  };

  const settingsItems = [
    {
      id: 1,
      title: 'My Reviews',
      icon: Images.star,
      onPress: () => NavigationService.navigate(RouteConstant.MyReviews),
    },
    {
      id: 2,
      title: 'Change Password',
      icon: Images.changePassword,
      onPress: () => NavigationService.navigate(RouteConstant.ChangePassword),
    },
    {
      id: 3,
      title: 'Terms & Conditions',
      icon: Images.terms,
      onPress: () =>
        NavigationService.navigate(RouteConstant.WebViewScreen, {
          title: 'Terms & Conditions',
          url: 'https://pudofast.com/pudofast/home/termscondition',
        }),
    },
    {
      id: 4,
      title: 'Privacy Policy',
      icon: Images.privacy,
      onPress: () =>
        NavigationService.navigate(RouteConstant.WebViewScreen, {
          title: 'Privacy Policy',
          url: 'https://pudofast.com/pudofast/home/privacy_policy',
        }),
    },
    {
      id: 5,
      title: 'FAQ',
      icon: Images.support,
      onPress: () =>
        NavigationService.navigate(RouteConstant.WebViewScreen, {
          title: 'FAQ',
          url: 'https://pudofast.com/pudofast/home/faq',
        }),
    },
    {
      id: 6,
      title: 'About Us',
      icon: Images.support,
      onPress: () =>
        NavigationService.navigate(RouteConstant.WebViewScreen, {
          title: 'About Us',
          url: 'https://pudofast.com/pudofast/home/aboutus',
        }),
    },
    {
      id: 7,
      title: 'Help & Support',
      icon: Images.support,
      onPress: () => NavigationService.navigate(RouteConstant.ContactUs),
    },
  ];

  return {
    navigateToNotifications,
    navigateToProfile,
    logout,
    settingsItems,
  };
};
