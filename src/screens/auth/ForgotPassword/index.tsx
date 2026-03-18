import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useForgotPasswordViewModel } from './ForgotPasswordViewModel';
import { Images } from '../../../utils/images';
import Container from '../../../components/common/Container';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';
import { CommonInput } from '../../../components/common/CommonInput';
import CustomButton from '../../../components/common/CustomButton';
import { useForm } from 'react-hook-form';
import Header from '../../../components/common/Header';
import { COLORS } from '../../../utils/colors';
import { dimensions } from '../../../utils/constant';

const ForgotPasswordScreen = () => {
  const { control } = useForm();
  const [isMobile, setIsMobile] = useState(false);
  const {
    handleSend,
  } = useForgotPasswordViewModel();

  return (
    <Container subContainer={{ marginTop: -(useSafeAreaInsets().top + 5) }}>
      <KeyboardContainer style={styles.keyboardContainer}>
        <ImageBackground
          source={Images.loginBG}
          style={styles.gradientHeader}
        >
          <Header type="auth" style={{ backgroundColor: COLORS.TRANSPARENT }} />
          <View style={styles.headerPadding}>
            <Text style={styles.gradientHeaderTitle}>Can't sign in?</Text>
            <Text style={styles.gradientHeaderSubTitle}>Enter the email address or phone number linked to your account, and we'll send you a recovery link.</Text>
          </View>
          <View style={{ height: dimensions.height * .05 }} />
        </ImageBackground>

        <View style={styles.contentWrapper}>
          <View style={styles.inputContainer}>
            {isMobile && (
              <Pressable onPress={() => setIsMobile(false)} style={styles.emailToggleContainer}>
                <ImageBackground source={Images.email} style={styles.emailIcon} resizeMode='center' />
              </Pressable>
            )}
            {isMobile ? (
              <CommonInput
                inputlabel="Phone Number"
                name="phone"
                control={control}
                containerStyle={styles.emailInputContainer}
                isLeftImage
                leftImage={Images.phone}
                keyboardType="phone-pad"
                isMobileNumber
              />
            ) : (
              <CommonInput
                inputlabel="Email Address"
                name="email"
                control={control}
                containerStyle={styles.emailInputContainer}
                isLeftImage
                leftImage={Images.email}
                keyboardType="email-address"
              />
            )}
            {!isMobile && (
              <Pressable onPress={() => setIsMobile(true)}>
                <ImageBackground source={Images.phone} style={styles.phoneToggleContainer} resizeMode='center' />
              </Pressable>
            )}
          </View>

          <CustomButton
            title="SEND"
            onPress={handleSend}
            style={styles.sendButton}
          />
        </View>
      </KeyboardContainer>
    </Container>
  );
};

export default ForgotPasswordScreen;
