import {Alert, Linking, PermissionsAndroid, Platform} from 'react-native';
import {storage} from '../helper/MMKVStorage';
import {LocalStorage} from './LocalStorage';
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
      {text: 'Cancel', style: 'cancel'},
      {text: 'Open Settings', onPress},
    ],
    {cancelable: false},
  );
};

const openSettings = () => {
  Linking.openSettings();
};

export const checkAndRequestCameraPermission =
  async (): Promise<PermissionResult> => {
    if (Platform.OS === 'ios') {
      return {status: PermissionStatus.GRANTED};
    }

    try {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (granted) {
        storage.set(LocalStorage.cameraPermission, 'granted');
        return {status: PermissionStatus.GRANTED};
      }

      const hasAskedBefore = storage.getString(LocalStorage.cameraPermission);
      if (hasAskedBefore) {
        return {status: PermissionStatus.DENIED};
      }

      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera to take photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        storage.set(LocalStorage.cameraPermission, 'granted');
        return {status: PermissionStatus.GRANTED};
      } else if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        storage.set(LocalStorage.cameraPermission, 'blocked');
        showPermissionAlert(
          'Camera Permission Required',
          'Please enable camera access in Settings to use this feature.',
          openSettings,
        );
        return {status: PermissionStatus.BLOCKED};
      } else {
        storage.set(LocalStorage.cameraPermission, 'denied');
        return {status: PermissionStatus.DENIED};
      }
    } catch (err) {
      console.warn('Camera permission error:', err);
      return {
        status: PermissionStatus.UNAVAILABLE,
        message: 'Failed to check camera permission',
      };
    }
  };

export const checkAndRequestImagePickerPermission =
  async (): Promise<PermissionResult> => {
  
if (Platform.OS === 'ios') {
  const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

  if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
    return { status: PermissionStatus.GRANTED };
  }

  return { status: PermissionStatus.DENIED };
}

    try {
      const androidVersion =
        typeof Platform.Version === 'number'
          ? Platform.Version
          : parseInt(Platform.Version, 10);

      const permission =
        androidVersion >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const granted = await PermissionsAndroid.check(permission);

      if (granted) {
        storage.set(LocalStorage.storagePermission, 'granted');
        return {status: PermissionStatus.GRANTED};
      }

      const hasAskedBefore = storage.getString(LocalStorage.storagePermission);
      if (hasAskedBefore) {
        return {status: PermissionStatus.DENIED};
      }

      const result = await PermissionsAndroid.request(permission, {
        title: 'Storage Permission',
        message: 'App needs access to your storage to select photos.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        storage.set(LocalStorage.storagePermission, 'granted');
        return {status: PermissionStatus.GRANTED};
      } else if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        storage.set(LocalStorage.storagePermission, 'blocked');
        showPermissionAlert(
          'Storage Permission Required',
          'Please enable storage access in Settings to use this feature.',
          openSettings,
        );
        return {status: PermissionStatus.BLOCKED};
      } else {
        storage.set(LocalStorage.storagePermission, 'denied');
        return {status: PermissionStatus.DENIED};
      }
    } catch (err) {
      console.warn('Storage permission error:', err);
      return {
        status: PermissionStatus.UNAVAILABLE,
        message: 'Failed to check storage permission',
      };
    }
  };

export const checkAndRequestAllPermissions = async (): Promise<void> => {
  const cameraPermission = storage.getString(LocalStorage.cameraPermission);
  const storagePermission = storage.getString(LocalStorage.storagePermission);

  if (!cameraPermission) {
    const cameraResult = await checkAndRequestCameraPermission();

    if (cameraResult.status === PermissionStatus.BLOCKED) {
      showPermissionAlert(
        'Camera Permission Required',
        'Please enable camera access in Settings to use this feature.',
        openSettings,
      );
    }
  }

  if (!storagePermission) {
    const storageResult = await checkAndRequestImagePickerPermission();

    if (storageResult.status === PermissionStatus.BLOCKED) {
      showPermissionAlert(
        'Storage Permission Required',
        'Please enable storage access in Settings to use this feature.',
        openSettings,
      );
    }
  }
};
