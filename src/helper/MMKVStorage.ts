import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

//HELPER FUNCTIONS TO BE USED THROUGHOUT APP
export const StorageMMKV = {
  removeItem: (key: string) => {
    try {
      if ('remove' in storage) {
        storage.remove(key);
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
