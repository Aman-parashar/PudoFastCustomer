import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <BottomSheetModalProvider>
          <AppNavigator />
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};
//App.tsx

export default App;
