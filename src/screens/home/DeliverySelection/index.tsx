import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useDeliverySelectionViewModel, SERVICES } from './DeliverySelectionViewModel';
import { Images } from '../../../utils/images';

const DeliverySelectionScreen = () => {
  const {
    orderData,
    serviceType,
    setServiceType,
    tripType,
    setTripType,
    scheduleType,
    setScheduleType,
    selectedDate,
    calculatePrice,
    handleNext,
    goBack,
  } = useDeliverySelectionViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image source={Images.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Selection</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Schedule Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, scheduleType === 'on_demand' && styles.toggleButtonActive]}
            onPress={() => setScheduleType('on_demand')}
          >
            <Text style={[styles.toggleText, scheduleType === 'on_demand' && styles.toggleTextActive]}>On Demand</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, scheduleType === 'scheduled' && styles.toggleButtonActive]}
            onPress={() => setScheduleType('scheduled')}
          >
            <Text style={[styles.toggleText, scheduleType === 'scheduled' && styles.toggleTextActive]}>Scheduled</Text>
          </TouchableOpacity>
        </View>

        {/* Date/Time Picker (Mock) */}
        {scheduleType === 'scheduled' && (
          <View style={styles.scheduleRow}>
            <TouchableOpacity style={styles.pickerField}>
              <Text style={styles.pickerText}>{selectedDate}</Text>
              <Image source={Images.greenCalendar} style={styles.pickerIcon} />
            </TouchableOpacity>
            <View style={styles.timePickerContainer}>
              <TouchableOpacity style={styles.timePickerField}><Text style={styles.pickerText}>09 h</Text></TouchableOpacity>
              <TouchableOpacity style={styles.timePickerField}><Text style={styles.pickerText}>00 m</Text></TouchableOpacity>
              <View style={styles.ampmContainer}>
                <TouchableOpacity style={[styles.ampmButton, styles.ampmActive]}><Text style={styles.ampmTextActive}>AM</Text></TouchableOpacity>
                <TouchableOpacity style={styles.ampmButton}><Text style={styles.ampmText}>PM</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {/* Trip Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trip Type</Text>
          <View style={styles.tripTypeRow}>
            <TouchableOpacity
              style={[styles.tripButton, tripType === 'one_way' && styles.tripButtonActive]}
              onPress={() => setTripType('one_way')}
            >
              <Text style={[styles.tripText, tripType === 'one_way' && styles.tripTextActive]}>One Way</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tripButton, tripType === 'two_way' && styles.tripButtonActive]}
              onPress={() => setTripType('two_way')}
            >
              <Text style={[styles.tripText, tripType === 'two_way' && styles.tripTextActive]}>Two Way</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Service Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Delivery Type</Text>
          {SERVICES.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceCard, serviceType === service.title && styles.serviceCardActive]}
              onPress={() => setServiceType(service.title)}
            >
              <View style={[
                styles.serviceIconContainer,
                serviceType === service.title ? styles.serviceIconActive : styles.serviceIconInactive
              ]}>
                <Image
                  source={service.icon}
                  style={[
                    styles.serviceIcon,
                    { tintColor: serviceType === service.title ? COLORS.WHITE : COLORS.GRAY_TEXT }
                  ]}
                />
              </View>
              <View style={styles.serviceInfo}>
                <Text style={[
                  styles.serviceTitle,
                  serviceType === service.title && styles.serviceTitleActive
                ]}>{service.title}</Text>
                {scheduleType === 'on_demand' && (
                  <Text style={styles.serviceTime}>Estimated pickup time - {service.estimatedTime}</Text>
                )}
                <Text style={styles.serviceMiles}>Total miles - {orderData?.miles || '5'}</Text>
              </View>
              <View style={[styles.priceContainer, serviceType === service.title && styles.priceContainerActive]}>
                <Text style={[styles.priceText, serviceType === service.title && styles.priceTextActive]}>
                  ${calculatePrice(service).toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <LinearGradient
            colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.nextText}>NEXT</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliverySelectionScreen;
