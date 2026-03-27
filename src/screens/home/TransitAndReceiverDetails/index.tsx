import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useTransitAndReceiverDetailsViewModel } from './TransitAndReceiverDetailsViewModel';
import { Images } from '../../../utils/images';
import Stepper from '../../../components/common/Stepper';
import { CommonInput } from '../../../components/common/CommonInput';
import CustomButton from '../../../components/common/CustomButton';
import { deliverySteps } from '../../../utils/enum';
import Header from '../../../components/common/Header';
import Container from '../../../components/common/Container';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';

const TransitAndReceiverDetailsScreen = () => {
  const { orderData, control, handleSubmit, handleNext, goBack } =
    useTransitAndReceiverDetailsViewModel();

  return (
    <Container container={styles.container}>
      {/* <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header
          type="step"
          title="Transit and Receiver Details"
          onBack={goBack}
        />
      </View> */}
      <Header
        type="step"
        title="Transit and Receiver Details"
        onBack={goBack}
      />
      <Stepper currentStep={deliverySteps.ReceiversDetails} />

      <KeyboardContainer
        style={styles.scrollContent}
      >

        {/* Transit Details Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transit Details</Text>

          {/* Pickup Address Card */}
          <View style={[styles.addressCard, styles.pickupCard]}>
            <View style={styles.addressRow}>
              <View style={[styles.dot, styles.dotPickup]} />
              <View style={styles.addressInfo}>
                <Text style={styles.addressLabel}>Pickup Address</Text>
                <Text style={styles.addressText} numberOfLines={2}>
                  {orderData?.pickupAddress?.address ||
                    'B103/4, Abc com, AA Road, BB area, CA City, USA'}
                </Text>
              </View>
            </View>
          </View>

          {/* Drop off Address Card */}
          <View style={[styles.addressCard, styles.dropoffCard]}>
            <View style={styles.addressRow}>
              <View style={[styles.dot, styles.dotDropoff]} />
              <View style={styles.addressInfo}>
                <Text style={styles.addressLabel}>Drop off Address</Text>
                <Text style={styles.addressText} numberOfLines={2}>
                  {orderData?.dropAddress?.address ||
                    'A201,1, XYS Apartment.'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Receiver Details</Text>

          <CommonInput
            control={control}
            name="firstName"
            inputlabel="First Name"
            isLeftImage
            leftImage={Images.useIcon}
          />

          <CommonInput
            control={control}
            name="lastName"
            inputlabel="Last Name"
            isLeftImage
            leftImage={Images.useIcon}

          />

          <CommonInput
            control={control}
            name="email"
            inputlabel="Email Address"
            isLeftImage
            leftImage={Images.email}
            keyboardType="email-address"

          />

          <CommonInput
            control={control}
            name="phone"
            inputlabel="Phone Number"
            isLeftImage
            leftImage={Images.phone}
            keyboardType="phone-pad"
            isMobileNumber
            countryCode="+1"

          />
        </View>

        <CustomButton
          title="NEXT"
          onPress={handleSubmit(handleNext)}
          style={styles.confirmButton}
        />
      </KeyboardContainer>
    </Container>
  );
};

export default TransitAndReceiverDetailsScreen;
