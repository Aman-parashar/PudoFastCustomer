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
  gradientHeader: {
    width: '100%',
    height: dimensions.height * 0.48,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  keyboardContainer: {
    flex: 1,
    width: '100%',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButton: {
    marginVertical: 20,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
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
    color: COLORS.GRAY_TEXT,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  termsLink: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  loginText: {
    color: COLORS.GRAY_TEXT,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    alignSelf: 'center',
    marginBottom: 20,
  },
  loginLink: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_EXTRA_BOLD,
  },
  emailInputContainer: {
    flex: 1,
  },
  headerPadding: {
    paddingHorizontal: 16,
    marginTop:20
  },
  headerSpacing: {
    height: dimensions.height * 0.05,
  },
});

export default styles;
