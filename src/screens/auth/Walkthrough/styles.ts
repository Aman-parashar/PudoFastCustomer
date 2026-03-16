import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  slide: {
    width,
    height,
  },
  mainImage: {
    alignSelf: 'center',
    height: '100%',
    marginTop: 20,
  },
  bottomContainer: {
    flex: 1,


  },
  bottomBg: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 80,
  },
  countImage: {
    width: 150,
    height: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.SECONDARY,

    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.WHITE,
    textAlign: 'center',
    lineHeight: 22,
    paddingVertical: 10
  },
  nextButton: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  nextText: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  skipButton: {
    padding: 10,
  },
  skipText: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
});

export default styles;
export { width, height };
