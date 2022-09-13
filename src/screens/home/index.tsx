import {SafeAreaView} from 'react-native';
import React from 'react';
import {FormComponent, Header} from '../../components';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <FormComponent />
    </SafeAreaView>
  );
};

export default HomeScreen;
