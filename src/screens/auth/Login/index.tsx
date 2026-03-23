import React, { useRef, useState } from 'react';
import {
  View,
  Text,

  Image,

  Pressable,
  FlatList,
  ImageBackground,
  TextInput,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useLoginViewModel } from './LoginViewModel';
import Container from '../../../components/common/Container';
import { Images } from '../../../utils/images';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';
import CustomButton from '../../../components/common/CustomButton';
import { CommonInput } from '../../../components/common/CommonInput';
import { useForm } from 'react-hook-form';
import Header from '../../../components/common/Header';
import { countryData } from '../../../utils/Country';
import BottomSheetModalComponent from '../../../components/common/BottomSheetModal';
import BottomSheet from '@gorhom/bottom-sheet';
import { getCountryByCode } from '../../../hooks/useCountry';
import CountryPicker from '../../../components/common/CountryPicker';
import { Rules } from '../../../utils/Rules';


const LoginScreen = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [countryCode, setCountryCode] = useState('+61')
  const [searchCountry, setSearchCountry] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const {
    loginType,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    showPassword,
    control,
    handleSubmit,
    handleLogin,
    navigateToSignUp,
    navigateToForgotPassword,
    skipToHome,
    toggleLoginType,
    toggleShowPassword,
  } = useLoginViewModel();


  return (
    <Container subContainer={{ marginTop: -(useSafeAreaInsets().top + 5) }}>



      <KeyboardContainer style={styles.keyboardContainer}>
        <ImageBackground
          source={Images.loginBG}
          style={styles.gradientHeader}
        >
          <Header type="auth" style={styles.transparentBackground} />
          <View style={styles.headerContent}>
            <Text style={styles.gradientHeaderTitle}>LOGIN</Text>
            <Text style={styles.gradientHeaderSubTitle}>Ready to deliver with confidence? Take the first step now.</Text>
          </View>
          <View style={styles.headerSpacer} />
        </ImageBackground>
        <View style={styles.mainContent}>

          <View style={styles.inputContainer}>
            {isMobile && <Pressable onPress={() => setIsMobile(false)} style={styles.emailContainer}>
              <Image source={Images.email} style={styles.emailIcon} resizeMode='center' />
            </Pressable>}
            {isMobile ? (
              <CommonInput inputlabel="Phone" name="phone" control={control} customStyle={{ height: 60 }} containerStyle={styles.emailInputContainer} isLeftImage leftImage={Images.phone} isMobileNumber
                countryCode={countryCode}
                keyboardType='phone-pad'
                rules={Rules.Phone}
                onPressCountryCode={() => {
                  setShowPicker(true)

                }} />
            ) : (
              <CommonInput inputlabel="Email" name="email" control={control} customStyle={{ height: 60 }} rules={Rules.Email} containerStyle={styles.emailInputContainer} isLeftImage leftImage={Images.email} />
            )}
            {!isMobile && <Pressable onPress={() => setIsMobile(true)}>
              <Image source={Images.phone} style={styles.phoneIcon} resizeMode='center' />
            </Pressable>}
          </View>
          <CommonInput inputlabel="Password" name="password" control={control} isLeftImage leftImage={Images.password} secureTextEntry isRightImage />

          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText} onPress={navigateToForgotPassword}>Forgot Password ?</Text>
          </View>

          <CustomButton
            title="LOG IN"
            onPress={handleSubmit(handleLogin)}
            style={styles.loginButton}
          />

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or login with </Text>
            <View style={styles.line} />
          </View>

          <View style={styles.footerContainer}>
            <View style={styles.socialButtonsContainer}>
              <Pressable>
                <Image source={Images.facebookIcon} style={styles.socialIcon} resizeMode='contain' />
              </Pressable>
              <Pressable>
                <Image source={Images.googleIcon} style={styles.socialIcon} resizeMode='contain' />
              </Pressable>
              <Pressable>
                <Image source={Images.appleIcon} style={styles.socialIcon} resizeMode='contain' />
              </Pressable>
            </View>
            <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink} onPress={navigateToSignUp}>SIGN UP</Text></Text>
          </View>
        </View>
      </KeyboardContainer>
      <CountryPicker showPicker={showPicker} setShowPicker={setShowPicker} onSelectCountry={setCountryCode} />

    </Container>
  );
};

export default LoginScreen;
