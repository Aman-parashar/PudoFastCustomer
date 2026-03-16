import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  scrollContent: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 15,
  },
  addressCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 15,
  },
  addressInfo: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 10,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#999999',
    marginBottom: 2,
  },
  addressText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  verticalLine: {
    width: 1,
    height: 20,
    backgroundColor: '#DDDDDD',
    marginLeft: 4.5,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.BLACK,
    backgroundColor: '#FBFBFB',
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCodeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    marginRight: 10,
    backgroundColor: '#FBFBFB',
  },
  countryCodeText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
    marginRight: 5,
  },
  dropdownIcon: {
    width: 10,
    height: 10,
    transform: [{ rotate: '-90deg' }],
    tintColor: COLORS.GRAY_TEXT,
  },
  confirmButton: {
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 30,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  headerSpacer: {
    width: 40,
  },
  keyboardView: {
    flex: 1,
  },
  dotPickup: {
    backgroundColor: '#4CAF50',
  },
  dotDropoff: {
    backgroundColor: '#2196F3',
  },
  halfWidth: {
    flex: 1,
  },
  marginRight10: {
    marginRight: 10,
  },
});

export default styles;
