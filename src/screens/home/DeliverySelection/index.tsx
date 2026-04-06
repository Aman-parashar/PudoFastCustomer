import React, { useEffect } from 'react';
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
import DatePicker from 'react-native-date-picker';
import Container from '../../../components/common/Container';

const DeliverySelectionScreen = () => {
  const {
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
    // getDistanceinMeters,
  } = useDeliverySelectionViewModel();

  return (
    <Container>
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

        {scheduleType === 'scheduled' && (
          <>
            {/* Select date */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Select date</Text>
              <TouchableOpacity
                style={styles.dateBox}
                onPress={() => setDatePickerVisible(true)}
              >
                <Text style={styles.dateText}>{formatDate(date)}</Text>
                <Image
                  source={Images.greenCalendar}
                  style={styles.calendarIcon}
                />
              </TouchableOpacity>
            </View>

            {/* Select time */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Select time</Text>
              <View style={styles.timeSection}>
                <TouchableOpacity
                  style={styles.timeBox}
                  onPress={() => setTimePickerVisible(true)}
                >
                  <Text style={styles.timeText}>{formatTimeHours(date)}</Text>
                  <Text style={styles.timeUnit}>h</Text>
                </TouchableOpacity>

                <Text style={styles.colon}>:</Text>

                <TouchableOpacity
                  style={styles.timeBox}
                  onPress={() => setTimePickerVisible(true)}
                >
                  <Text style={styles.timeText}>{formatTimeMinutes(date)}</Text>
                  <Text style={styles.timeUnit}>m</Text>
                </TouchableOpacity>

                <View style={styles.ampmContainer}>
                  <Text
                    style={[
                      styles.ampmText,
                      formatTimeAMPM(date) === 'AM'
                        ? styles.ampmActive
                        : styles.ampmInactive,
                    ]}
                  >
                    AM
                  </Text>
                  <Text
                    style={[
                      styles.ampmText,
                      formatTimeAMPM(date) === 'PM'
                        ? styles.ampmActive
                        : styles.ampmInactive,
                    ]}
                  >
                    PM
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}

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

      <DatePicker
        modal
        open={isDatePickerVisible}
        date={date}
        mode="date"
        onConfirm={selectedDate => {
          setDatePickerVisible(false);
          setDate(selectedDate);
        }}
        onCancel={() => {
          setDatePickerVisible(false);
        }}
      />

      <DatePicker
        modal
        open={isTimePickerVisible}
        date={date}
        mode="time"
        onConfirm={selectedTime => {
          setTimePickerVisible(false);
          setDate(selectedTime);
        }}
        onCancel={() => {
          setTimePickerVisible(false);
        }}
      />
    </Container>
  );
};

export default DeliverySelectionScreen;
