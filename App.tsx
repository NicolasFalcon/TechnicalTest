import React from 'react';
import {MainStack} from './src/navigation/mainStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import {toastConfig} from './src/utils/toastConfig';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainStack />
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
};

export default App;
