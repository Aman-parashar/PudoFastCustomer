import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/colors';
import { FONTS } from '../../../utils/fonts';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 2,
    gap:10
    // borderColor: '#EFEFEF',
  },
  toggleButton: {
    flex: 1,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:StyleSheet.hairlineWidth,

    borderColor:COLORS.GRAY_TEXT
   
  },
  toggleButtonActive: {
    backgroundColor: COLORS.WHITE,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth:1,
    borderColor:'#000'
  },
  toggleText: {
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: COLORS.BLACK,
  },
  toggleTextActive: {
    fontFamily: FONTS.SANTRAL_BOLD,
  },
});

export default styles;
