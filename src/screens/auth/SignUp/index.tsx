import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useSignUpViewModel } from './SignUpViewModel';
import { Images } from '../../../utils/images';
import Container from '../../../components/common/Container';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';
import { CommonInput } from '../../../components/common/CommonInput';
import CustomButton from '../../../components/common/CustomButton';
import { Rules } from '../../../utils/Rules';
import CountryPicker from '../../../components/common/CountryPicker';
import Header from '../../../components/common/Header';
import { COLORS } from '../../../utils/colors';

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    agreeTerms,
    selectedCountry,
    setSelectedCountry,
    showPicker,
    setShowPicker,
    handleSignUp,
    navigateToLogin,
    toggleAgreeTerms,
    isPending,
  } = useSignUpViewModel();

  return (
    <Container subContainer={{ marginTop: -(useSafeAreaInsets().top + 5) }}>
      <KeyboardContainer style={styles.keyboardContainer}>
        <ImageBackground
          source={Images.loginBG}
          style={styles.gradientHeader}
        >
          <Header type="auth" style={{ backgroundColor: COLORS.TRANSPARENT }} />
          <View style={styles.headerPadding}>
            <Text style={styles.gradientHeaderTitle}>No more stress!</Text>
            <Text style={styles.gradientHeaderSubTitle}>Create an account now and wave goodbye to your parcel pickup and delivery woes.</Text>
          </View>
          <View style={styles.headerSpacing} />
        </ImageBackground>

        <View style={styles.contentWrapper}>
          <View style={styles.inputContainer}>
            <CommonInput
              inputlabel="First Name"
              name="first_name"
              control={control}
              rules={{ required: 'First name is required' }}
              containerStyle={styles.emailInputContainer}
              isLeftImage
              leftImage={Images.user}
            />
          </View>

          <View style={styles.inputContainer}>
            <CommonInput
              inputlabel="Last Name"
              name="last_name"
              control={control}
              rules={{ required: 'Last name is required' }}
              containerStyle={styles.emailInputContainer}
              isLeftImage
              leftImage={Images.user}
            />
          </View>

          <View style={styles.inputContainer}>
            <CommonInput
              inputlabel="Email Address"
              name="email"
              control={control}
              rules={Rules.Email}
              containerStyle={styles.emailInputContainer}
              isLeftImage
              leftImage={Images.email}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <CommonInput
              inputlabel="Phone Number"
              name="phone"
              control={control}
              rules={Rules.Phone}
              containerStyle={styles.emailInputContainer}
              isLeftImage
              leftImage={Images.phone}
              keyboardType="phone-pad"
              isMobileNumber
              countryCode={selectedCountry?.country_code || "+1"}
              flag={selectedCountry?.flag}
              onPressCountryCode={() => {
                setShowPicker(true);
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <CommonInput
              inputlabel="Address"
              name="address"
              control={control}
              rules={Rules.Address}
              containerStyle={styles.emailInputContainer}
              isLeftImage
              leftImage={Images.addressIcon}
            />
          </View>

          <View style={styles.inputContainer}>
            <CommonInput
              inputlabel="Password"
              name="password"
              control={control}
              rules={Rules.Password}
              containerStyle={styles.emailInputContainer}
              isLeftImage
              leftImage={Images.password}
              secureTextEntry
              isRightImage
            />
          </View>

          <Pressable
            style={styles.termsContainer}
            onPress={toggleAgreeTerms}
          >
            <View
              style={[styles.checkbox, agreeTerms && styles.checkboxActive]}
            >
              {agreeTerms && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.termsText}>
              I agree with the{' '}
              <Text style={styles.termsLink}>Terms & Conditions</Text> &{' '}
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          </Pressable>

          <CustomButton
            title="SIGN UP"
            onPress={handleSubmit(handleSignUp)}
            style={styles.signUpButton}
            loading={isPending}
          />

          <Pressable onPress={navigateToLogin}>
            <Text style={styles.loginText}>
              Already have an account?{' '}
              <Text style={styles.loginLink}>LOGIN</Text>
            </Text>
          </Pressable>
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

export default SignUpScreen;
