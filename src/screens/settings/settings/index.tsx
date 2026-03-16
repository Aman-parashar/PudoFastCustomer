import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { Rating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useSettingsViewModel } from './SettingsViewModel';
import { Images } from '../../../utils/images';

const SettingsScreen = () => {
  const { navigateToNotifications, navigateToProfile, logout, settingsItems } =
    useSettingsViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Settings</Text>
          <TouchableOpacity onPress={navigateToNotifications}>
            <Image
              source={Images.notification}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity
          style={styles.profileSection}
          onPress={navigateToProfile}
        >
          <View style={styles.profileImageContainer}>
            <Image
              source={Images.userPlaceholder}
              style={styles.profileImage}
            />
            <View style={styles.editButton}>
              <Image
                source={Images.editIcon}
                style={styles.editIcon}
              />
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>John Doe</Text>
            <View style={styles.ratingContainer}>
              <Rating
                type="custom"
                ratingCount={5}
                startingValue={4}
                imageSize={15}
                readonly
                tintColor={COLORS.WHITE}
                ratingBackgroundColor={COLORS.BORDER}
              />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.settingsList}>
          {settingsItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.settingsItem}
              onPress={() => item.onPress && item.onPress()}
            >
              <View style={styles.settingsItemLeft}>
                <Image source={item.icon} style={styles.settingsIcon} />
                <Text style={styles.settingsText}>{item.title}</Text>
              </View>
              <Image
                source={Images.arrowRight}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <LinearGradient
            colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.logoutContent}>
              <Image
                source={Images.logoutIcon}
                style={styles.logoutIcon}
              />
              <Text style={styles.logoutText}>LOGOUT</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
