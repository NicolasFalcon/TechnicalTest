import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import CardComponent from '../card';
import {User} from '../../models/User';

interface IProps {
  user: User.IValues;
}

const UsersCardComponent = ({user}: IProps) => {
  return (
    <View style={styles.container}>
      <CardComponent>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/avatar.png')}
            style={{marginRight: 10}}
          />
          <View>
            <Text style={styles.name}>
              {' '}
              {user?.name} {user?.surname}
            </Text>
            <Text style={styles.role}>{user?.role}</Text>
            <Text style={styles.email}>{user?.email}</Text>
            <Text style={styles.age}>Age: {user?.age}</Text>
          </View>
        </View>
      </CardComponent>
    </View>
  );
};

export default UsersCardComponent;
