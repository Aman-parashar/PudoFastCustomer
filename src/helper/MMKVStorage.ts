import { createMMKV } from 'react-native-mmkv';

export const storage = new createMMKV(undefined);

//HELPER FUNCTIONS TO BE USED THROUGHOUT APP
export const StorageMMKV = {
  removeItem: key => {
    try {
      if (typeof storage.delete === 'function') {
        storage.delete(key);
      } else if (typeof (storage as any).removeItem === 'function') {
        (storage as any).removeItem(key);
      }
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
