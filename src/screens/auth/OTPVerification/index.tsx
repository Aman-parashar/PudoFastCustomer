import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useOTPViewModel } from './OTPViewModel';
import { Images } from '../../../utils/images';

const OTPVerificationScreen = () => {
  const {
    otp,
    timer,
    inputs,
    type,
    value,
    handleOtpChange,
    handleKeyPress,
    handleResend,
    handleVerify,
    goBack,
    formatTime,
  } = useOTPViewModel();

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
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.subtitle}>
            Enter the 4-digit code sent to your {type}: {'\n'}
            <Text style={{ color: COLORS.WHITE, fontFamily: FONTS.SANTRAL_BOLD }}>{value}</Text>
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputs.current[index] = ref as TextInput;
              }}
              style={styles.otpInput}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        <View style={styles.timerContainer}>
          <View>
            {timer > 0 ? (
              <Text style={styles.timerText}>Resend code in <Text style={{ color: COLORS.PRIMARY }}>{formatTime(timer)}</Text></Text>
            ) : (
              <TouchableOpacity onPress={handleResend}>
                <Text style={styles.resendText}>Resend code</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <TouchableOpacity
          style={styles.verifyButton}
          onPress={handleVerify}
        >
          <LinearGradient
            colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
            style={styles.buttonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.verifyText}>VERIFY</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerificationScreen;
