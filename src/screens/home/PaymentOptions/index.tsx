import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
  usePaymentOptionsViewModel,
  PAYMENT_METHODS,
} from './PaymentOptionsViewModel';
import { Images } from '../../../utils/images';
import Stepper from '../../../components/common/Stepper';
import CustomButton from '../../../components/common/CustomButton';
import { deliverySteps } from '../../../utils/enum';

import Header from '../../../components/common/Header';
import CommonToggle from '../../../components/common/CommonToggle';
import { CardType } from '../../../utils/data';
import Container from '../../../components/common/Container';

const PaymentOptionsScreen = () => {
  const {
    paymentType,
    setPaymentType,
    selectedMethod,
    selectMethod,
    handleNext,
    goBack,
  } = usePaymentOptionsViewModel();

  return (
    <Container>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header type="step" title="Payment Options" onBack={goBack} />
      </View>

      <Stepper currentStep={deliverySteps.PaymentSection} />

      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Payment Type Selection */}
          <Text style={styles.sectionTitle}>Payment</Text>
          <CommonToggle
            options={CardType}
            activeValue={paymentType}
            onSelect={setPaymentType}
            containerStyle={{ marginBottom: 25 }}
          />

          {/* Saved Card Section */}
          <Text style={styles.sectionTitle}>Saved Card</Text>
          {PAYMENT_METHODS.map(method => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.savedCardCard,
                selectedMethod === method.id && styles.savedCardSelected,
              ]}
              onPress={() => selectMethod(method.id)}
            >
              <View style={styles.cardIconContainer}>
                <Image source={Images.wallet} style={styles.cardIcon} />
                <View style={styles.checkmarkBadge}>
                  <Image
                    source={Images.wayToPickUp}
                    style={styles.checkmarkIcon}
                  />
                </View>
              </View>
              <View style={styles.cardInfo}>
                <Text
                  style={[
                    styles.cardNumber,
                    selectedMethod === method.id && styles.cardNumberSelected,
                  ]}
                >
                  {method.title}
                </Text>
                <Text style={styles.cardExpiry}>{method.expiry}</Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.addCardContainer}>
            <Text style={styles.addCardText}>+ Add Card</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <CustomButton
          title="NEXT"
          onPress={handleNext}
          style={styles.nextButton}
        />
      </View>
    </Container>
  );
};

export default PaymentOptionsScreen;
