import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  gradientHeader: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTextContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.WHITE,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 10,
    lineHeight: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -25,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: 5,
  },
  toggleButtonActive: {
    borderColor: COLORS.PRIMARY,
    backgroundColor: 'rgba(119, 3, 117, 0.05)',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.GRAY_TEXT,
    marginRight: 8,
  },
  radioActive: {
    borderColor: COLORS.PRIMARY,
    borderWidth: 5,
  },
  toggleText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.GRAY_TEXT,
  },
  toggleTextActive: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
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
    height: 55,
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
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 55,
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#FBFBFB',
  },
  countryCodeText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  sendButton: {
    height: 55,
    borderRadius: 27.5,
    overflow: 'hidden',
    marginTop: 20,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
});

export default styles;
