import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ToastConfig as ToastConfigType } from 'react-native-toast-message';
import { COLORS } from './colors';
import { FONTS } from './fonts';

const ToastConfig: ToastConfigType = {
  success: ({ text1, text2 }) => (
    <View style={styles.successToast} >
      <Text style={styles.text1} numberOfLines={2} >
        {text1}
      </Text>
      {text2 && <Text style={styles.text2}> {text2} </Text>}
    </View>
  ),
  error: ({ text1, text2 }) => (
    <View style={styles.errorToast} >
      <Text style={styles.errorText1}> {text1} </Text>
      {text2 && <Text style={styles.errorText2}> {text2} </Text>}
    </View>
  ),
  info: ({ text1, text2 }) => (
    <View style={styles.infoToast} >
      <Text style={styles.text1}> {text1} </Text>
      <Text style={styles.text2} > {text2} </Text>
    </View>
  ),
};

export default ToastConfig;
const styles = StyleSheet.create({
  successToast: {
    backgroundColor: COLORS.WHITE,
    padding: 16,
    borderRadius: 8,
    // flexDirection: 'row',



  },
  errorToast: {
    backgroundColor: COLORS.WHITE,
    padding: 16,
    borderRadius: 8,
    // flexDirection: 'row',


  },
  infoToast: {
    backgroundColor: COLORS.WHITE,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text1: {
    color: COLORS.BUTTON_GRADIENT_PURPLE_END,
    fontFamily: FONTS.SANTRAL_MEDIUM,


  },
  text2: {
    color: COLORS.BUTTON_GRADIENT_PURPLE_END,
    fontFamily: FONTS.SANTRAL_SEMI_BOLD,
  },
  errorText1: {
    color: COLORS.BUTTON_GRADIENT_PURPLE_END,
    fontFamily: FONTS.SANTRAL_SEMI_BOLD,

  },
  errorText2: {
    color: COLORS.BUTTON_GRADIENT_PURPLE_END,
  },
});
