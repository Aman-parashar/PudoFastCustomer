import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import { storage } from '../helper/MMKVStorage';
import { LocalStorage } from './LocalStorage';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
export enum PermissionStatus {
  GRANTED = 'granted',
  DENIED = 'denied',
  BLOCKED = 'blocked',
  UNAVAILABLE = 'unavailable',
}

export interface PermissionResult {
  status: PermissionStatus;
  message?: string;
}

const showPermissionAlert = (
  title: string,
  message: string,
  onPress: () => void,
) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Open Settings', onPress },
    ],
    { cancelable: false },
  );
};

const openSettings = () => {
  Linking.openSettings();
};

export const checkAndRequestLocationPermission =
  async (): Promise<PermissionResult> => {
    if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (result === RESULTS.GRANTED) {
        return { status: PermissionStatus.GRANTED };
      } else if (result === RESULTS.BLOCKED) {
        showPermissionAlert(
          'Location Permission Required',
          'Please enable location access in Settings.',
          openSettings,
        );
        return { status: PermissionStatus.BLOCKED };
      }
      return { status: PermissionStatus.DENIED };
    }

    try {
      // ✅ Check BOTH Fine & Coarse
      const fineGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      const coarseGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );

      if (fineGranted && coarseGranted) {
        storage.set(LocalStorage.locationPermission, 'granted');
        return { status: PermissionStatus.GRANTED };
      }

      const hasAskedBefore = storage.getString(LocalStorage.locationPermission);
      if (hasAskedBefore === 'blocked') {
        showPermissionAlert(
          'Location Permission Required',
          'Please enable location access in Settings to use this feature.',
          openSettings,
        );
        return { status: PermissionStatus.BLOCKED };
      }
      if (hasAskedBefore === 'granted') {
        return { status: PermissionStatus.GRANTED };
      }

      // ✅ Request BOTH permissions together
      const results = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);

      const fine = results[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION];
      const coarse = results[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION];

      if (
        fine === PermissionsAndroid.RESULTS.GRANTED &&
        coarse === PermissionsAndroid.RESULTS.GRANTED
      ) {
        storage.set(LocalStorage.locationPermission, 'granted');
        return { status: PermissionStatus.GRANTED };

      } else if (
        fine === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ||
        coarse === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
      ) {
        storage.set(LocalStorage.locationPermission, 'blocked');
        showPermissionAlert(
          'Location Permission Required',
          'Please enable location access in Settings to use this feature.',
          openSettings,
        );
        return { status: PermissionStatus.BLOCKED };

      } else {
        storage.set(LocalStorage.locationPermission, 'denied');
        return { status: PermissionStatus.DENIED };
      }

    } catch (err) {
      console.warn('Location permission error:', err);
      return {
        status: PermissionStatus.UNAVAILABLE,
        message: 'Failed to check location permission', // ✅ Fixed message too
      };
    }
  };


export const checkAndRequestAllPermissions = async (): Promise<void> => {
  const locationPermission = storage.getString(LocalStorage.locationPermission);
  // const storagePermission = storage.getString(LocalStorage.storagePermission);

  if (!locationPermission) {
    const locationResult = await checkAndRequestLocationPermission();

    if (locationResult.status === PermissionStatus.BLOCKED) {
      showPermissionAlert(
        'Location Permission Required',
        'Please enable location access in Settings to use this feature.',
        openSettings,
      );
    }
  }

};
