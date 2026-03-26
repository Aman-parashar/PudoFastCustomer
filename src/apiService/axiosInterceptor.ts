import axios from 'axios';
import { Alert } from 'react-native';
import { storage } from '../helper/MMKVStorage';
import { encryptData, decryptToJSON } from '../utils/crypto';

export const BASE_URL = 'http://192.168.1.82:5502/api/v2/';
export const LOCKBOX_URL = 'https://api.igloodeveloper.co/v2';
const API_KEY_RAW = "PUDOFAST13012023";
const IGLOO_API_KEY = "JxluSj8jbxIQFXiCWj6O41.4WjPXIY7LKGdGCznRbxjpfxmZpvSZM5iFgGC0mu8";

const apiClient = axios.create({
    baseURL: BASE_URL,
});

// Request Interceptor
apiClient.interceptors.request.use(
    async config => {
        const isLockbox = config.url?.includes(LOCKBOX_URL);
        const token = storage.getString('token');

        if (isLockbox) {
            // IGloo / Lockbox API
            config.headers['X-IGLOOCOMPANY-APIKEY'] = IGLOO_API_KEY;
            config.headers['Content-Type'] = 'application/json';
        } else {
            // Main PudoFast API with Encryption
            config.headers['API-KEY'] = encryptData(API_KEY_RAW);
            config.headers['accept-language'] = encryptData('en');
            config.headers['content-type'] = 'text/plain';

            if (token) {
                config.headers.token = encryptData(token);
            }

            // Encrypt Request Body (only for non-GET and non-FormData)
            if (config.method !== 'get' && config.data && !(config.data instanceof FormData)) {
                const jsonString = JSON.stringify(config.data);
                config.data = encryptData(jsonString);
            }
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

// Response Interceptor
apiClient.interceptors.response.use(
    response => {
        const url = response.config.url;
        const isLockbox = url?.includes(LOCKBOX_URL);

        // 1. If it's pure data (not encrypted), return it
        if (typeof response.data !== 'string' || isLockbox) {
            return response.data;
        }

        // 2. Otherwise, decrypt the response body (matching iOS behavior)
        const decryptedData = decryptToJSON(response.data);
        return decryptedData;
    },
    error => {
        const status = error?.response?.status;
        const errorData = error?.response?.data;
        
        let message = error.message;

        // Decrypt error message if encrypted
        if (typeof errorData === 'string') {
            const dec = decryptToJSON(errorData);
            message = dec?.message || message;
        } else {
            message = errorData?.message || message;
        }

        if (status === 401) {
            Alert.alert('Session expired', 'Please log in again.');
            storage.delete('token');
        }

        return Promise.reject({
            status,
            message,
            errors: (typeof errorData === 'string') ? decryptToJSON(errorData)?.errors : errorData?.errors
        });
    },
);

export default apiClient;
