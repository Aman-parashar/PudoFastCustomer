import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';

type ItemDetailsRouteProp = RouteProp<RootStackParamList, 'ItemDetails'>;

export const PICKUP_TYPES = ['General', 'Secured', 'Special'];

export const ITEM_TYPES = [
  { id: '1', title: 'Document', img: Images.document, color: '#CB8803', bgColor: 'rgba(203, 136, 3, 0.1)' },
  { id: '2', title: 'Box', img: Images.box, color: '#5F9BE4', bgColor: 'rgba(95, 155, 228, 0.1)' },
  { id: '3', title: 'Services', img: Images.serviceTypeSelected, color: '#CE43D7', bgColor: 'rgba(206, 67, 215, 0.1)' },
];

export const useItemDetailsViewModel = () => {
  const route = useRoute<ItemDetailsRouteProp>();
  const { orderData } = route.params;

  const [selectedPickupType, setSelectedPickupType] = useState('General');
  const [selectedItemType, setSelectedItemType] = useState('Document');
  const [itemsList, setItemsList] = useState(['']);
  const [description, setDescription] = useState('');

  const addItemField = () => {
    if (itemsList[itemsList.length - 1].trim() === '') {
      alert('Please enter item name');
      return;
    }
    setItemsList([...itemsList, '']);
  };

  const removeItemField = (index: number) => {
    if (itemsList.length === 1) {
      alert('Please add at least one item');
      return;
    }
    const newList = [...itemsList];
    newList.splice(index, 1);
    setItemsList(newList);
  };

  const updateItemName = (text: string, index: number) => {
    const newList = [...itemsList];
    newList[index] = text;
    setItemsList(newList);
  };

  const handleNext = () => {
    if (itemsList.some(item => item.trim() === '')) {
      alert('Please enter at least one item name');
      return;
    }

    const updatedOrderData = {
      ...orderData,
      pickupType: selectedPickupType,
      itemType: selectedItemType,
      items: itemsList,
      description: description,
    };
    NavigationService.navigate(RouteConstant.DeliverySelection, { orderData: updatedOrderData });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    selectedPickupType,
    setSelectedPickupType,
    selectedItemType,
    setSelectedItemType,
    itemsList,
    addItemField,
    removeItemField,
    updateItemName,
    description,
    setDescription,
    handleNext,
    goBack,
  };
};
