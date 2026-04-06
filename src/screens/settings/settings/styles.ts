import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS, FONT_SIZES } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerWrapper: {
    backgroundColor: COLORS.WHITE,
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: COLORS.WHITE,
    paddingBottom: 35,
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 8,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 55,
    backgroundColor: '#F5F5F5',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 5,
  },
  userName: {
    fontSize: 22,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#000',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  editIconContainer: {},
  editIcon: {
    width: 50,
    height: 50,
  },
  menuContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
    tintColor: '#FB5184',
    resizeMode: 'contain',
  },
  menuTitle: {
    fontSize: 15,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#333333',
  },
  logoutContainer: {
    paddingHorizontal: 20,
    marginTop: 35,
    marginBottom: 30,
  },
  logoutButton: {
    height: 55,
    borderRadius: 10,
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
});

export default styles;
