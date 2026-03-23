import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { COLORS } from '../../utils/colors';
import { Images } from '../../utils/images';
import NavigationService from '../../navigation/NavigationService';
import { FONTS } from '../../utils/fonts';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
  rightComponent?: React.ReactNode;
  hideBack?: boolean;
  type: 'auth' | 'home' | 'step';
  style?: StyleProp<ViewStyle>;
  onNotificationPress?: () => void;
  notificationColor?: string;
}

const renderAuthHeader = (props: HeaderProps) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          NavigationService.goBack();
        }}
      >
        <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
      </Pressable>
    </View>
  );
};

const renderHomeHeader = ({ onNotificationPress, notificationColor }: HeaderProps) => {
  return (
    <View style={styles.homeHeaderContainer}>
      <View style={styles.headerSpacer} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={Images.logoImage}
          style={styles.logoIcon}
          resizeMode="contain"
          tintColor={COLORS.BUTTON_GRADIENT_PURPLE_START}
        />
      </View>
      <Pressable onPress={onNotificationPress} style={styles.notificationButton}>
        <Image
          source={Images.notification}
          style={[styles.icon, { tintColor: notificationColor || '#FFD700' }]}
        />
      </Pressable>
    </View>
  );
};

const renderStepHeader = (props: HeaderProps) => {
  const { title, onBack } = props;
  const handleBack = onBack || (() => NavigationService.goBack());

  return (
    <View style={styles.stepHeaderContainer}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Image source={Images.arrowLeft} style={styles.stepBackIcon} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerSpacer} />
    </View>
  );
};

const renderHeader = (props: HeaderProps) => {
  const { type } = props;
  switch (type) {
    case 'auth':
      return renderAuthHeader(props);

    case 'home':
      return renderHomeHeader(props);
    case 'step':
      return renderStepHeader(props);
    default:
      return null;
  }
};

const Header = (props: HeaderProps) => {
  const { style } = props;
  return <View style={[styles.container, style]}>{renderHeader(props)}</View>;
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    width: '100%',
  },
  homeHeaderContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  stepHeaderContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  backIcon: {
    height: 40,
    width: 40,
  },
  logoIcon: {
    height: 40,
    width: 80,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  stepBackIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: FONTS.SANTRAL_BOLD,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  notificationButton: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
