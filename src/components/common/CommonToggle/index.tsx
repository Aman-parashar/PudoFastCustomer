import React from 'react';
import { TouchableOpacity, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './styles';
import { COLORS } from '../../../utils/colors';

interface Option {
  label: string;
  value: string | number;
}

interface CommonToggleProps {
  options: Option[];
  activeValue: string | number;
  onSelect: (value: any) => void;
  activeColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CommonToggle: React.FC<CommonToggleProps> = ({
  options,
  activeValue,
  onSelect,
  activeColor = COLORS.BUTTON_GRADIENT_PURPLE_START,
  containerStyle,
  buttonStyle,
  textStyle,
}) => {
  console.log(activeValue, 'activeValueactiveValue')
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option) => {
        const isActive = option.value === activeValue;
        console.log(isActive, 'isActive', option.value, activeValue)
        return (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.toggleButton,
              isActive && styles.toggleButtonActive,
              isActive && { borderColor: activeColor },
              buttonStyle,
            ]}
            onPress={() => onSelect(option.value)}
          >
            <Text
              style={[
                styles.toggleText,
                isActive && [styles.toggleTextActive, { color: activeColor }],
                textStyle,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CommonToggle;
