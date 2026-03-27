import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },

  scrollContent: {
    padding: 20,
  },
  header: {
    backgroundColor: COLORS.WHITE,
    zIndex: 10,
  },
  navShadow: {
    position: 'absolute',
    top: -40,
    width: '100%',
    height: 110,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 15,
  },

  savedCardCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  savedCardSelected: {
    borderColor: '#FF00FF', // Pinkish purple as in image
  },
  cardIconContainer: {
    width: 60,
    height: 40,
    backgroundColor: '#58A5FF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    position: 'relative',
  },
  cardIcon: {
    width: 40,
    height: 25,
    resizeMode: 'contain',
    tintColor: COLORS.WHITE,
  },
  checkmarkBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.WHITE,
  },
  checkmarkIcon: {
    width: 10,
    height: 10,
    tintColor: COLORS.WHITE,
  },
  cardInfo: {
    flex: 1,
  },
  cardNumber: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    letterSpacing: 1,
  },
  cardNumberSelected: {
    color: '#FF00FF',
  },
  cardExpiry: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#999999',
    marginTop: 4,
  },
  addCardContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  addCardText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: COLORS.WHITE,
  },
  nextButton: {
    marginTop: 10,
  },
});

export default styles;
