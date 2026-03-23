import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollContent: {
    paddingBottom: 20,
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
  listHeader: {
    padding: 20,
  },
  overallRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bigRatingText: {
    fontSize: 48,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginRight: 15,
  },
  bigStarsRow: {
    flexDirection: 'row',
  },
  bigStar: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  breakdownContainer: {
    marginBottom: 30,
  },
  ratingBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingNumber: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    width: 20,
  },
  smallStar: {
    width: 14,
    height: 14,
    marginRight: 10,
    tintColor: COLORS.SECONDARY,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 4,
  },
  filterContainer: {
    paddingBottom: 10,
  },
  filterTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    marginRight: 10,
    backgroundColor: COLORS.WHITE,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 2,
    // backgroundColor: 'red'
  },
  activeFilterTab: {
    borderColor: COLORS.SECONDARY,
  },
  filterText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
    marginRight: 5,
  },
  activeFilterText: {
    color: COLORS.BLACK,
  },
  filterStar: {
    width: 14,
    height: 14,
    tintColor: COLORS.SECONDARY,
  },
  activeFilterStar: {
    tintColor: COLORS.SECONDARY,
  },
  reviewCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    // Elevation for Android
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
  },
  reviewInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginBottom: 4,
  },
  starsRow: {
    flexDirection: 'row',
  },
  cardStar: {
    width: 14,
    height: 14,
    marginRight: 2,
  },
  reviewText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: '#666',
    lineHeight: 20,
  },
  headerSpacer: {
    width: 40,
  },
});
