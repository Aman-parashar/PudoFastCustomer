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
    justifyContent: 'space-between', // logo top, bottomGroup bottom
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  logo: {
    width: 184,
    height: 140,
    alignSelf: 'center',
    marginTop: 80,
  },

  // ✅ New wrapper that groups text + buttons at the bottom
  bottomGroup: {
    gap: 24,
    marginBottom: 20,
  },

  textContainer: {
    // ✅ Removed backgroundColor: 'red'
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
    gap: 16,
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
});

export default styles;
