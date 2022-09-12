import {View, SafeAreaView} from 'react-native';
import React from 'react';

import {styles} from './style';
import {CustomButton, FormComponent, Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {EScreens} from '../../enums/EScreens';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <FormComponent />

        <CustomButton
          variant="solid"
          title="Navigate"
          onPress={() => navigation.navigate(EScreens.Submission)}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
