import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
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
  backButton: {
    padding: 10,
    marginLeft: -10,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode:'contain'
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  headerRightPlaceholder: {
    width: 40,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },
  logo: {
    width: 200,
    height: 120,
    alignSelf: 'center',
    marginBottom: 40,
  },
  inputsWrapper: {
    marginBottom: 20,
  },
  textAreaContainer: {
    marginTop: 0,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 30,
  },
});

export default styles;
