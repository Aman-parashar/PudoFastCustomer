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
    paddingBottom: 40,
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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 12,
  },

  itemTypeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTypeCard: {
    width: '31%',
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  itemTypeText: {
    fontSize: 12,
    textAlign: 'center',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  addMoreText: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BUTTON_GRADIENT_PURPLE_START,
  },
  itemInputRow: {
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    height: 50,
  },
  basketIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#5F9BE4',
  },
  itemInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.BLACK,
  },
  deleteButton: {
    padding: 5,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: '#FF5252',
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  nextButton: {
    marginTop: 10,
  },

  keyboardAvoid: {
    flex: 1,
  },
});

export default styles;
