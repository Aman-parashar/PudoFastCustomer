import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS, FONT_SIZES } from '../../../utils/fonts';
import { dimensions } from '../../../utils/constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  gradientHeader: {

  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  bgImage: {
    width: dimensions.width,

    position: 'absolute',
    top: 0,
    height: dimensions.height,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 6,
  },
  contentContainer: {
    marginTop: 250,
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
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 10,
    overflow: 'hidden',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: COLORS.PRIMARY,
  },
  toggleText: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  activeToggleText: {
    color: COLORS.WHITE,
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  loginButton: {
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
  loginButtonText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.BORDER,
  },
  orText: {
    marginHorizontal: 10,
    color: COLORS.GRAY_TEXT,
    fontSize: FONT_SIZES.SMALL,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  signUpContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: COLORS.TEXT_SECONDARY,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  signUpLink: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  skipButton: {
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  skipText: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    textDecorationLine: 'underline',
  },
});

export default styles;
