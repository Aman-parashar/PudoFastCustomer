import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
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
  webviewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
});

export default styles;
