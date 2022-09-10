import React from 'react';

import HomeScreen from '../screens/home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SignupScreen} from '../screens';
import {EScreens} from '../enums/EScreens';

export const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name={EScreens.Login} component={LoginScreen} />
        <Stack.Screen name={EScreens.Signup} component={SignupScreen} />
        <Stack.Screen name={EScreens.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
