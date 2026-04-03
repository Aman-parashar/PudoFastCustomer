import React, { useState } from 'react';
import { View, Text, Image, Pressable, ImageBackground } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useLoginViewModel } from './LoginViewModel';
import Container from '../../../components/common/Container';
import { Images } from '../../../utils/images';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';
import CustomButton from '../../../components/common/CustomButton';
import { CommonInput } from '../../../components/common/CommonInput';

import Header from '../../../components/common/Header';

import CountryPicker from '../../../components/common/CountryPicker';
import { Rules } from '../../../utils/Rules';
import { Country } from '../../../types/api';

const LoginScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  const {
    control,
    handleSubmit,
    handleLogin,
    navigateToSignUp,
    navigateToForgotPassword,
    selectedCountry,
    setSelectedCountry,
    showPicker,
    setShowPicker,
    isPending,
  } = useLoginViewModel();

  return (
    <Container subContainer={{ marginTop: -(useSafeAreaInsets().top + 5) }}>
      <KeyboardContainer style={styles.keyboardContainer}>
        <ImageBackground source={Images.loginBG} style={styles.gradientHeader}>
          <Header type="auth" style={styles.transparentBackground} />
          <View style={styles.headerContent}>
            <Text style={styles.gradientHeaderTitle}>LOGIN</Text>
            <Text style={styles.gradientHeaderSubTitle}>
              Ready to deliver with confidence? Take the first step now.
            </Text>
          </View>
          <View style={styles.headerSpacer} />
        </ImageBackground>
        <View style={styles.mainContent}>
          <View style={styles.inputContainer}>
            {isMobile && (
              <Pressable
                onPress={() => setIsMobile(false)}
                style={styles.phoneContainer}
              >
                <Image
                  source={Images.email}
                  style={styles.emailIcon}
                  resizeMode="contain"
                />
              </Pressable>
            )}
            {isMobile ? (
              <CommonInput
                inputlabel="Phone"
                name="phone"
                control={control}
                containerStyle={styles.emailInputContainer}
                isLeftImage
                leftImage={Images.phone}
                isMobileNumber
                countryCode={selectedCountry?.country_code || '+61'}
                flag={selectedCountry?.flag}
                keyboardType="phone-pad"
                rules={Rules.Phone}
                errorStyle={{ position: 'absolute', bottom: -20 }}
                onPressCountryCode={() => {
                  setShowPicker(true);
                }}
              />
            ) : (
              <CommonInput
                inputlabel="Email"
                name="email"
                control={control}
                rules={Rules.Email}
                containerStyle={styles.emailInputContainer}
                isLeftImage
                leftImage={Images.email}
                errorStyle={{ position: 'absolute', bottom: -20 }}
              />
            )}
            {!isMobile && (
              <Pressable
                onPress={() => setIsMobile(true)}
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
          <CommonInput
            inputlabel="Password"
            name="password"
            control={control}
            isLeftImage
            leftImage={Images.password}
            secureTextEntry
            isRightImage
            customStyle={{ marginTop: 8 }}
          />

          <View style={styles.forgotPasswordContainer}>
            <Text
              style={styles.forgotPasswordText}
              onPress={navigateToForgotPassword}
            >
              Forgot Password ?
            </Text>
          </View>

          <CustomButton
            title="LOG IN"
            onPress={handleSubmit(handleLogin)}
            style={styles.loginButton}
            loading={isPending}
          />

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or login with </Text>
            <View style={styles.line} />
          </View>

          <View style={styles.footerContainer}>
            <View style={styles.socialButtonsContainer}>
              <Pressable>
                <Image
                  source={Images.facebookIcon}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable>
                <Image
                  source={Images.googleIcon}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </Pressable>
              <Pressable>
                <Image
                  source={Images.appleIcon}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
            <Text style={styles.signUpText}>
              Don't have an account?{' '}
              <Text style={styles.signUpLink} onPress={navigateToSignUp}>
                SIGN UP
              </Text>
            </Text>
          </View>
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

export default LoginScreen;
