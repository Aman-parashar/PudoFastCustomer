import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { COLORS } from '../../utils/colors';

const Loader = ({
  isLoading,
  style,
  size = 50,
}: {
  isLoading: boolean;
  style?: StyleProp<ViewStyle>;
  size?: number | 'small' | 'large';
}) => {
  if (!isLoading) return null;

  return (
    <View
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        style,
      ]}>
      <ActivityIndicator
        size={size}
        color={COLORS.PRIMAMRY_GREEN}
        animating={isLoading}
      />
    </View>
  );
};

export default Loader;
