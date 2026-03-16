import { useState } from 'react';
import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';

export const useEditProfileViewModel = () => {
  // Initializing state with dummy data
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [countryCode, _setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('2345678900');
  const [address, setAddress] = useState('123 Delivery St, Mytown, USA');

  const handleSave = () => {
    // Basic validation
    if (!firstName || !lastName || !email || !phone || !address) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Handle update profile api
    Alert.alert('Success', 'Profile updated successfully');
    NavigationService.goBack();
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    countryCode,
    phone,
    setPhone,
    address,
    setAddress,
    handleSave,
    goBack,
  };
};
