import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../utils/colors';
import { TYPOGRAPHY } from '../../utils/fonts';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightComponent?: React.ReactNode;
  hideBack?: boolean;
}

export const Header = ({ title, onBack, rightComponent, hideBack }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {onBack && !hideBack && (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Image
              source={require('../../assets/images/back.png')}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        <Text style={[TYPOGRAPHY.SUBHEADER, styles.title]}>{title}</Text>
      </View>
      <View style={styles.right}>
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 4,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    textAlign: 'center',
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.TEXT,
  },
});
