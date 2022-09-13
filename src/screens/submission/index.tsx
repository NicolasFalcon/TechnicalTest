import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../redux/reducer';
import {UsersCardComponent} from '../../components';
import {styles} from './style';

const SubmissionScreen = () => {
  const users = useSelector((state: ApplicationState) => state.submit);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.userTitle}>User submission</Text>
        <FlatList
          data={users.user}
          renderItem={({item}: any) => <UsersCardComponent user={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubmissionScreen;
