import React from 'react';

import {HomeScreen} from '../screens/home';
import {MapScreen} from '../screens/map';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const MainStack = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{
          paddingTop,
        }}
        sceneContainerStyle={{
          backgroundColor: 'white',
        }}
        tabBarOptions={{
          showIcon: true,
          style: {
            shadowColor: 'transparent',
            elevation: 0,
          },
        }}>
        <Tab.Screen name="Users" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
