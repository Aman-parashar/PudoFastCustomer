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
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 15,
  },
  // Transit Details
  addressCard: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickupCard: {
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  dropoffCard: {
    backgroundColor: 'rgba(33, 150, 243, 0.15)',
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 15,
  },
  pickupDot: {
    backgroundColor: '#4CAF50',
  },
  dropoffDot: {
    backgroundColor: '#2196F3',
  },
  addressInfo: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#999999',
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  // Receiver Details
  receiverDetails: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  receiverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  receiverIcon: {
    width: 18,
    height: 18,
    marginRight: 15,
    tintColor: '#E2B235',
    resizeMode:"contain"
  },
  receiverText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#666666',
  },
  // Item Details
  itemsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(33, 150, 243, 0.05)',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(33, 150, 243, 0.2)',
  },
  itemBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#58A5FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  itemBadgeText: {
    fontSize: 10,
    color: COLORS.WHITE,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  itemText: {
    fontSize: 13,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  itemTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemTypeLabel: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  itemTypeValue: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#58A5FF',
    marginLeft: 5,
    marginRight: 10,
  },
  itemTypeIcon: {
    width: 18,
    height: 18,
    tintColor: '#58A5FF',
  },
  descriptionRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FBFBFB',
    borderRadius: 8,
  },
  descIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
    tintColor: '#58A5FF',
    marginTop: 2,
  },
  descriptionText: {
    flex: 1,
    fontSize: 13,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#666666',
    lineHeight: 18,
  },
  // Delivery Details
  deliveryCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#E2B235',
  },
  serviceName: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#E2B235',
  },
  deliveryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  gridIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
    tintColor: '#4CAF50',
  },
  gridText: {
    fontSize: 13,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#666666',
  },
  // Payment Info
  paymentInfoCard: {
    backgroundColor: '#FBFBFB',
    borderRadius: 12,
    padding: 15,
  },
  paymentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  paymentItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  paymentIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
    tintColor: '#FF00FF',
    resizeMode:"contain"
  },
  paymentText: {
    fontSize: 13,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#666666',
  },
  // Comment Section
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  counterText: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#999999',
  },
  commentInput: {
    height: 100,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 10,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  // Confirm Button
  bottomContainer: {
    padding: 20,
    backgroundColor: COLORS.WHITE,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  confirmButton: {
    marginTop: 0,
  },
  // Tracking View Styles
  trackingHeaderCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  trackingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  trackingIcon: {
    width: 18,
    height: 18,
    marginRight: 15,
    resizeMode:"contain"
  },
  trackingText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#000',
  },
  driverSection: {
    paddingHorizontal: 4,
    marginTop: 20,
  },
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
  driverImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#000',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#666',
    marginRight: 5,
  },
  ratingStars: {
    flexDirection: 'row',
  },
  chatButton: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.WHITE,
  },
  statusSection: {
    paddingHorizontal: 16,
    marginTop: 25,
  },
  statusContainer: {
    marginTop: 15,
    paddingVertical: 10,
  },
  trackButtonLarge: {
    marginTop: 30,
    height: 55,
  },
  cancelOrderLink: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
  },
  cancelOrderLinkText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#666',
    textDecorationLine: 'underline',
  },
});

export default styles;
