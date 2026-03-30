import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useForgotPasswordViewModel } from './ForgotPasswordViewModel';
import { Images } from '../../../utils/images';
import Container from '../../../components/common/Container';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';
import { CommonInput } from '../../../components/common/CommonInput';
import CustomButton from '../../../components/common/CustomButton';
import Header from '../../../components/common/Header';
import { COLORS } from '../../../utils/colors';
import { dimensions } from '../../../utils/constant';
import CountryPicker from '../../../components/common/CountryPicker';

const ForgotPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    loginType,
    setLoginType,
    selectedCountry,
    setSelectedCountry,
    showPicker,
    setShowPicker,
    handleSend,
    isPending,
  } = useForgotPasswordViewModel();

  return (
    <Container subContainer={{ marginTop: -(useSafeAreaInsets().top + 5) }}>
      <KeyboardContainer style={styles.keyboardContainer}>
        <ImageBackground source={Images.loginBG} style={styles.gradientHeader}>
          <Header type="auth" style={{ backgroundColor: COLORS.TRANSPARENT }} />
          <View style={styles.headerPadding}>
            <Text style={styles.gradientHeaderTitle}>Can't sign in?</Text>
            <Text style={styles.gradientHeaderSubTitle}>
              Enter the email address or phone number linked to your account,
              and we'll send you a recovery link.
            </Text>
          </View>
          <View style={{ height: dimensions.height * 0.05 }} />
        </ImageBackground>

        <View style={styles.contentWrapper}>
          <View style={styles.inputContainer}>
            {loginType === 'phone' && (
              <Pressable
                onPress={() => setLoginType('email')}
                style={styles.emailToggleContainer}
              >
                <Image
                  source={Images.email}
                  style={styles.emailIcon}
                  resizeMode="contain"
                />
              </Pressable>
            )}
            {loginType === 'phone' ? (
              <CommonInput
                inputlabel="Phone Number"
                name="phone"
                control={control}
                containerStyle={styles.emailInputContainer}
                isLeftImage
                leftImage={Images.phone}
                countryCode={selectedCountry?.country_code || '+1'}
                flag={selectedCountry?.flag}
                keyboardType="phone-pad"
                isMobileNumber
                onPressCountryCode={() => {
                  setShowPicker(true);
                }}
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
            {loginType === 'email' && (
              <Pressable
                onPress={() => setLoginType('phone')}
                style={styles.phoneContainer}
              >
                <Image
                  source={Images.phone}
                  style={styles.phoneIcon}
                  resizeMode="contain"
                />
              </Pressable>
            )}
          </View>

          <CustomButton
            title="SEND"
            onPress={handleSubmit(handleSend) as any}
            style={styles.sendButton}
            loading={isPending}
          />
        </View>
      </KeyboardContainer>
      <CountryPicker
        showPicker={showPicker}
        setShowPicker={setShowPicker}
        onSelectCountry={setSelectedCountry}
      />
    </Container>
  );
};

export default ForgotPasswordScreen;
