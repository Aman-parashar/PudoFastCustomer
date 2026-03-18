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
  inputContainer: {
    marginBottom: 15,
  },
  submitButton: {
    marginVertical: 20,
  },
  emailInputContainer: {
    flex: 1,
  },
  headerPadding: {
    paddingHorizontal: 16,
  },
  headerSpacing: {
    height: dimensions.height * 0.05,
  },
});

export default styles;
