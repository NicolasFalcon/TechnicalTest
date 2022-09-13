import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {EScreens} from '../enums/EScreens';
import {TabsNavigator} from './tabsStack';
import {ENavigations} from '../enums/ENavigations';
import {LoginStack} from './loginStack';

export const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={EScreens.Login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ENavigations.TabsNavigator}
        component={TabsNavigator}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ENavigations.LoginStack}
        component={LoginStack}
      />
    </Stack.Navigator>
  );
};
