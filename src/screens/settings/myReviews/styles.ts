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
  ratingSummary: {
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  averageRating: {
    fontSize: 60,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    marginRight: 20,
  },
  ratingStars: {
    flex: 1,
  },
  totalReviews: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.GRAY_TEXT,
    marginTop: 5,
  },
  listContent: {
    padding: 20,
  },
  reviewCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: COLORS.BORDER,
  },
  userName: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  date: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.GRAY_TEXT,
  },
  reviewText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 20,
  },
  headerSpacer: {
    width: 40,
  },
});

export default styles;
