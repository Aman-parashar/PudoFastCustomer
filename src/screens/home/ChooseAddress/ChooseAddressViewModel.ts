import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';

export const useChooseAddressViewModel = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ChooseAddress'>>();
  const { type, onSelect } = route.params;
  const [search, setSearch] = useState('');

  const goBack = () => {
    NavigationService.goBack();
  };

  const confirmAddress = (address: { address: string, latitude: number, longitude: number }) => {
    if (onSelect) {
      onSelect(address);
    }
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
