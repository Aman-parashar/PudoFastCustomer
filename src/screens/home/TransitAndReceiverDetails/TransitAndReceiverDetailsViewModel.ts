import { useRoute, RouteProp } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';

type TransitAndReceiverDetailsRouteProp = RouteProp<RootStackParamList, 'TransitAndReceiverDetails'>;

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}


export const useTransitAndReceiverDetailsViewModel = () => {
  const route = useRoute<TransitAndReceiverDetailsRouteProp>();
  const { orderData } = route.params || {};

  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  const handleNext = (data: FormValues) => {
    const updatedOrderData = {
      ...orderData,

      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,

    };
    NavigationService.navigate(RouteConstant.ItemDetails, { orderData: updatedOrderData });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    orderData,
    control,
    handleSubmit,
    handleNext,
    goBack,
    setValue,
  };
};
