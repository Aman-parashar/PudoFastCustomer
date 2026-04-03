import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';
import { Share, Alert } from 'react-native';
import { StorageMMKV } from '../../../helper/MMKVStorage';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../../../services/AuthService';
import Toast from 'react-native-toast-message';
import { UserData } from '../../../models/User';
import { ProfileService } from '../../../services/ProfileService';

export const useSettingsViewModel = () => {
  const navigateToNotifications = () => {
    NavigationService.navigate(RouteConstant.Notification);
  };

  const navigateToProfile = (user: UserData) => {
    NavigationService.navigate(RouteConstant.EditProfile, { user });
  };

  const logoutMutation = useMutation({
    mutationFn: AuthService.logout,
    onSuccess: (data: any) => {
      if (data?.code == '1') {
        Toast.show({ type: 'success', text1: data?.message || 'Logged out successfully' });
      }
      StorageMMKV.clearAll();
      NavigationService.reset(RouteConstant.Login);
    },
    onError: (error: any) => {
      Alert.alert('Logout failed', error?.message || 'Something went wrong while logging out.');
    }
  });

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Do you really want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => logoutMutation.mutate(),
        },
      ],
      { cancelable: true }
    );
  };

  const user = {
    fullName: 'John Doe',
    rating: 4.0,
  };

  const [rateModalVisible, setRateModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const rateAppMutation = useMutation({
    mutationFn: (rate: number) => ProfileService.rateApp(rate),
    onSuccess: (data: any) => {
      setRateModalVisible(false);
      setSelectedRating(0);
      Toast.show({
        type: 'success',
        text1: 'Thank you!',
        text2: data?.message || 'Your rating has been submitted.',
      });
    },
    onError: (err: any) => {
      Alert.alert('Error', err?.message || 'Failed to submit rating');
    },
  });

  const submitRating = () => rateAppMutation.mutate(selectedRating);

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
    { id: 5, title: 'Rate App', icon: Images.star, onPress: () => {
      setSelectedRating(0);
      setRateModalVisible(true);
    } },
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
    isLoggingOut: logoutMutation.isPending,
    rateModalVisible,
    setRateModalVisible,
    selectedRating,
    setSelectedRating,
    submitRating,
    isSubmittingRating: rateAppMutation.isPending,
  };
};
