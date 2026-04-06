import DeviceInfo from 'react-native-device-info';

export const DeviceData = {
    device_token: DeviceInfo.getDeviceId(),
    version: DeviceInfo.getVersion()

}

export const scheduleTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}