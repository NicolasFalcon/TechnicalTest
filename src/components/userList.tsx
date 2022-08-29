import {View, Text} from 'react-native';
import React from 'react';
import {Users} from '../models/user';
import {styles} from './style';

interface IProps {
  user: Users.IUser;
}

export const UserList = ({user}: IProps) => {
  const {title, body} = user;
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
};
