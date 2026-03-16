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
import { usePaymentOptionsViewModel, PAYMENT_METHODS } from './PaymentOptionsViewModel';
import { Images } from '../../../utils/images';

const PaymentOptionsScreen = () => {
  const {
    orderData,
    selectedMethod,
    selectMethod,
    handlePlaceOrder,
    goBack,
  } = usePaymentOptionsViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image source={Images.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Options</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Miles</Text>
            <Text style={styles.summaryValue}>{orderData?.miles || '5'} miles</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Service Type</Text>
            <Text style={styles.summaryValue}>{orderData?.service}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Package Type</Text>
            <Text style={styles.summaryValue}>{orderData?.itemType}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>${orderData?.totalPrice?.toFixed(2)}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Select Payment Method</Text>
        {PAYMENT_METHODS.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[styles.methodCard, selectedMethod === method.id && styles.methodCardActive]}
            onPress={() => selectMethod(method.id)}
          >
            <View style={styles.radioButton}>
              <View style={[styles.radioInner, selectedMethod === method.id && styles.radioInnerActive]} />
            </View>
            <View style={styles.methodInfo}>
              <Text style={styles.methodTitle}>{method.title}</Text>
              <Text style={styles.methodExpiry}>{method.expiry}</Text>
            </View>
            <Text style={styles.cardType}>{method.type}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.addCardButton}>
          <Text style={styles.addCardText}>+ Add New Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton} onPress={handlePlaceOrder}>
          <LinearGradient
            colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.confirmText}>PLACE ORDER</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentOptionsScreen;
