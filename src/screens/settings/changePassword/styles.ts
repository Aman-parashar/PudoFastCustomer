import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  keyboardView: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  illustration: {
    width: 250,
    height: 180,
  },
  inputSection: {
    width: '100%',
    marginTop: 10,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 30,
  },
    header: {
    backgroundColor: COLORS.WHITE,
    zIndex: 10,
  },
   navShadow: {
    position: 'absolute',
    top: -40,
    width: '100%',
    height: 110,
  },
});

export default styles;
