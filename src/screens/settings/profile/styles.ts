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
    alignItems: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 70,
    backgroundColor: COLORS.BACKGROUND_GRAY,
  },
  infoSection: {
    width: '100%',
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  infoIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: COLORS.PRIMARY,
    marginRight: 20,
  },
  valueText: {
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 30,
  },
});

export default styles;
