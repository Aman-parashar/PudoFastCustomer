import {
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../utils/colors';

type Props = {
  children: React.ReactNode;
  subContainer?: StyleProp<ViewStyle>;
  container?: StyleProp<ViewStyle>;
  bottomContainerStyle?: StyleProp<ViewStyle>;
  statusBackground?: string;
  bottomContainer?: boolean;
};

const Container = ({
  children,
  statusBackground,
  subContainer,
  container,
  bottomContainer = false,
  bottomContainerStyle,
}: Props) => {
  return (
    <View style={[styles.container, container]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={statusBackground ? statusBackground : COLORS.WHITE}
        translucent={true}
      />
      <View
        style={[{ marginTop: useSafeAreaInsets().top + 5 }, subContainer]}
      />
      {children}
      {!bottomContainer && (
        <View style={[styles.bottomContainer, bottomContainerStyle]} />
      )}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  bottomContainer: {
    // height: 10,
  },
});
