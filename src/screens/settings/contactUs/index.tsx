import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useContactUsViewModel } from './ContactUsViewModel';
import { Images } from '../../../utils/images';
import Header from '../../../components/common/Header';
import { CommonInput } from '../../../components/common/CommonInput';
import CustomButton from '../../../components/common/CustomButton';
import { COLORS } from '../../../utils/colors';

const ContactUsScreen = () => {
  const { control, handleSubmit, handleSave, goBack } = useContactUsViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header type="step" title="Contact Us" onBack={goBack} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image
            source={Images.logoImage}
            style={styles.logo}
            resizeMode="contain"
            tintColor={COLORS.BUTTON_GRADIENT_PURPLE_START}
          />

          <View style={styles.inputsWrapper}>
            <CommonInput
              control={control}
              name="title"
              inputlabel="Title"
              isLeftImage={true}
              leftImage={Images.titleIcon}
            />

            <CommonInput
              control={control}
              name="subject"
              inputlabel="Subject"
              isLeftImage={true}
              leftImage={Images.subjectIcon}
            />

            <View style={styles.textAreaContainer}>
              <CommonInput
                control={control}
                name="descriptions"
                inputlabel="Descriptions"
                isLeftImage={true}
                leftImage={Images.descriptionIcon}
                multiline={true}
                customStyle={{
                  height: 120,
                  alignItems: 'flex-start',
                  paddingTop: 15,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.buttonContainer}>
        <CustomButton title="SUBMIT" onPress={handleSubmit(handleSave)} />
      </View>
    </SafeAreaView>
  );
};

export default ContactUsScreen;
