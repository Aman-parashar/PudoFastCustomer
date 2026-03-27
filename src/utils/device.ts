import DeviceInfo from 'react-native-device-info';

export const DeviceData = {
    device_token: DeviceInfo.getDeviceId(),
    version: DeviceInfo.getVersion()

}
