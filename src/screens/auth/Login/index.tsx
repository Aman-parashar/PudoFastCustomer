import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useLoginViewModel } from './LoginViewModel';
import Container from '../../../components/common/Container';
import { Images } from '../../../utils/images';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';
import CustomButton from '../../../components/common/CustomButton';
import { COLORS } from '../../../utils/colors';
import { dimensions } from '../../../utils/constant';
import { CommonInput } from '../../../components/common/CommonInput';
import { useForm } from 'react-hook-form';

const LoginScreen = () => {
  const { control } = useForm();
  const {
    loginType,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    showPassword,
    handleLogin,
    navigateToSignUp,
    navigateToForgotPassword,
    skipToHome,
    toggleLoginType,
    toggleShowPassword,
  } = useLoginViewModel();

  return (
    <Container subContainer={{ marginTop: -(useSafeAreaInsets().top + 5) }}>
      <LinearGradient
        colors={
          [COLORS.BUTTON_GRADIENT_PURPLE_MID, COLORS.BUTTON_GRADIENT_PURPLE_START, COLORS.BUTTON_GRADIENT_PURPLE_END]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          width: '100%',
          height: dimensions.height * 0.4,

          overflow: 'hidden',
        }}
      />
      <KeyboardContainer style={{ width: '100%', paddingHorizontal: 16 }}>
        <View>
          <View style={{ flexDirection: 'row', backgroundColor: 'red' }}>
            <CommonInput inputlabel="Email" name="email" control={control} customStyle={{ width: '80%' }} />
            <View style={{ backgroundColor: 'blue', width: 50, height: 50 }}>
              <Image source={Images.email} style={{ width: 50, height: 50 }} />
            </View>
          </View>
          <CommonInput inputlabel="Password" name="password" control={control} />

        </View>
        <CustomButton
          title="LOG IN"
          onPress={handleLogin}
        />

      </KeyboardContainer>

    </Container>
  );
};

export default LoginScreen;
