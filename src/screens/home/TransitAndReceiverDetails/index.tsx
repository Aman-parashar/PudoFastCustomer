import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useTransitAndReceiverDetailsViewModel } from './TransitAndReceiverDetailsViewModel';
import { Images } from '../../../utils/images';

const TransitAndReceiverDetailsScreen = () => {
  const {
    orderData,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    countryCode,
    handleNext,
    goBack,
  } = useTransitAndReceiverDetailsViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.backButton}
        >
          <Image
            source={Images.arrowLeft}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transit & Receiver</Text>
        <View style={styles.headerSpacer} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Transit Details Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Transit Details</Text>
            <View style={styles.addressCard}>
              <View style={styles.addressRow}>
                <View style={[styles.dot, styles.dotPickup]} />
                <View style={styles.addressInfo}>
                  <Text style={styles.addressLabel}>PICKUP</Text>
                  <Text style={styles.addressText} numberOfLines={1}>
                    {orderData?.pickupAddress?.address || '123 Pickup St, Downtown'}
                  </Text>
                </View>
              </View>
              <View style={styles.verticalLine} />
              <View style={styles.addressRow}>
                <View style={[styles.dot, styles.dotDropoff]} />
                <View style={styles.addressInfo}>
                  <Text style={styles.addressLabel}>DROP OFF</Text>
                  <Text style={styles.addressText} numberOfLines={1}>
                    {orderData?.dropAddress?.address || '456 Delivery Ave, Uptown'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Receiver Details</Text>
            
            <View style={styles.row}>
              <View style={[styles.inputContainer, styles.halfWidth, styles.marginRight10]}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>
              <View style={[styles.inputContainer, styles.halfWidth]}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.phoneInputRow}>
                <TouchableOpacity style={styles.countryCodeSelector}>
                  <Text style={styles.countryCodeText}>{countryCode}</Text>
                  <Image source={Images.arrowLeft} style={styles.dropdownIcon} />
                </TouchableOpacity>
                <TextInput
                  style={[styles.input, styles.halfWidth]}
                  placeholder="Phone Number"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleNext}
          >
            <LinearGradient
              colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.confirmText}>NEXT</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TransitAndReceiverDetailsScreen;
