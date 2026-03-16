import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS, FONT_SIZES } from '../../../utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  header: {
    height: 60,
    justifyContent: 'center',
  },
  navShadow: {
    position: 'absolute',
    top: -40,
    width: '100%',
    height: 110,
  },
  headerContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  listContent: {
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderId: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
  },
  status: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#4CAF50',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.BORDER,
    marginBottom: 10,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dotGreen: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 10,
  },
  dotBlue: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2196F3',
    marginRight: 10,
  },
  addressText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.TEXT_SECONDARY,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
  },
  date: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_BOOK,
    color: COLORS.GRAY_TEXT,
  },
  price: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.PRIMARY,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.GRAY_TEXT,
  },
});

export default styles;
