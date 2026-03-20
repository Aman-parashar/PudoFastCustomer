import { useRoute, RouteProp } from '@react-navigation/native';
import { useForm, useFieldArray } from 'react-hook-form';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';

type ItemDetailsRouteProp = RouteProp<RootStackParamList, 'ItemDetails'>;

export const PICKUP_TYPES = ['General', 'Secured', 'Special'] as const;

export type PickupType = (typeof PICKUP_TYPES)[number];

export const ITEM_TYPES = [
  { id: '1', title: 'Document', img: Images.document, color: '#CB8803', bgColor: 'rgba(203, 136, 3, 0.1)' },
  { id: '2', title: 'Box', img: Images.box, color: '#5F9BE4', bgColor: 'rgba(95, 155, 228, 0.1)' },
  { id: '3', title: 'Notary', img: Images.wallet, color: '#CE43D7', bgColor: 'rgba(206, 67, 215, 0.1)' },
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const selectedPickupType = watch('pickupType');
  const selectedItemType = watch('itemType');

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
    }
  };

  const handleNext = (data: FormValues) => {
    const updatedOrderData = {
      ...orderData,
      pickupType: data.pickupType,
      itemType: data.itemType,
      items: data.items.map(item => item.name),
      description: data.description,
    };
    NavigationService.navigate(RouteConstant.DeliverySelection, { orderData: updatedOrderData });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

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
  };
};
