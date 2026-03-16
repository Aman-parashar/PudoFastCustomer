import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS, FONT_SIZES } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  bgImage: {
    width: '100%',
    height: 300,
    position: 'absolute',
    top: 0,
  },
  contentContainer: {
    marginTop: 200,
    paddingHorizontal: 20,
    backgroundColor: COLORS.BACKGROUND,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: FONT_SIZES.XXLARGE,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.SECONDARY,
    marginBottom: 10,
  },
  description: {
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: FONTS.SANTRAL_BOOK,
  },
  eyeIcon: {
    padding: 5,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxActive: {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },
  checkmark: {
    color: COLORS.WHITE,
    fontSize: 12,
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: COLORS.TEXT_SECONDARY,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  termsLink: {
    color: COLORS.BLACK,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  signUpButton: {
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 30,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  loginContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: COLORS.TEXT_SECONDARY,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  loginLink: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
});

export default styles;
