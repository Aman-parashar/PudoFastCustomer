import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { dimensions } from '../../../utils/constant';
import { FONTS } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  gradientHeaderTitle: {
    color: COLORS.SECONDARY,
    fontSize: 34,
    fontFamily: FONTS.SANTRAL_BOLD,

    marginTop: 10,
  },
  gradientHeaderSubTitle: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    marginTop: 10,

  },
  curve: {
    width: '100%',
    height: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundColor: COLORS.TRANSPARENT,
    alignItems: 'flex-start',

  },
  gradientHeader1: {
    width: '100%',
    height: dimensions.height * 0.1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  gradientHeader: {
    width: '100%',
    height: dimensions.height * 0.5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  keyboardContainer: {
    flex: 1,

    width: '100%',
  },
  emailIcon: {
    width: 5,
    aspectRatio: 1 / 1.2,


  },
  emailContainer: {
    height: 60,
    width: 50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIcon: {
    width: 5,
    aspectRatio: 1 / 1.2,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginVertical: 15,
  },
  forgotPasswordText: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  loginButton: {
    marginVertical: 15,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.GRAY_TEXT,
  },
  orText: {
    color: COLORS.GRAY_TEXT,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    fontSize: 12,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'center',


  },
  socialButtonsContainer: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 55,
    height: 55,
  },
  signUpText: {
    color: COLORS.GRAY_TEXT,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    alignSelf: 'center',
  },
  signUpLink: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_EXTRA_BOLD,
  },
  emailInputContainer: {
    flex: 1,
  },
  headerContent: {
    paddingHorizontal: 16,
  },
  headerSpacer: {
    height: dimensions.height * 0.08,
  },
  mainContent: {
    paddingHorizontal: 16,
    flex: 1,
  },
  transparentBackground: {
    backgroundColor: COLORS.TRANSPARENT,
  },
});

export default styles;
