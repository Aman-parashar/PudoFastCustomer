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
    marginTop: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    backgroundColor: '#FBFBFB',
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
    height: 55,
    borderRadius: 27.5,
    overflow: 'hidden',
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
});

export default styles;
