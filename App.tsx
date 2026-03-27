import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { checkAndRequestAllPermissions } from './src/utils/permissions';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    const init = async () => {
      try {
        // Wait for the app to be ready
        BootSplash.hide({ fade: true });
        await Promise.all([
          checkAndRequestAllPermissions(),
          // Add any other initialization tasks here
        ]);
      } catch (error) {
        console.warn('Error during initialization:', error);
      }
    };

    init();
  }, []);
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <BottomSheetModalProvider>
            <AppNavigator />
          </BottomSheetModalProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
//App.tsx

export default App;
