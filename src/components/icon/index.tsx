import {View} from 'react-native';
import Icon from './../../assets/icon.svg';
import React from 'react';
import {styles} from './styles';

const IconLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Icon width={100} height={30} />
    </View>
  );
};

export default IconLogo;
