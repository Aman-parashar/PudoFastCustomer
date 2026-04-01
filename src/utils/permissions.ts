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
export const checkAndRequestCameraPermission = async (): Promise<PermissionResult> => {
  if (Platform.OS === 'ios') {
    const result = await request(PERMISSIONS.IOS.CAMERA);
    if (result === RESULTS.GRANTED) {
      return { status: PermissionStatus.GRANTED };
    } else if (result === RESULTS.BLOCKED) {
      showPermissionAlert(
        'Camera Permission Required',
        'Please enable camera access in Settings.',
        openSettings,
      );
      return { status: PermissionStatus.BLOCKED };
    }
    return { status: PermissionStatus.DENIED };
  }

  try {
    // ✅ Check BOTH Fine & Coarse
    const cameraGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (cameraGranted) {
      storage.set(LocalStorage.cameraPermission, 'granted');
      return { status: PermissionStatus.GRANTED };
    }

    const hasAskedBefore = storage.getString(LocalStorage.cameraPermission);
    if (hasAskedBefore === 'blocked') {
      showPermissionAlert(
        'Camera Permission Required',
        'Please enable camera access in Settings to use this feature.',
        openSettings,
      );
      return { status: PermissionStatus.BLOCKED };
    }
    if (hasAskedBefore === 'granted') {
      return { status: PermissionStatus.GRANTED };
    }

    // ✅ Request BOTH permissions together
    const results = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

    if (
      results === PermissionsAndroid.RESULTS.GRANTED
    ) {
      storage.set(LocalStorage.cameraPermission, 'granted');
      return { status: PermissionStatus.GRANTED };

    } else if (
      results === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
    ) {
      storage.set(LocalStorage.cameraPermission, 'blocked');
      showPermissionAlert(
        'Camera Permission Required',
        'Please enable camera access in Settings to use this feature.',
        openSettings,
      );
      return { status: PermissionStatus.BLOCKED };

    } else {
      storage.set(LocalStorage.cameraPermission, 'denied');
      return { status: PermissionStatus.DENIED };
    }

  } catch (err) {
    console.warn('Camera permission error:', err);
    return {
      status: PermissionStatus.UNAVAILABLE,
      message: 'Failed to check camera permission', // ✅ Fixed message too
    };
  }
}

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

export const checkAndRequestPhotoLibraryPermission = async (): Promise<PermissionResult> => {
  if (Platform.OS === 'ios') {
    const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (result === RESULTS.GRANTED) {
      return { status: PermissionStatus.GRANTED };
    } else if (result === RESULTS.BLOCKED) {
      showPermissionAlert(
        'Photo Library Permission Required',
        'Please enable gallery access in Settings.',
        openSettings,
      );
      return { status: PermissionStatus.BLOCKED };
    }
    return { status: PermissionStatus.DENIED };
  }

  try {
    const permission =
      Number(Platform.Version) >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    const granted = await PermissionsAndroid.check(permission);

    if (granted) {
      storage.set(LocalStorage.photoLibraryPermission, 'granted');
      return { status: PermissionStatus.GRANTED };
    }

    const hasAskedBefore = storage.getString(LocalStorage.photoLibraryPermission);
    if (hasAskedBefore === 'blocked') {
      showPermissionAlert(
        'Gallery Permission Required',
        'Please enable gallery access in Settings to use this feature.',
        openSettings,
      );
      return { status: PermissionStatus.BLOCKED };
    }

    const result = await PermissionsAndroid.request(permission);

    if (result === PermissionsAndroid.RESULTS.GRANTED) {
      storage.set(LocalStorage.photoLibraryPermission, 'granted');
      return { status: PermissionStatus.GRANTED };
    } else if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      storage.set(LocalStorage.photoLibraryPermission, 'blocked');
      showPermissionAlert(
        'Gallery Permission Required',
        'Please enable gallery access in Settings to use this feature.',
        openSettings,
      );
      return { status: PermissionStatus.BLOCKED };
    } else {
      storage.set(LocalStorage.photoLibraryPermission, 'denied');
      return { status: PermissionStatus.DENIED };
    }
  } catch (err) {
    console.warn('Photo Library permission error:', err);
    return {
      status: PermissionStatus.UNAVAILABLE,
      message: 'Failed to check gallery permission',
    };
  }
};

export const checkAndRequestAllPermissions = async (): Promise<void> => {
  // Check location
  const locationPermission = storage.getString(LocalStorage.locationPermission);
  if (!locationPermission) {
    await checkAndRequestLocationPermission();
  }

  // Check camera
  const cameraPermission = storage.getString(LocalStorage.cameraPermission);
  if (!cameraPermission) {
    await checkAndRequestCameraPermission();
  }

  // Check gallery
  const photoPermission = storage.getString(LocalStorage.photoLibraryPermission);
  if (!photoPermission) {
    await checkAndRequestPhotoLibraryPermission();
  }
};
