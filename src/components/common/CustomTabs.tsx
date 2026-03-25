import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../utils/colors';
import { FONTS } from '../../utils/fonts';

interface TabOption {
  label: string;
  value: string;
}

interface CustomTabsProps {
  tabs: TabOption[];
  activeTab: string;
  onTabPress: (value: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  activeTab,
  onTabPress,
}) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;
        return (
          <TouchableOpacity
            key={tab.value}
            style={[styles.tab, isActive && styles.activeTab]}
            onPress={() => onTabPress(tab.value)}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
              {tab.label}
            </Text>
            {isActive && <View style={styles.indicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    position: 'relative',
  },
  activeTab: {
    // Optional additional active tab styles
  },
  tabLabel: {
    fontSize: 15,
    fontFamily: FONTS.SANTRAL_MEDIUM,
    color: '#999',
  },
  activeTabLabel: {
    color: COLORS.BUTTON_GRADIENT_PURPLE_START,
    fontFamily: FONTS.SANTRAL_BOLD,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: '80%', // Indicator width relative to tab
    height: 3,
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
});

export default CustomTabs;
