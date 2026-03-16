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
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  scrollContent: {
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 15,
  },
  pickupTypeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickupTypeButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginHorizontal: 5,
  },
  pickupTypeButtonSelected: {
    borderColor: '#14AA50',
    borderWidth: 2,
  },
  pickupTypeText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#A7A7A7',
  },
  pickupTypeTextSelected: {
    color: '#14AA50',
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  itemTypeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTypeCard: {
    width: '30%',
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  itemIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  itemTypeText: {
    fontSize: 14,
    textAlign: 'center',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  addMoreText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.PRIMARY,
  },
  itemInputRow: {
    marginBottom: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 10,
    backgroundColor: '#FBFBFB',
    paddingHorizontal: 15,
    height: 50,
  },
  itemInput: {
    flex: 1,
    fontSize: 15,
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
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 10,
    padding: 15,
    height: 100,
    fontSize: 15,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.BLACK,
    backgroundColor: '#FBFBFB',
    textAlignVertical: 'top',
  },
  nextButton: {
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 40,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  headerSpacer: {
    width: 40,
  },
  keyboardAvoid: {
    flex: 1,
  },
});

export default styles;
