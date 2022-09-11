import React from 'react';
import {MainStack} from './src/navigation/mainStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import {toastConfig} from './src/utils/toastConfig';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <MainStack />
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
};

export default App;
