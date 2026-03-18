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
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButton: {
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
  emailToggleContainer: {
    height: 60,
    width: 50,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneToggleContainer: {
    width: 50,
    height: 60,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailIcon: {
    width: 24,
    height: 24,
  },
  phoneIconLarge: {
    width: 50,
    height: 60,
  },
});

export default styles;
