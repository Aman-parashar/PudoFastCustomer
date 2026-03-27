import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';
import { Share } from 'react-native';

export const useSettingsViewModel = () => {
  const navigateToNotifications = () => {
    NavigationService.navigate(RouteConstant.Notification);
  };

  const navigateToProfile = () => {
    NavigationService.navigate(RouteConstant.EditProfile);
  };

  const handleLogout = () => {
    NavigationService.navigate(RouteConstant.Start);
  };

  const user = {
    fullName: 'John Doe',
    rating: 4.0,
  };

  const settingsItems = [
    {
      id: 1,
      title: 'My Receiving Order',
      icon: Images.groupboxIcon,
      onPress: () =>
        NavigationService.navigate(RouteConstant.ReceivingOrderHistory, {
          isFromSettings: true,
          title: 'My Receiving Order',
        }),
    },
    {
      id: 2,
      title: 'My Reviews',
      icon: Images.myReviews,
      onPress: () => NavigationService.navigate(RouteConstant.MyReviews),
    },
    {
      id: 3,
      title: 'Change Password',
      icon: Images.changePasswordListIcon,
      onPress: () => NavigationService.navigate(RouteConstant.ChangePassword),
    },
    {
      id: 4,
      title: 'Payment Methods',
      icon: Images.paymentMethodIcon,
      onPress: () => {},
    },
    { id: 5, title: 'Rate App', icon: Images.star, onPress: () => {} },
    {
      id: 6,
      title: 'Share App',
      icon: Images.shareApp,
      onPress: () => {
        Share.share({
          message: 'Hey! Download this app, You will like it.PUDO FAST App',
        });
      },
    },
    {
      id: 7,
      title: 'FAQ',
      icon: Images.faqIcon,
      onPress: () =>
        NavigationService.navigate(RouteConstant.WebViewScreen, {
          title: 'FAQ',
          url: 'https://pudofast.com/pudofast/home/faq',
        }),
    },
    {
      id: 8,
      title: 'Terms & Conditions',
      icon: Images.terms,
      onPress: () =>
        NavigationService.navigate(RouteConstant.WebViewScreen, {
          title: 'Terms & Conditions',
          url: 'https://pudofast.com/pudofast/home/termscondition',
        }),
    },
    {
      id: 9,
      title: 'Privacy Policy',
      icon: Images.privacy,
      onPress: () =>
        NavigationService.navigate(RouteConstant.WebViewScreen, {
          title: 'Privacy Policy',
          url: 'https://pudofast.com/pudofast/home/privacy_policy',
        }),
    },
    {
      id: 10,
      title: 'About Us',
      icon: Images.aboutUs,
      onPress: () =>
        NavigationService.navigate(RouteConstant.WebViewScreen, {
          title: 'About Us',
          url: 'https://pudofast.com/pudofast/home/aboutus',
        }),
    },
    {
      id: 11,
      title: 'Contact Us',
      icon: Images.contactUsIcon,
      onPress: () => NavigationService.navigate(RouteConstant.ContactUs),
    },
    {
      id: 12,
      title: 'Delete Account',
      icon: Images.delete,
      onPress: () => {
        Alert.alert(
          'Delete Account',
          'Are you sure you want to delete your account? This action cannot be undone.',
          [
            {
              text: 'No',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => console.log('Delete Pressed'),
              style: 'destructive',
            },
          ],
          { cancelable: true },
        );
      },
    },
  ];

  return {
    navigateToNotifications,
    navigateToProfile,
    handleLogout,
    user,
    settingsItems,
  };
};
