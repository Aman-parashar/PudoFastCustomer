import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

type TransitAndReceiverDetailsRouteProp = RouteProp<RootStackParamList, 'TransitAndReceiverDetails'>;

export const useTransitAndReceiverDetailsViewModel = () => {
  const route = useRoute<TransitAndReceiverDetailsRouteProp>();
  const { orderData } = route.params || {};

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleNext = () => {
    const updatedOrderData = {
      ...orderData,
      receiver: {
        firstName,
        lastName,
        email,
        phone: `${countryCode}${phone}`,
      }
    };
    NavigationService.navigate(RouteConstant.ItemDetails, { orderData: updatedOrderData });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const toggleCountryCode = () => {
    // Logic for country code picker if needed
  };

  return {
    orderData,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    countryCode,
    setCountryCode,
    handleNext,
    goBack,
    toggleCountryCode,
  };
};
