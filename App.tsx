import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { checkAndRequestAllPermissions } from './src/utils/permissions';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import ToastConfig from './src/utils/ToastConfig';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const init = async () => {
      try {
        // Wait for the app to be ready
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
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <BottomSheetModalProvider>
            <AppNavigator />
            <Toast
              config={ToastConfig}
              position="top"
              visibilityTime={2000}
              swipeable={false}
            />
          </BottomSheetModalProvider>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};
//App.tsx

export default App;
