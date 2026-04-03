import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useSettingsViewModel } from './SettingsViewModel';
import { Images } from '../../../utils/images';
import Header from '../../../components/common/Header';
import CustomButton from '../../../components/common/CustomButton';
import { useProfileData } from '../../../hooks/userProfile';
import { UserData } from '../../../models/User';
import { FONTS } from '../../../utils/fonts';

const SettingsScreen = () => {
  const {
    navigateToProfile,
    handleLogout,

    settingsItems,
    navigateToNotifications,
    isLoggingOut,
    rateModalVisible,
    setRateModalVisible,
    selectedRating,
    setSelectedRating,
    submitRating,
    isSubmittingRating,
  } = useSettingsViewModel();
  const { data } = useProfileData()
  const user: UserData = data!
  console.log(user, "user")
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

      {/* ── Rate App Modal ── */}
      <Modal
        visible={rateModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setRateModalVisible(false)}
      >
        <View style={rateStyles.overlay}>
          <View style={rateStyles.card}>
            {/* Header */}
            <View style={rateStyles.header}>
              <Text style={rateStyles.title}>Rate Our App</Text>
              <TouchableOpacity onPress={() => setRateModalVisible(false)}>
                <Text style={rateStyles.closeBtn}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={rateStyles.subtitle}>
              How would you rate your experience?
            </Text>

            {/* Stars */}
            <View style={rateStyles.starsRow}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity
                  key={star}
                  onPress={() => setSelectedRating(star)}
                  activeOpacity={0.7}
                >
                  <Image
                    source={Images.star}
                    style={[
                      rateStyles.star,
                      {
                        tintColor:
                          star <= selectedRating ? '#E3A63B' : '#D9D9D9',
                      },
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* Submit */}
            <TouchableOpacity
              style={[
                rateStyles.submitBtn,
                (!selectedRating || isSubmittingRating) &&
                  rateStyles.submitDisabled,
              ]}
              onPress={submitRating}
              disabled={!selectedRating || isSubmittingRating}
            >
              {isSubmittingRating ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={rateStyles.submitText}>Submit Rating</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const rateStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  closeBtn: {
    fontSize: 18,
    color: '#999',
    padding: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    marginBottom: 24,
    textAlign: 'center',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  star: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
  },
  submitBtn: {
    backgroundColor: '#770275',
    borderRadius: 10,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitDisabled: {
    opacity: 0.5,
  },
  submitText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default SettingsScreen;
