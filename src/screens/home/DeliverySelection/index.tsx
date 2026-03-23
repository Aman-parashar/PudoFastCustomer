import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  useDeliverySelectionViewModel,
  SERVICES,
} from './DeliverySelectionViewModel';
import { Images } from '../../../utils/images';
import Stepper from '../../../components/common/Stepper';
import CustomButton from '../../../components/common/CustomButton';
import { deliverySteps } from '../../../utils/enum';
import Header from '../../../components/common/Header';
import CommonToggle from '../../../components/common/CommonToggle';
import { ScheduleType } from '../../../utils/data';

const DeliverySelectionScreen = () => {
  const {
    orderData,
    serviceType,
    setServiceType,
    tripType,
    setTripType,
    scheduleType,
    setScheduleType,
    calculatePrice,
    handleNext,
    goBack,
  } = useDeliverySelectionViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header type="step" title="Delivery Details" onBack={goBack} />
      </View>

      <Stepper currentStep={deliverySteps.DeliveryDetails} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Schedule Toggle */}
        <CommonToggle
          options={ScheduleType}
          activeValue={scheduleType}
          onSelect={setScheduleType}
          containerStyle={styles.toggleContainer}
        />

        {/* Select Delivery Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Delivery Type</Text>
          {SERVICES.map(service => (
            <TouchableOpacity
              key={service.id}
              style={[
                styles.serviceCard,
                serviceType === service.title && styles.serviceCardActive,
              ]}
              onPress={() => setServiceType(service.title)}
            >
              <View
                style={[
                  styles.serviceIconContainer,
                  serviceType === service.title
                    ? styles.serviceIconActive
                    : styles.serviceIconInactive,
                ]}
              >
                <Image
                  source={service.icon}
                  style={[
                    styles.serviceIcon,
                    {
                      tintColor:
                        serviceType === service.title
                          ? COLORS.WHITE
                          : '#999999',
                    },
                  ]}
                />
              </View>
              <View style={styles.serviceInfo}>
                <Text
                  style={[
                    styles.serviceTitle,
                    serviceType === service.title && styles.serviceTitleActive,
                  ]}
                >
                  {service.title}
                </Text>
                {scheduleType === 'on_demand' && (
                  <Text style={styles.serviceTime}>
                    Estimated pickup time - {service.estimatedTime}
                  </Text>
                )}
              </View>
              <View style={styles.priceContainer}>
                <Text
                  style={[
                    styles.priceText,
                    serviceType === service.title && styles.priceTextActive,
                  ]}
                >
                  ${calculatePrice(service)}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Trip Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trip type</Text>
          <CommonToggle
            options={[
              { label: 'One Way', value: 'one_way' },
              { label: 'Two Way', value: 'two_way' },
            ]}
            activeValue={tripType}
            onSelect={setTripType}
            activeColor="#4CAF50"
          />
        </View>

        <CustomButton
          title="NEXT"
          onPress={handleNext}
          style={styles.nextButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliverySelectionScreen;
