import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  logo: {
    width: 184,
    height: 140,
    alignSelf: 'center',
    marginTop: 80,
  },
  textContainer: {
    marginBottom: 50,
  },
  welcome: {
    fontSize: 50,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.SECONDARY,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.WHITE,
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 20,
    marginBottom: 20,
  },
  loginButton: {
    height: 50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  signUpButton: {
    height: 50,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  skipButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    textDecorationLine: 'underline',
  },
});

export default styles;
