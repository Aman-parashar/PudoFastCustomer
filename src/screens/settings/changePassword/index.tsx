import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { useChangePasswordViewModel } from './ChangePasswordViewModel';
import { Images } from '../../../utils/images';

import Header from '../../../components/common/Header';
import CustomButton from '../../../components/common/CustomButton';
import { CommonInput } from '../../../components/common/CommonInput';
import Container from '../../../components/common/Container';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';

const ChangePasswordScreen = () => {
  const { control, handleSave, handleSubmit, goBack, isLoading } =
    useChangePasswordViewModel();

  return (
    <Container container={{ marginTop: -10 }}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header type="step" title="Change Password" onBack={goBack} />
      </View>
      <KeyboardContainer
        style={styles.keyboardView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.imageContainer}>
          <Image
            source={Images.changePassword}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        <View style={styles.inputSection}>
          <CommonInput
            control={control}
            name="oldPassword"
            inputlabel="Old Password"
            isLeftImage
            leftImage={Images.password}
            secureTextEntry
            isRightImage
          />

          <CommonInput
            control={control}
            name="newPassword"
            inputlabel="New Password"
            isLeftImage
            leftImage={Images.password}
            secureTextEntry
            isRightImage
          />

          <CommonInput
            control={control}
            name="confirmPassword"
            inputlabel="Confirm New Password"
            isLeftImage
            leftImage={Images.password}
            secureTextEntry
            isRightImage
          />
        </View>
      </KeyboardContainer>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="SAVE"
          onPress={handleSubmit(handleSave)}
          loading={isLoading}
        />
      </View>
    </Container>
  );
};

export default ChangePasswordScreen;
