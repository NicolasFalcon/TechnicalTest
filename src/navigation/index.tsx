import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainStack} from './mainStack';

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
