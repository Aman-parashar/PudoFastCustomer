import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS, FONT_SIZES } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    height: 60,
    justifyContent: 'center',
  },
  navShadow: {
    position: 'absolute',
    top: -40,
    width: '100%',
    height: 110,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.BORDER,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
  },
  editIcon: {
    width: 15,
    height: 15,
  },
  profileInfo: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  ratingContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
  },
  settingsList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
    tintColor: COLORS.PRIMARY,
    resizeMode: 'contain',
  },
  settingsText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  arrowIcon: {
    width: 12,
    height: 12,
    tintColor: COLORS.GRAY_TEXT,
  },
  logoutButton: {
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginTop: 40,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: COLORS.WHITE,
  },
  logoutText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
});

export default styles;
