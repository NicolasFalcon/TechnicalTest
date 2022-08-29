import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

interface IProps {
  onPress: () => void;
  title: string;
  key?: string;
}

export const Menu = ({onPress, title}: IProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
