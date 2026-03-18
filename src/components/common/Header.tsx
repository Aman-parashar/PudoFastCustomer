import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, StyleProp, ViewStyle } from 'react-native';
import { COLORS } from '../../utils/colors';
import { Images } from '../../utils/images';
import NavigationService from '../../navigation/NavigationService';
interface HeaderProps {
  title?: string;
  onBack?: () => void;
  rightComponent?: React.ReactNode;
  hideBack?: boolean;
  type: "auth" | "home";
  style?: StyleProp<ViewStyle>;
  onNotificationPress?: () => void;
}
const renderAuthHeader = (props: HeaderProps) => {
  return (
    <View >
      <Pressable onPress={() => { NavigationService.goBack() }}>
        <Image source={Images.back} style={styles.backIcon} resizeMode='contain' />
      </Pressable>
    </View>
  )
}
const renderHomeHeader = ({ onNotificationPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={Images.logoImage} style={styles.logoIcon} resizeMode='contain' tintColor={COLORS.BUTTON_GRADIENT_PURPLE_START} />
      </View>
      <Pressable onPress={onNotificationPress}>
        <Image
          source={Images.notification}
          style={styles.icon}
        />      </Pressable>
    </View>
  )
}
const renderHeader = (props: HeaderProps) => {
  const { type } = props;
  switch (type) {
    case 'auth':
      return renderAuthHeader(props)

    case 'home':
      return renderHomeHeader(props)
    default:
      return null;
  }
}
const Header = (props: HeaderProps) => {
  const { style } = props;
  return (
    <View style={[styles.container, style]}>
      {renderHeader(props)}
    </View>

  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    width: '100%',

    borderBottomColor: COLORS.BORDER,

  }, icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  backIcon: {
    height: 40, width: 40
  },
  logoIcon: {
    height: 40, width: 80,

  }

});
