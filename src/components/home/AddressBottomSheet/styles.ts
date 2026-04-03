import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS, FONT_SIZES } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderWidth: 1.5,
    borderColor: COLORS.BUTTON_GRADIENT_PURPLE_MID,
    borderRadius: 8,
    marginBottom: 20,
    gap: 10,
  },
  mapButtonText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BUTTON_GRADIENT_PURPLE_MID,
    marginTop: 2,
  },
  mapIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
    backgroundColor: COLORS.WHITE,
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  saveButton: {
    height: 55,
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_MID,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.WHITE,
  },
  cancelButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  cancelText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
});

export default styles;
