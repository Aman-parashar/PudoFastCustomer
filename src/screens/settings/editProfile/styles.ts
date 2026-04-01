import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';

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
  sheetContainer: {
    paddingHorizontal: 20,
  },
  actionGroup: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    overflow: 'hidden',
    gap: 0,
  },
  actionButton: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  actionText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '500',
  },
  cancelButton: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    marginTop: 10,
  },
  cancelText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  actionContainer: {
    gap: 10,
  },
});

export default styles;
