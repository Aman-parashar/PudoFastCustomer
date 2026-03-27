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
    paddingBottom: 40,
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
  toggleContainer: {
    marginBottom: 25,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 15,
  },

  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBFBFB',
    borderRadius: 8,
    // padding: 12,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  serviceCardActive: {
    borderColor: '#E2B235',
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIconContainer: {
    width: 65,
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor:"red"
  },
  serviceIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  serviceIconActive: {
    backgroundColor: '#E2B235',
  },
  serviceIconInactive: {
    backgroundColor: '#EFEFEF',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 15,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#D1D1D1',
    marginBottom: 4,
  },
  serviceTitleActive: {
    color: '#E2B235',
  },
  serviceTime: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#999999',
  },
  priceContainer: {
    marginRight: 10,
  },
  priceText: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  priceTextActive: {
    color: '#E2B235',
  },
  nextButton: {
    marginTop: 70
  },

});

export default styles;
