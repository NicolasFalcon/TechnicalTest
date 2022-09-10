import React from 'react';
import {View} from 'react-native';
import {CustomCard} from '../../models/components/card';
import {styles} from './styles';

const CardComponent = ({
  children,
  style,
}: CustomCard.CardComponentProps): JSX.Element => {
  return <View style={{...styles.card, ...style}}>{children}</View>;
};

export default CardComponent;
