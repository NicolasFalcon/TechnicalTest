import {View} from 'react-native';
import LogoIcon from './../../assets/logo.svg';
import React from 'react';
import {styles} from './styles';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <LogoIcon width={130} height={20} />
    </View>
  );
};

export default Logo;
