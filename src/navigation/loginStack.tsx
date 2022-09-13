import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SignupScreen} from '../screens';
import {EScreens} from '../enums/EScreens';

export const LoginStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={EScreens.Login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={EScreens.Login} component={LoginScreen} />
      <Stack.Screen name={EScreens.Signup} component={SignupScreen} />
    </Stack.Navigator>
  );
};
