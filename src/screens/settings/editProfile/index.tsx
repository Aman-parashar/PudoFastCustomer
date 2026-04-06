import React, { useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Pressable,
} from 'react-native';

import styles from './styles';
import { useEditProfileViewModel } from './EditProfileViewModel';
import { Images } from '../../../utils/images';
import Header from '../../../components/common/Header';
import CustomButton from '../../../components/common/CustomButton';
import { CommonInput } from '../../../components/common/CommonInput';
import CountryPicker from '../../../components/common/CountryPicker';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/Constant';
import BottomSheetModalComponent from '../../../components/common/BottomSheetModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { COLORS } from '../../../utils/colors';
import Container from '../../../components/common/Container';
import KeyboardContainer from '../../../components/layout/KeyboardContainer';

const EditProfileScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'EditProfile'>>();
  const user = route.params?.user;
  const {
    control,
    handleSave,
    handleSubmit,
    goBack,
    handleCamera,
    handleGallery,
    selectedImage,
    isLoading,
  } = useEditProfileViewModel(user);

  const [showPicker, setShowPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <Container container={{ marginTop: -10 }}>
      <Header type="step" title="Edit Profile" onBack={goBack} />

      <KeyboardContainer
        style={styles.keyboardView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.profileImageContainer}>
          <Image
            source={
              selectedImage ? { uri: selectedImage } : Images.userPlaceholder
            }
            style={styles.profileImage}
          />
          <TouchableOpacity
            style={styles.editImageButton}
            onPress={() => bottomSheetModalRef.current?.present()}
          >
            <Image source={Images.editIcon} style={styles.editImageIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputSection}>
          <CommonInput
            control={control}
            name="first_name"
            inputlabel="First Name"
            isLeftImage
            leftImage={Images.user}
          />

          <CommonInput
            control={control}
            name="last_name"
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
      </KeyboardContainer>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="SAVE"
          onPress={handleSubmit(handleSave)}
          loading={isLoading}
        />
      </View>
      <CountryPicker
        showPicker={showPicker}
        setShowPicker={setShowPicker}
        onSelectCountry={country => setCountryCode(country.country_code)}
      />
      <BottomSheetModalComponent
        bottomSheetModalRef={bottomSheetModalRef}
        snapPointsProp={['15%', '20%', '25%']}
        showHeader={null}
        backgroundStyle={styles.transparentBackground}
        containerStyle={styles.sheetContainer}
        close={() => {
          bottomSheetModalRef.current?.dismiss();
        }}
      >
        <View style={styles.actionContainer}>
          {/* Main Action Group */}
          <View style={styles.actionGroup}>
            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                { backgroundColor: pressed ? '#f0f0f0' : COLORS.WHITE },
              ]}
              onPress={() => {
                // Handle Camera
                bottomSheetModalRef.current?.dismiss();
                handleCamera();
              }}
            >
              <Text style={styles.actionText}>Camera</Text>
            </Pressable>

            <View style={styles.divider} />

            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                { backgroundColor: pressed ? '#f0f0f0' : COLORS.WHITE },
              ]}
              onPress={() => {
                // Handle Gallery
                bottomSheetModalRef.current?.dismiss();
                handleGallery();
              }}
            >
              <Text style={styles.actionText}>Gallery</Text>
            </Pressable>
          </View>

          {/* Cancel Button */}
          <Pressable
            style={({ pressed }) => [
              styles.cancelButton,
              { backgroundColor: pressed ? '#f0f0f0' : COLORS.WHITE },
            ]}
            onPress={() => {
              bottomSheetModalRef.current?.dismiss();
            }}
          >
            <Text style={styles.cancelText}>CANCEL</Text>
          </Pressable>
        </View>
      </BottomSheetModalComponent>
    </Container>
  );
};

export default EditProfileScreen;
