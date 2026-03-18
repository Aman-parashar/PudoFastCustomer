import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '../screens/home/Home';
import HistoryScreen from '../screens/history/history';
import SettingsScreen from '../screens/settings/settings';
import { COLORS } from '../utils/colors';
import { FONTS } from '../utils/fonts';

import { Images } from '../utils/images';

const Tab = createBottomTabNavigator();

const TabIcon = ({ color, iconSource }: any) => (
  <Image
    source={iconSource}
    style={[styles.tabIcon, { tintColor: color }]}
    resizeMode="contain"
  />
);

const HomeIcon = (props: any) => (
  <TabIcon
    {...props}
    iconSource={props.focused ? Images.homeSelected : Images.homeUnSelected}
  />
);

const HistoryIcon = (props: any) => (
  <TabIcon
    {...props}
    iconSource={props.focused ? Images.historySelected : Images.historyUnSelected}
  />
);

const SettingsIcon = (props: any) => (
  <TabIcon
    {...props}
    iconSource={props.focused ? Images.settingSelected : Images.settingUnSelected}
  />
);

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
        tabBarInactiveTintColor: COLORS.GRAY_TEXT,
        tabBarStyle: [
          styles.tabBar,
          {
            height: 65 + (insets.bottom > 0 ? insets.bottom - 10 : 0),
            paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
          },
        ],
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home', tabBarIcon: HomeIcon }}
      />
      <Tab.Screen
        name="HistoryTab"
        component={HistoryScreen}
        options={{ tabBarLabel: 'History', tabBarIcon: HistoryIcon }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Setting', tabBarIcon: SettingsIcon }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: COLORS.WHITE,
    borderTopWidth: 1,
    borderTopColor: COLORS.BORDER,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: FONTS.SANTRAL_MEDIUM,
  },
});

export default TabNavigator;
