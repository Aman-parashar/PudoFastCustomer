import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../utils/colors';
import { FONTS } from '../../utils/fonts';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  loadingColor?: string;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTextStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  style = {},
  textStyle = {},
  loading = false,
  loadingColor = '#ffffff',
  disabledStyle = {},
  disabledTextStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[styles.container, style]}>
      <LinearGradient
        colors={
          disabled
            ? ['#BDBDBD', '#BDBDBD']
            : [COLORS.BUTTON_GRADIENT_PURPLE_START, COLORS.BUTTON_GRADIENT_PURPLE_END]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.button,
          disabled && [styles.disabledButton, disabledStyle],
        ]}>
        <Text
          style={[
            styles.buttonText,
            textStyle,
            disabled && [styles.disabledText, disabledTextStyle],
          ]}>
          {(title || 'Next').toUpperCase()}
        </Text>
        {loading && (
          <ActivityIndicator
            color={loadingColor}
            size="small"
            animating={true}
            style={styles.loader}
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 57,

    overflow: 'hidden',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

    borderRadius: 10,
    backgroundColor: 'red',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.SANTRAL_BOLD,

  },
  disabledButton: {
    opacity: 0.6,
  },
  disabledText: {
    color: COLORS.WHITE,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
});

export default CustomButton;
