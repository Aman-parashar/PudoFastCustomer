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
    padding: 5,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  homeIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.PRIMARY,
    resizeMode: 'contain',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusTitle: {
    fontSize: 20,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    textAlign: 'center',
    marginBottom: 10,
  },
  orderInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  orderLabel: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  amountText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  timelineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  timelineItem: {
    alignItems: 'center',
    width: 60,
  },
  timelineIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  timelineText: {
    fontSize: 8,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  timelineLine: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.BORDER,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 15,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  starIcon: {
    width: 12,
    height: 12,
    tintColor: '#FFD700',
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.GRAY_TEXT,
  },
  chatButton: {
    padding: 10,
  },
  chatIcon: {
    width: 24,
    height: 24,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    marginRight: 10,
    width: 70,
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  addressText: {
    flex: 1,
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.BLACK,
  },
  receiverInfoSection: {
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
  },
  infoLabel: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_SEMI_BOLD,
    color: COLORS.GRAY_TEXT,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
    marginBottom: 10,
  },
  itemTypeText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_SEMI_BOLD,
    color: COLORS.BLACK,
    marginBottom: 15,
  },
  itemTypeHighlight: {
    color: '#5F9BE4',
    fontSize: 20,
  },
  descriptionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 8,
  },
  infoIcon: {
    width: 16,
    height: 16,
    tintColor: COLORS.PRIMARY,
    marginRight: 10,
    marginTop: 2,
  },
  descriptionText: {
    flex: 1,
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
    lineHeight: 20,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentLabel: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.GRAY_TEXT,
  },
  paymentValue: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  paymentTotalLabel: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginTop: 10,
  },
  paymentTotalValue: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.PRIMARY,
    marginTop: 10,
  },
  reportButton: {
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  reportText: {
    color: '#FF0000',
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  timelineIconGray: {
    tintColor: COLORS.GRAY_TEXT,
  },
  chatIconPrimary: {
    tintColor: COLORS.PRIMARY,
  },
  pickupBadge: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  pickupBadgeText: {
    color: '#4CAF50',
  },
  dropoffBadge: {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
  },
  dropoffBadgeText: {
    color: '#2196F3',
  },
});

export default styles;
