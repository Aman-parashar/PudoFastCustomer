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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 12,
  },
  addressCard: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
  },
  pickupCard: {
    backgroundColor: '#E8F5E9',
    borderColor: '#C8E6C9',
  },
  dropoffCard: {
    backgroundColor: '#E3F2FD',
    borderColor: '#BBDEFB',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  dotPickup: {
    backgroundColor: '#4CAF50',
  },
  dotDropoff: {
    backgroundColor: '#2196F3',
  },
  addressInfo: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: '#999999',
    marginBottom: 2,
  },
  addressText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  inputHalf: {
    width: '48%',
  },
  inputFull: {
    width: '100%',
  },
  confirmButton: {
    marginTop: 20,
  },

  keyboardView: {
    flex: 1,
  },
});

export default styles;
