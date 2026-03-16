import React from 'react';
import {
  View,
  Text,
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
import { useForgotPasswordViewModel } from './ForgotPasswordViewModel';
import { Images } from '../../../utils/images';

const ForgotPasswordScreen = () => {
  const {
    loginType,
    email,
    setEmail,
    phone,
    setPhone,
    countryCode,
    handleSend,
    goBack,
    toggleLoginType,
  } = useForgotPasswordViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
        style={styles.gradientHeader}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          onPress={goBack}
          style={styles.backButton}
        >
          <Image
            source={Images.arrowLeft}
            style={[styles.backIcon, { tintColor: COLORS.WHITE }]}
          />
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
            Please enter your registered email or phone number to reset your password.
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, loginType === 'email' && styles.toggleButtonActive]}
            onPress={() => toggleLoginType('email')}
          >
            <View style={styles.radioRow}>
                <View style={[styles.radio, loginType === 'email' && styles.radioActive]} />
                <Text style={[styles.toggleText, loginType === 'email' && styles.toggleTextActive]}>Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, loginType === 'phone' && styles.toggleButtonActive]}
            onPress={() => toggleLoginType('phone')}
          >
            <View style={styles.radioRow}>
                <View style={[styles.radio, loginType === 'phone' && styles.radioActive]} />
                <Text style={[styles.toggleText, loginType === 'phone' && styles.toggleTextActive]}>Phone</Text>
            </View>
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.form}
        >
          {loginType === 'email' ? (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          ) : (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <View style={styles.phoneInputRow}>
                <TouchableOpacity style={styles.countryCodeSelector}>
                  <Text style={styles.countryCodeText}>{countryCode}</Text>
                </TouchableOpacity>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  placeholder="Phone number"
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          )}

          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSend}
          >
            <LinearGradient
              colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.sendText}>SEND</Text>
            </LinearGradient>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
