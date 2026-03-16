import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  ImageSourcePropType,
  Image,
  TextStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../utils/colors';
import { FONTS } from '../../utils/fonts';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  title?: string;
  icon?: ImageSourcePropType;
  textStyle?: StyleProp<TextStyle>;
  tintColor?: string;
  rightIcon?: ImageSourcePropType;
  leftIconStyle?: StyleProp<ImageStyle>;
  disabled?: boolean;
};

const ModalButton = ({
  style,
  onPress,
  title = 'Close',
  icon,
  textStyle,
  tintColor,
  rightIcon,
  leftIconStyle,
  disabled,
}: Props) => {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}>
      {icon && (
        <Image
          source={icon}
          style={[styles.icon, leftIconStyle]}
          tintColor={tintColor}
        />
      )}
      <View style={styles.textWrapper}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </View>
      {rightIcon && <Image source={rightIcon} style={[styles.icon]} />}
    </Pressable>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY_WHITE,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.TRIBE_SELECTED,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.TRIBE_SELECTED,
    fontSize: 14,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: COLORS.PRIMARY_WHITE,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
