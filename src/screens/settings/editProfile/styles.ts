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
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: COLORS.BACKGROUND_GRAY,
  },
  editImageButton: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    // backgroundColor: COLORS.WHITE,
    // borderRadius: 15,
    // padding: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 3,
  },
  editImageIcon: {
    width: 50,
    height: 50,
    // tintColor: COLORS.PRIMARY,
  },
  inputSection: {
    width: '100%',
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 30,
  },
});

export default styles;
