import {View, SafeAreaView} from 'react-native';
import React from 'react';

import {styles} from './style';
import {FormComponent, Header} from '../../components';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <FormComponent />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
