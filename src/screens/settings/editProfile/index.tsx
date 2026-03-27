import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useEditProfileViewModel } from './EditProfileViewModel';
import { Images } from '../../../utils/images';
import Header from '../../../components/common/Header';
import CustomButton from '../../../components/common/CustomButton';
import { CommonInput } from '../../../components/common/CommonInput';
import { useForm } from 'react-hook-form';
import CountryPicker from '../../../components/common/CountryPicker';

const EditProfileScreen = () => {
  const { control, handleSave, handleSubmit, goBack } =
    useEditProfileViewModel();
  const [showPicker, setShowPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+61');
  return (
    <SafeAreaView style={styles.container}>
      <Header type="step" title="Edit Profile" onBack={goBack} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileImageContainer}>
            <Image
              source={Images.userPlaceholder}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editImageButton}>
              <Image source={Images.editIcon} style={styles.editImageIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputSection}>
            <CommonInput
              control={control}
              name="firstName"
              inputlabel="First Name"
              isLeftImage
              leftImage={Images.user}
            />

            <CommonInput
              control={control}
              name="lastName"
              inputlabel="Last Name"
              isLeftImage
              leftImage={Images.user}
            />

            <CommonInput
              control={control}
              name="email"
              inputlabel="Email"
              isLeftImage
              leftImage={Images.email}
              keyboardType="email-address"
            />

            <CommonInput
              control={control}
              name="phone"
              inputlabel="Phone Number"
              isLeftImage
              leftImage={Images.phone}
              keyboardType="phone-pad"
              countryCode={countryCode}
              isMobileNumber
              onPressCountryCode={() => {
                setShowPicker(true);
              }}
            />

            <CommonInput
              control={control}
              name="address"
              inputlabel="Address"
              isLeftImage
              leftImage={Images.addressIcon}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="SAVE"
          onPress={handleSubmit(handleSave)}
        />
      </View>
      <CountryPicker
        showPicker={showPicker}
        setShowPicker={setShowPicker}
        onSelectCountry={setCountryCode}
      />
    </SafeAreaView>
  );
};

export default EditProfileScreen;
