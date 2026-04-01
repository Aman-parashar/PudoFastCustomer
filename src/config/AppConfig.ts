/**
 * Application configuration and constants
 */
import Config from "react-native-config";

const IS_PRODUCTION = false; // Toggle for Production vs Dev

const DEV_URL = 'http://192.168.1.82:5502/api/v2/';
const PROD_URL = 'https://pudofast.com/pudofast/api/v2/'; // Verified from SettingsViewModel

export const BASE_URL = IS_PRODUCTION ? PROD_URL : DEV_URL;

export const LOCKBOX_URL = 'https://api.igloodeveloper.co/v2';

export const API_KEY_RAW = "PUDOFAST13012023";
export const IGLOO_API_KEY = "JxluSj8jbxIQFXiCWj6O41.4WjPXIY7LKGdGCznRbxjpfxmZpvSZM5iFgGC0mu8";

// AWS S3 Configuration
// NOTE: Verify these with your AWS IAM console if you get "InvalidAccessKeyId"

console.log(Config.ACCESS_KEY, Config.SECRET_KEY, "wdcnjkw")
export const AWS_CONFIG = {
    ACCESS_KEY: Config.ACCESS_KEY?.trim(), // Check if this should be changed
    SECRET_KEY: Config.SECRET_KEY?.trim(),
    REGION: 'us-east-1',
    BUCKET_NAME: 'pudo-app',
};
