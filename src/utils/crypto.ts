import CryptoJS from 'crypto-js';

const SECRET_KEY = "ShncUVv6rRB9WgjYe3GFT4EsD9lD4JfB";
const IV = "ShncUVv6rRB9WgjY";

/**
 * Derives the AES key identical to iOS CryptLib sha256:length:32
 */
const deriveKey = (key: string) => {
    const sha256 = CryptoJS.SHA256(key).toString(CryptoJS.enc.Hex);
    return sha256.substring(0, 32);
};

const aesKey = CryptoJS.enc.Utf8.parse(deriveKey(SECRET_KEY));
const aesIV = CryptoJS.enc.Utf8.parse(IV);

/**
 * Encrypts a string using AES-128/256 CBC with PKCS7 Padding
 */
export const encryptData = (data: string): string => {
    if (!data) return "";
    const encrypted = CryptoJS.AES.encrypt(data, aesKey, {
        iv: aesIV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
};

/**
 * Decrypts a string using AES-128/256 CBC with PKCS7 Padding
 */
export const decryptData = (data: string): string => {
    if (!data) return "";
    try {
        const decrypted = CryptoJS.AES.decrypt(data, aesKey, {
            iv: aesIV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Decryption Error:", error);
        return "";
    }
};

/**
 * Helper to convert a string to a dictionary (like JSON.parse)
 */
export const decryptToJSON = (data: string): any => {
    const decrypted = decryptData(data);
    try {
        return JSON.parse(decrypted);
    } catch {
        return decrypted;
    }
}
