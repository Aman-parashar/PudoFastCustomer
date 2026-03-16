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
    marginTop: 30,
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
  passwordRow: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingRight: 50,
    height: 55,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.BLACK,
    backgroundColor: '#FBFBFB',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
    height: 55,
    justifyContent: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: COLORS.PRIMARY,
  },
  submitButton: {
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
  submitText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
});

export default styles;
