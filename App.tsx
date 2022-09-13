import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import {toastConfig} from './src/utils/toastConfig';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={'dark-content'} />
        <Navigation />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
