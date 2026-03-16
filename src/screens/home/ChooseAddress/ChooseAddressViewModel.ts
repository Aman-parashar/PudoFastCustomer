import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';

export const useChooseAddressViewModel = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ChooseAddress'>>();
  const { type } = route.params;
  const [search, setSearch] = useState('');

  const goBack = () => {
    NavigationService.goBack();
  };

  const confirmAddress = () => {
    // Handle persistent storage or state update here
    NavigationService.goBack();
  };

  return {
    type,
    search,
    setSearch,
    goBack,
    confirmAddress,
  };
};
