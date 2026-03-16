import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useProfileViewModel } from './ProfileViewModel';
import { Images } from '../../../utils/images';

const ProfileScreen = () => {
  const { goBack, navigateToEditProfile, user } = useProfileViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.backButton}
        >
          <Image
            source={Images.arrowLeft}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          onPress={navigateToEditProfile}
          style={styles.editButtonHeader}
        >
          <Image
            source={Images.editIcon}
            style={styles.editIconHeader}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileImageContainer}>
          <Image
            source={Images.userPlaceholder}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{user.fullName}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>{user.phone}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>{user.address}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Driver Type</Text>
            <Text style={styles.value}>{user.type}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
