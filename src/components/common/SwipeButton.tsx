import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import { COLORS } from '../../utils/colors';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BUTTON_WIDTH = SCREEN_WIDTH - 32;
const BUTTON_HEIGHT = 56;
const HANDLE_SIZE = 48;

// slightly reduced to prevent edge overflow
const MAX_SWIPE = BUTTON_WIDTH - HANDLE_SIZE - 10;

interface SwipeButtonProps {
  onSwipeComplete: () => void;
  title?: string;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({
  onSwipeComplete,
  title = 'Start Pickup',
}) => {
  const pan = useRef(new Animated.Value(0)).current;
  const [isCompleted, setIsCompleted] = useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !isCompleted,
      onMoveShouldSetPanResponder: () => !isCompleted,

      // ✅ store previous position
      onPanResponderGrant: () => {
        pan.setOffset((pan as any)._value);
        pan.setValue(0);
      },

      // ✅ clamp movement
      onPanResponderMove: (_, gestureState) => {
        let newX = Math.max(0, Math.min(gestureState.dx, MAX_SWIPE));
        pan.setValue(newX);
      },

      // ✅ handle release
      onPanResponderRelease: () => {
        pan.flattenOffset();

        const currentValue = (pan as any)._value;

        if (currentValue >= MAX_SWIPE * 0.8) {
          Animated.spring(pan, {
            toValue: MAX_SWIPE,
            useNativeDriver: false,
            tension: 40,
          }).start(() => {
            setIsCompleted(true);
            onSwipeComplete();
          });
        } else {
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.handle,
          {
            transform: [
              {
                // ✅ hard clamp at render level (bulletproof)
                translateX: pan.interpolate({
                  inputRange: [0, MAX_SWIPE],
                  outputRange: [0, MAX_SWIPE],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.handleText}>≫</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: BUTTON_HEIGHT,
    backgroundColor: '#FFFFFF',
    borderRadius: BUTTON_HEIGHT / 2,
    borderWidth: 1.5,
    borderColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
    justifyContent: 'center',
    padding: 2,
    position: 'relative',
    marginVertical: 10,

    // ✅ ensures nothing visually overflows
    overflow: 'hidden',
  },
  track: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#CCCCCC',
    fontWeight: '600',
  },
  handle: {
    width: HANDLE_SIZE,
    height: HANDLE_SIZE,
    borderRadius: HANDLE_SIZE / 2,
    backgroundColor: COLORS.BUTTON_GRADIENT_PURPLE_START,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  handleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SwipeButton;
