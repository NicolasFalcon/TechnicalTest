import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {auth} from '../../../firebase';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error: any) => console.log(error));
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>HELLO WORLD</Text>

        <TouchableOpacity onPress={handleSignOut}>
          <Text style={styles.registerText}>logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
