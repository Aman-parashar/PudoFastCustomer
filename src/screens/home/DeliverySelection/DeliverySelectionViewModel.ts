import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';

type DeliverySelectionRouteProp = RouteProp<RootStackParamList, 'DeliverySelection'>;

export const SERVICES = [
  { id: '1', title: 'Walker', icon: Images.walkerWhite, basePrice: 14, estimatedTime: '35 Mins' },
  { id: '2', title: 'Cyclist', icon: Images.cyclistWhite, basePrice: 20, estimatedTime: '20 Mins' },
  { id: '3', title: 'Driver', icon: Images.driver_Type_Selected, basePrice: 25, estimatedTime: '12 Mins' },
];

export const useDeliverySelectionViewModel = () => {
  const route = useRoute<DeliverySelectionRouteProp>();
  const { orderData } = route.params || {};

  const [serviceType, setServiceType] = useState('Walker');
  const [tripType, setTripType] = useState('one_way'); // one_way, two_way
  const [scheduleType, setScheduleType] = useState('on_demand'); // on_demand, scheduled
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const formatDate = (d: Date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTimeHours = (d: Date) => {
    let hours = d.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return hours < 10 ? '0' + hours : hours.toString();
  };

  const formatTimeMinutes = (d: Date) => {
    const minutes = d.getMinutes();
    return minutes < 10 ? '0' + minutes : minutes.toString();
  };

  const formatTimeAMPM = (d: Date) => {
    const hours = d.getHours();
    return hours >= 12 ? 'PM' : 'AM';
  };

  const calculatePrice = (service: typeof SERVICES[0]) => {
    // Basic calculation for demo purposes. In a real app, from backend.
    return service.basePrice;
  };

  const handleNext = () => {
    const selectedService = SERVICES.find(s => s.title === serviceType);
    const updatedOrderData = {
      ...orderData,
      service: serviceType,
      tripType: tripType,
      scheduleType: scheduleType,
      scheduleDetails: scheduleType === 'scheduled' ? {
        date: formatDate(date),
        time: `${formatTimeHours(date)}:${formatTimeMinutes(date)} ${formatTimeAMPM(date)}`
      } : null,
      totalPrice: calculatePrice(selectedService!),
    };
    NavigationService.navigate(RouteConstant.PaymentOptions, { orderData: updatedOrderData });
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  return {
    orderData,
    serviceType,
    setServiceType,
    tripType,
    setTripType,
    scheduleType,
    setScheduleType,
    date,
    setDate,
    isDatePickerVisible,
    setDatePickerVisible,
    isTimePickerVisible,
    setTimePickerVisible,
    formatDate,
    formatTimeHours,
    formatTimeMinutes,
    formatTimeAMPM,
    calculatePrice,
    handleNext,
    goBack,
  };
};
