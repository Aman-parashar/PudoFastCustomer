import { createMMKV } from 'react-native-mmkv';

export const storage = new createMMKV(undefined);

//HELPER FUNCTIONS TO BE USED THROUGHOUT APP
export const StorageMMKV = {
  removeItem: key => {
    try {
      storage.delete(key);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  },

  clearAll: () => {
    try {
      storage.clearAll();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },
};
