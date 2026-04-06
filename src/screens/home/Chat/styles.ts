import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';

const PURPLE = COLORS.BUTTON_GRADIENT_PURPLE_START;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFF',
  },
  headerAction: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: PURPLE,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: '#222',
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionContainer: {
    marginTop: 20,
  },
  dateHeader: {
    textAlign: 'center',
    fontSize: 13,
    color: '#999',
    marginBottom: 20,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
    maxWidth: '85%',
  },
  customerRow: {
    alignSelf: 'flex-end',
  },
  driverRow: {
    alignSelf: 'flex-start',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F5F5',
  },
  bubbleContainer: {
    flex: 1,
  },
  customerContainer: {
    marginRight: 10,
  },
  driverContainer: {
    marginLeft: 10,
  },
  bubble: {
    borderRadius: 12,
    padding: 12,
    position: 'relative',
  },
  customerBubble: {
    backgroundColor: PURPLE,
    borderBottomRightRadius: 0,
  },
  driverBubble: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  customerText: {
    color: '#FFFFFF',
  },
  driverText: {
    color: '#222',
  },
  timeText: {
    fontSize: 10,
    marginTop: 4,
    alignSelf: 'flex-end',
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  customerTime: {
    color: 'rgba(255,255,255,0.7)',
  },
  driverTime: {
    color: '#999',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    marginBottom: 20,
  },
  emojiBtn: {
    marginRight: 12,
  },
  emojiIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    tintColor: PURPLE,
  },
  inputWrapper: {
    flex: 1,
    height: 44,
    backgroundColor: '#F9F9F9',
    borderRadius: 22,
    paddingHorizontal: 14,
    justifyContent: 'center',
    marginRight: 1,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
