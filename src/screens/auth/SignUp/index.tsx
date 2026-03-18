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
import { useForm } from 'react-hook-form';
import Header from '../../../components/common/Header';
import { COLORS } from '../../../utils/colors';

const SignUpScreen = () => {
  const { control } = useForm();
  const {
    agreeTerms,
    handleSignUp,
    navigateToLogin,
    toggleAgreeTerms,
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
              name="firstName"
              control={control}
              containerStyle={styles.emailInputContainer}
              isLeftImage
              leftImage={Images.user}
            />
          </View>

          <View style={styles.inputContainer}>
            <CommonInput
              inputlabel="Last Name"
              name="lastName"
              control={control}
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
              containerStyle={styles.emailInputContainer}
              isLeftImage
              leftImage={Images.phone}
              keyboardType="phone-pad"
              isMobileNumber
            />
          </View>

          <View style={styles.inputContainer}>
            <CommonInput
              inputlabel="Address"
              name="address"
              control={control}
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
            onPress={handleSignUp}
            style={styles.signUpButton}
          />

          <Pressable onPress={navigateToLogin}>
            <Text style={styles.loginText}>
              Already have an account?{' '}
              <Text style={styles.loginLink}>LOGIN</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardContainer>
    </Container>
  );
};

export default SignUpScreen;
