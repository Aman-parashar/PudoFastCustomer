import { useRoute, RouteProp } from '@react-navigation/native';
import { useForm, useFieldArray } from 'react-hook-form';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { ReactQuaryConst, RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';
import Toast from 'react-native-toast-message';
import { useQuery } from '@tanstack/react-query';
import { DeliveryService } from '../../../services/DeliveryService';

type ItemDetailsRouteProp = RouteProp<RootStackParamList, 'ItemDetails'>;

export const PICKUP_TYPES = ['General', 'Secured', 'Special'] as const;

export type PickupType = (typeof PICKUP_TYPES)[number];

export const ITEM_TYPES = [
  { id: '1', title: 'Document', img: Images.document, color: '#CB8803', bgColor: 'rgba(203, 136, 3, 0.1)' },
  { id: '2', title: 'Box', img: Images.box, color: '#5F9BE4', bgColor: 'rgba(95, 155, 228, 0.1)' },
  { id: '3', title: 'Services', img: Images.settingSelected, color: '#CE43D7', bgColor: 'rgba(206, 67, 215, 0.1)' },
];

interface FormValues {
  description: string;
  pickupType: PickupType;
  itemType: string;
  items: { name: string }[];
}

export const useItemDetailsViewModel = () => {
  const route = useRoute<ItemDetailsRouteProp>();

  const { orderData } = route.params || {};

  const { control, handleSubmit, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      description: '',
      pickupType: 'General',
      itemType: 'Document',
      items: [{ name: '' }],
    },
  });
  const selectedPickupType = watch('pickupType');
  const selectedItemType = watch('itemType');
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });



  const addItemField = () => {
    const items = watch('items');
    if (items[items.length - 1].name.trim() === '') {
      // For simplicity, we bisa menggunakan Alert.alert if needed, 
      // but let's just use form validation or simple check.
      return;
    }
    append({ name: '' });
  };

  const removeItemField = (index: number) => {
    if (fields.length > 1) {
      remove(index);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please add atleast one item',
      })
    }
  };

  const handleNext = (data: FormValues) => {
    const updatedOrderData = {
      ...orderData,
      pickup_type: data.pickupType,
      item_type: data.itemType,
      item: data.items.map(item => item.name),
      Description: data.description,
    };

    NavigationService.navigate(RouteConstant.DeliverySelection, { orderData: updatedOrderData });
  };

  const goBack = () => {
    NavigationService.goBack();
  };
  const { data: serviceData, isPending } = useQuery({
    queryKey: [ReactQuaryConst.GET_SERVICE],
    queryFn: () => DeliveryService.getService(),
  })


  return {
    control,
    handleSubmit,
    fields,
    addItemField,
    removeItemField,
    selectedPickupType,
    setSelectedPickupType: (type: PickupType) => setValue('pickupType', type),
    selectedItemType,
    setSelectedItemType: (type: string) => setValue('itemType', type),
    handleNext,
    goBack,
    serviceData,
    isPending
  };
};
