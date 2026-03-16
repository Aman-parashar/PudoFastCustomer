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
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  toggleButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  toggleButtonActive: {
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
  },
  toggleText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.GRAY_TEXT,
  },
  toggleTextActive: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  scheduleRow: {
    marginBottom: 20,
  },
  pickerField: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 10,
  },
  pickerText: {
    fontSize: 15,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  pickerIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  timePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timePickerField: {
    width: '30%',
    height: 50,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  ampmContainer: {
    width: '30%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    overflow: 'hidden',
  },
  ampmButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  ampmActive: {
    backgroundColor: '#14AA50',
  },
  ampmText: {
    fontSize: 12,
    color: COLORS.GRAY_TEXT,
  },
  ampmTextActive: {
    fontSize: 12,
    color: COLORS.WHITE,
    fontFamily: FONTS.SANTRAL_BOLD,
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
  tripTypeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tripButton: {
    width: '48%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#F8F8F8',
  },
  tripButtonActive: {
    borderColor: '#14AA50',
    borderWidth: 2,
  },
  tripText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.GRAY_TEXT,
  },
  tripTextActive: {
    color: '#14AA50',
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  serviceCardActive: {
    borderColor: '#F1F1F1',
    backgroundColor: '#FFFAEC',
  },
  serviceIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  serviceIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  serviceIconActive: {
    backgroundColor: COLORS.PRIMARY,
  },
  serviceIconInactive: {
    backgroundColor: '#EFEFEF',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.GRAY_TEXT,
    marginBottom: 4,
  },
  serviceTime: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
    marginBottom: 2,
  },
  serviceMiles: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.GRAY_TEXT,
  },
  priceContainer: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  priceContainerActive: {
    borderColor: COLORS.PRIMARY,
  },
  priceText: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  priceTextActive: {
    color: COLORS.PRIMARY,
  },
  nextButton: {
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 10,
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
  serviceTitleActive: {
    color: COLORS.PRIMARY,
  },
});

export default styles;
