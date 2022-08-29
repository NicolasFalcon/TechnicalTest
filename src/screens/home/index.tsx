import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {UserList} from '../../components/userList';
import {Menu} from '../../components/menu';
import {Users} from '../../models/user';
import {useUsers} from '../../hooks/useUsers';

export const HomeScreen = () => {
  const {user1, user2, user3} = useUsers();
  const [user, setUser] = useState<Users.IUser[]>(user1);
  const onChangeUser = (userData: Users.IUser[]) => {
    setUser(userData);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Menu title={'Usuario 1'} onPress={() => onChangeUser(user1)} />
          <Menu title={'Usuario 2'} onPress={() => onChangeUser(user2)} />
          <Menu title={'Usuario 3'} onPress={() => onChangeUser(user3)} />
        </View>

        {user[0] && <Text style={styles.title}>Lista de usuarios</Text>}

        {!user[0] && (
          <Text style={styles.subtitle}>
            Seleccione un usuario para traer los datos
          </Text>
        )}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={user}
          renderItem={({item}) => <UserList user={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
