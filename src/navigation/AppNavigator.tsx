import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalkthroughScreen from '../screens/auth/Walkthrough';
import StartScreen from '../screens/auth/Start';
import LoginScreen from '../screens/auth/Login';
import SignUpScreen from '../screens/auth/SignUp';
import ForgotPasswordScreen from '../screens/auth/ForgotPassword';
import OTPVerificationScreen from '../screens/auth/OTPVerification';
import NewPasswordScreen from '../screens/auth/NewPassword';
import TabNavigator from './TabNavigator';
import ChooseAddressScreen from '../screens/home/ChooseAddress';
import DeliveryMilesScreen from '../screens/home/DeliveryMiles';
import TransitAndReceiverDetailsScreen from '../screens/home/TransitAndReceiverDetails';
import MyReviewsScreen from '../screens/settings/myReviews';
import ChangePasswordScreen from '../screens/settings/changePassword';
import ProfileScreen from '../screens/settings/profile';
import EditProfileScreen from '../screens/settings/editProfile';
import WebViewScreen from '../screens/settings/webView';
import ContactUsScreen from '../screens/settings/contactUs';
import DeliveryDetailsScreen from '../screens/history/deliveryDetails';
import ItemDetailsScreen from '../screens/home/ItemDetails';
import DeliverySelectionScreen from '../screens/home/DeliverySelection';
import PaymentOptionsScreen from '../screens/home/PaymentOptions';
import HistoryScreen from '../screens/history/history';
import { RootStackParamList } from '../types/avigation';
import { RouteConstant } from './Constant';

import NavigationService from './NavigationService';
import NotificationScreen from '../screens/notification';
import DeliveryConfirmationScreen from '../screens/home/DeliveryConfirmation';
import { storage } from '../helper/MMKVStorage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const token = storage.getString('token');
  const initialRoute = token ? RouteConstant.Main : RouteConstant.Walkthrough;

  return (
    <NavigationContainer ref={ref => NavigationService.setTopLevelNavigator(ref)}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name={RouteConstant.Walkthrough} component={WalkthroughScreen} />
        <Stack.Screen name={RouteConstant.Start} component={StartScreen} />
        <Stack.Screen name={RouteConstant.Login} component={LoginScreen} />
        <Stack.Screen name={RouteConstant.SignUp} component={SignUpScreen} />
        <Stack.Screen name={RouteConstant.ForgotPassword} component={ForgotPasswordScreen} />
        <Stack.Screen name={RouteConstant.OTPVerification} component={OTPVerificationScreen} />
        <Stack.Screen name={RouteConstant.NewPassword} component={NewPasswordScreen} />
        <Stack.Screen name={RouteConstant.Main} component={TabNavigator} />
        <Stack.Screen name={RouteConstant.Notification} component={NotificationScreen} />
        <Stack.Screen name={RouteConstant.ChooseAddress} component={ChooseAddressScreen} />
        <Stack.Screen name={RouteConstant.DeliveryMiles} component={DeliveryMilesScreen} />
        <Stack.Screen
          name={RouteConstant.TransitAndReceiverDetails}
          component={TransitAndReceiverDetailsScreen}
        />
        <Stack.Screen name={RouteConstant.MyReviews} component={MyReviewsScreen} />
        <Stack.Screen name={RouteConstant.ChangePassword} component={ChangePasswordScreen} />
        <Stack.Screen name={RouteConstant.Profile} component={ProfileScreen} />
        <Stack.Screen name={RouteConstant.EditProfile} component={EditProfileScreen} />
        <Stack.Screen name={RouteConstant.WebViewScreen} component={WebViewScreen} />
        <Stack.Screen name={RouteConstant.ContactUs} component={ContactUsScreen} />
        <Stack.Screen name={RouteConstant.DeliveryDetails} component={DeliveryDetailsScreen} />
        <Stack.Screen name={RouteConstant.ItemDetails} component={ItemDetailsScreen} />
        <Stack.Screen name={RouteConstant.DeliverySelection} component={DeliverySelectionScreen} />
        <Stack.Screen name={RouteConstant.PaymentOptions} component={PaymentOptionsScreen} />
        <Stack.Screen name={RouteConstant.DeliveryConfirmation} component={DeliveryConfirmationScreen} />
        <Stack.Screen name={RouteConstant.ReceivingOrderHistory} component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
