import React from 'react';
import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { useNewPasswordViewModel } from './NewPasswordViewModel';
import { Images } from '../../../utils/images';
import Container from '../../../components/common/Container';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';
import { CommonInput } from '../../../components/common/CommonInput';
import CustomButton from '../../../components/common/CustomButton';
import { useForm } from 'react-hook-form';
import Header from '../../../components/common/Header';
import { COLORS } from '../../../utils/colors';

const NewPasswordScreen = () => {
  const { control } = useForm();
  const {
    handleSetPassword,
  } = useNewPasswordViewModel();

  return (
    <Container subContainer={{ marginTop: -(useSafeAreaInsets().top + 5) }}>
      <KeyboardContainer style={styles.keyboardContainer}>
        <ImageBackground
          source={Images.loginBG}
          style={styles.gradientHeader}
        >
          <Header type="auth" style={{ backgroundColor: COLORS.TRANSPARENT }} />
          <View style={styles.headerPadding}>
            <Text style={styles.gradientHeaderTitle}>New Password</Text>
            <Text style={styles.gradientHeaderSubTitle}>Please set a new password that is easy to remember.</Text>
          </View>
          <View style={styles.headerSpacing} />
        </ImageBackground>

        <View style={styles.contentWrapper}>
          <View style={styles.inputContainer}>
            <CommonInput 
              inputlabel="New Password" 
              name="password" 
              control={control} 
              containerStyle={styles.emailInputContainer} 
              isLeftImage 
              leftImage={Images.password} 
              secureTextEntry 
              isRightImage 
            />
          </View>

          <View style={styles.inputContainer}>
            <CommonInput 
              inputlabel="Confirm New Password" 
              name="confirmPassword" 
              control={control} 
              containerStyle={styles.emailInputContainer} 
              isLeftImage 
              leftImage={Images.password} 
              secureTextEntry 
              isRightImage 
            />
          </View>

          <CustomButton
            title="SET PASSWORD"
            onPress={handleSetPassword}
            style={styles.submitButton}
          />
        </View>
      </KeyboardContainer>
    </Container>
  );
};

export default NewPasswordScreen;
