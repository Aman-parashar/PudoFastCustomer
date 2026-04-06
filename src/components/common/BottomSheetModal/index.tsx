import React, { ReactNode, useCallback, useMemo } from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetScrollView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { View, ViewStyle } from 'react-native';
import { StyleProp } from 'react-native';
import { dimensions } from '../../../utils/constant';

const BottomSheetModalComponent = ({
  height,
  bottomSheetModalRef,
  children,
  stickyHeader,
  style,
  close,
  containerStyle,
  onBackdropPress,
  snapPointsProp,
  showHeader = undefined,

  backgroundStyle,
}: {
  height?: string;
  bottomSheetModalRef: any;
  children: ReactNode;
  stickyHeader?: any;
  style?: StyleProp<ViewStyle>;
  close?: () => void;
  onBackdropPress?: () => void;
  snapPointsProp?: string[];
  showHeader?: undefined | null;
  hideBottomHeight?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundStyle?: StyleProp<ViewStyle>;
}) => {
  const snapPoints = useMemo(
    () =>
      snapPointsProp ?? [
        '30%',
        '40%',
        '50%',
        '60%',
        '65%',
        '70%',
        '80%',
        '90%',
      ],
    [snapPointsProp],
  );
  const getSnapIndex = useCallback(() => {
    const snapPercents = (
      snapPointsProp ?? ['60%', '65%', '70%', '80%', '90%']
    ).map(p => parseFloat(p.replace('%', '')));

    let percent: number | undefined;

    if (typeof height === 'string' && height.endsWith('%')) {
      percent = parseFloat(height);
    } else if (typeof height === 'number') {
      percent = (height / dimensions.height) * 100;
    }

    if (percent === undefined || isNaN(percent)) return 2; // default to '50%'

    // Find closest snap point index
    const closest = snapPercents.reduce((prev, curr) =>
      Math.abs(curr - percent!) < Math.abs(prev - percent!) ? curr : prev,
    );

    return snapPercents.indexOf(closest);
  }, [height]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        close?.();
      }
    },
    [close],
  );

  const animationConfigs = useMemo(
    () => ({
      duration: 400,
      Easing: (value: number) => value,
    }),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={getSnapIndex()}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      animationConfigs={animationConfigs}
      handleComponent={showHeader}
      style={[{}, style]}
      backgroundStyle={backgroundStyle}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={1}
          opacity={0.7} // Set the desired opacity for the dull effect
          onPress={onBackdropPress}
        />
      )}
    >
      <BottomSheetView>{stickyHeader && stickyHeader()}</BottomSheetView>
      <BottomSheetScrollView
        keyboardShouldPersistTaps={true}
        contentContainerStyle={[
          {
            flexGrow: 1,
          },
          containerStyle,
        ]}
      >
        {children}
      </BottomSheetScrollView>
      <View style={{ height: 10 }} />
    </BottomSheetModal>
  );
};

export default BottomSheetModalComponent;
