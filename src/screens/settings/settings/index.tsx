import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useSettingsViewModel } from './SettingsViewModel';
import { Images } from '../../../utils/images';
import Header from '../../../components/common/Header';
import CustomButton from '../../../components/common/CustomButton';
import { useProfileData } from '../../../hooks/userProfile';
import { UserData } from '../../../models/User';

const SettingsScreen = () => {
  const {
    navigateToProfile,
    handleLogout,

    settingsItems,
    navigateToNotifications,
    isLoggingOut,
  } = useSettingsViewModel();
  const { data } = useProfileData()
  const user: UserData = data!

  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={Images.fillRating}
          style={[
            styles.starIcon,
            { tintColor: i <= Math.floor(rating) ? '#FFD700' : '#E0E0E0' },
          ]}
        />,
      );
    }
    return stars;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Header type="home" onNotificationPress={navigateToNotifications} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Info Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={user?.profile_image ? { uri: user.profile_image } : Images.userPlaceholder}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.userName}>{user?.full_name}</Text>
            <View style={styles.ratingContainer}>
              {renderRatingStars(user?.total_rating)}
            </View>
          </View>

          <TouchableOpacity
            onPress={() => { navigateToProfile(user) }}
            style={styles.editIconContainer}
          >
            <Image
              source={Images.editIcon}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Menu List */}
        <View style={styles.menuContainer}>
          {settingsItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <Image source={item.icon} style={styles.menuIcon} />
              <Text style={styles.menuTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <CustomButton
            title="LOGOUT"
            onPress={handleLogout}
            leftImage={Images.logoutIcon}
            style={styles.logoutButton}
            variant="solid"
            loading={isLoggingOut}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
