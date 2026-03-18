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
    height: dimensions.height * 0.45,
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
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.PRIMARY,
    backgroundColor: COLORS.WHITE,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.GRAY_TEXT,
  },
  resendText: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_BOLD,
    textDecorationLine: 'underline',
  },
  verifyButton: {
    marginVertical: 20,
  },
  headerPadding: {
    paddingHorizontal: 16,
  },
  headerSpacing: {
    height: dimensions.height * 0.05,
  },
});

export default styles;
