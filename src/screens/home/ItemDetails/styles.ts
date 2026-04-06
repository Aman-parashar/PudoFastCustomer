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
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
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
    // marginBottom: 12,
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
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 16,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
  },
  modalHeader: {
    width: '100%',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: FONTS.SANTRAL_BOLD,
    fontSize: 20,
    color: COLORS.BLACK,
  },
  modalBody: {
    padding: 24,
    width: '100%',
  },
  modalLabel: {
    fontFamily: FONTS.SANTRAL_BOLD,
    fontSize: 18,
    color: COLORS.BLACK,
    marginBottom: 10,
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 56,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10
  },
  serviceButtonText: {
    flex: 1,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    fontSize: 16,
    color: '#ccc',
  },
  modalFooter: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  noButton: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#770375',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesButton: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#770375',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noButtonText: {
    fontFamily: FONTS.SANTRAL_BOLD,
    fontSize: 16,
    color: '#770375',
  },
  yesButtonText: {
    fontFamily: FONTS.SANTRAL_BOLD,
    fontSize: 16,
    color: COLORS.WHITE,
  },
  dropdownArrow: {
    width: 14,
    height: 14,
    tintColor: '#999',
    transform: [{ rotate: '90deg' }],
  },
  pickerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pickerContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 40,
    alignItems: 'center',
    overflow: 'hidden',
  },
  pickerItem: {
    width: '100%',

    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,


    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 5,
    padding: 10



  },
  pickerItemText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#999',
  },
  pickerItemSelected: {
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  pickerItemSelectedText: {
    color: '#333',
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  pickerIndicator: {
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    marginVertical: 15,
  },
  serviceSelectedText: {
    color: '#333',
  },
});

export default styles;
