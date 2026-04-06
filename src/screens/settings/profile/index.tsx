import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useProfileViewModel } from './ProfileViewModel';
import { Images } from '../../../utils/images';
import Header from '../../../components/common/Header';
import CustomButton from '../../../components/common/CustomButton';
import Container from '../../../components/common/Container';

const ProfileScreen = () => {
  const { goBack, navigateToEditProfile, user } = useProfileViewModel();

  return (
    <Container>
      <Header type="step" title="Profile" onBack={goBack} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileImageContainer}>
          <Image source={Images.userPlaceholder} style={styles.profileImage} />
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Image source={Images.user} style={styles.infoIcon} />
            <Text style={styles.valueText}>{user.fullName}</Text>
          </View>

          <View style={styles.infoRow}>
            <Image source={Images.email} style={styles.infoIcon} />
            <Text style={styles.valueText}>{user.email}</Text>
          </View>

          <View style={styles.infoRow}>
            <Image source={Images.phone} style={styles.infoIcon} />
            <Text style={styles.valueText}>{user.phone}</Text>
          </View>

          <View style={styles.infoRow}>
            <Image source={Images.addressIcon} style={styles.infoIcon} />
            <Text style={styles.valueText}>{user.address}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton title="EDIT" onPress={navigateToEditProfile} />
      </View>
    </Container>
  );
};

export default ProfileScreen;
