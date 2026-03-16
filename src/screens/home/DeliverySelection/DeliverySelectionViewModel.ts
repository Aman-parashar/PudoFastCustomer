import { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/avigation';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';

type DeliverySelectionRouteProp = RouteProp<RootStackParamList, 'DeliverySelection'>;

export const SERVICES = [
  { id: '1', title: 'Services', icon: Images.servicesWhite, basePrice: 15, estimatedTime: '35 Mins' },
  { id: '2', title: 'Cyclist', icon: Images.cyclistWhite, basePrice: 10, estimatedTime: '20 Mins' },
  { id: '3', title: 'Driver', icon: Images.driverWhiteTwo, basePrice: 25, estimatedTime: '12 Mins' },
];

export const useDeliverySelectionViewModel = () => {
  const route = useRoute<DeliverySelectionRouteProp>();
  const { orderData } = route.params;

  const [serviceType, setServiceType] = useState('Services');
  const [tripType, setTripType] = useState('one_way'); // one_way, two_way
  const [scheduleType, setScheduleType] = useState('on_demand'); // on_demand, scheduled
  const [selectedDate, setSelectedDate] = useState('Select Date');
  const [selectedTime, setSelectedTime] = useState('Select Time');

  const calculatePrice = (service: typeof SERVICES[0]) => {
    const miles = parseFloat(orderData?.miles || '5');
    const distanceCharge = miles * 1.5;
    const total = service.basePrice + distanceCharge;
    return tripType === 'two_way' ? total * 2 : total;
  };

  const handleNext = () => {
    const selectedService = SERVICES.find(s => s.title === serviceType);
    const updatedOrderData = {
      ...orderData,
      service: serviceType,
      tripType: tripType,
      scheduleType: scheduleType,
      scheduleDetails: scheduleType === 'scheduled' ? { date: selectedDate, time: selectedTime } : null,
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
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    calculatePrice,
    handleNext,
    goBack,
  };
};
