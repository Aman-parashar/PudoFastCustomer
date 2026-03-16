import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../utils/colors';
import { FONTS } from '../../utils/fonts';

type Props = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};

const LinkText = ({ style, children, onPress, disabled }: Props) => {
  return (
    <Text
      style={[styles.linkText, style, disabled && { opacity: 0.5 }]}
      onPress={disabled ? undefined : onPress}>
      {children}
    </Text>
  );
};

export default LinkText;

const styles = StyleSheet.create({
  linkText: {
    color: COLORS.LINK_TEXT,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.LINK_TEXT,
  },
});
