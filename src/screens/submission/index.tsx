import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../redux/reducer';

const SubmissionScreen = () => {
  const submission = useSelector((state: ApplicationState) => state.submit);

  console.log('users form submissions screen', submission);

  return (
    <SafeAreaView>
      <View>
        <Text>index</Text>
      </View>
    </SafeAreaView>
  );
};

export default SubmissionScreen;
