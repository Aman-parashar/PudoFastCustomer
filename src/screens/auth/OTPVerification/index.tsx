import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useOTPViewModel } from './OTPViewModel';
import { Images } from '../../../utils/images';
import Container from '../../../components/common/Container';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';
import CustomButton from '../../../components/common/CustomButton';
import Header from '../../../components/common/Header';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

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
    formatTime,
    isPending,
  } = useOTPViewModel();

  return (
    <Container subContainer={{ marginTop: -(useSafeAreaInsets().top + 5) }}>
      <KeyboardContainer style={styles.keyboardContainer}>
        <ImageBackground
          source={Images.loginBG}
          style={styles.gradientHeader}
        >
          <Header type="auth" style={{ backgroundColor: COLORS.TRANSPARENT }} />
          <View style={styles.headerPadding}>
            <Text style={styles.gradientHeaderTitle}>Verification</Text>
            <Text style={styles.gradientHeaderSubTitle}>
              Enter the 4-digit code sent to your {type}: {'\n'}
              <Text style={{ color: COLORS.WHITE, fontFamily: FONTS.SANTRAL_BOLD }}>{value}</Text>
            </Text>
          </View>
          <View style={styles.headerSpacing} />
        </ImageBackground>

        <View style={styles.contentWrapper}>
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
                placeholder="-"
              />
            ))}
          </View>

          <View style={styles.timerContainer}>
            {timer > 0 ? (
              <Text style={styles.timerText}>Resend code in <Text style={{ color: COLORS.PRIMARY }}>{formatTime(timer)}</Text></Text>
            ) : (
              <Pressable onPress={handleResend}>
                <Text style={styles.resendText}>Resend code</Text>
              </Pressable>
            )}
          </View>

          <CustomButton
            title="VERIFY"
            onPress={handleVerify}
            style={styles.verifyButton}
            loading={isPending}
          />
        </View>
      </KeyboardContainer>
    </Container>
  );
};

export default OTPVerificationScreen;
