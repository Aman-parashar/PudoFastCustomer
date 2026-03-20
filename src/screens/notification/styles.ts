import { StyleSheet } from 'react-native';
import { FONTS } from '../../utils/fonts';
import { COLORS } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#999',
    fontFamily: FONTS.SANTRAL_MEDIUM,
    marginRight: 10,
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#F0F0F0',
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F8F8F8',
  },
  cardLeft: {
    alignItems: 'center',
    marginRight: 15,
    width: 60,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3E5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  bellIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: '#770275',
  },
  timeText: {
    fontSize: 10,
    color: '#333',
    fontFamily: FONTS.SANTRAL_BOOK,
    textAlign: 'center',
  },
  cardRight: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    color: '#770275',
    fontFamily: FONTS.SANTRAL_BOLD,
    marginBottom: 4,
  },
  bodyText: {
    fontSize: 13,
    color: '#666',
    fontFamily: FONTS.SANTRAL_BOOK,
    lineHeight: 18,
  },
  deleteAction: {
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '87%', // Slightly less than card height to account for marginBottom
    borderRadius: 12,
    marginTop: 1, // Visual alignment
  },
  deleteActionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  emptyTitle: {
    fontSize: 18,
    color: '#222',
    fontWeight: 'bold',
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  clearBtn: {
    paddingHorizontal: 5,
  },
  clearBtnText: {
    fontSize: 15,
    color: '#FF3B30',
    fontWeight: '600',
    fontFamily: FONTS.SANTRAL_SEMI_BOLD,
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
});

export default styles;
