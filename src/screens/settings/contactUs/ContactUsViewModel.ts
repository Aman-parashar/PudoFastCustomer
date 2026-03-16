import { useState } from 'react';
import { Alert } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';

export const useContactUsViewModel = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title || !subject || !description) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // Handle Contact Us API integration here
    Alert.alert('Success', 'Contact Us submiited successfully');
    NavigationService.goBack();
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    title,
    setTitle,
    subject,
    setSubject,
    description,
    setDescription,
    handleSubmit,
    goBack,
  };
};
