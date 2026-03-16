import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';

export const useWebViewModel = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'WebViewScreen'>>();

  const { title, url } = route.params;
  const [loading, setLoading] = useState(true);

  const goBack = () => {
    NavigationService.goBack();
  };

  const onLoadStart = () => setLoading(true);
  const onLoadEnd = () => setLoading(false);

  return {
    title,
    url,
    loading,
    goBack,
    onLoadStart,
    onLoadEnd,
  };
};
