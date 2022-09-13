import React from 'react';
import {IButton} from '../../models/components/IButton';
import Typography from '../typography';
import {styleContainer, styles, styleTextButton} from './styles';
import {TouchableOpacity, View} from 'react-native';

const CustomButton = ({
  title,
  variant = 'default',
  style,
  styleText,
  iconLeft,
  iconRight,
  ...props
}: IButton) => {
  return (
    <TouchableOpacity
      style={{
        ...styleContainer(variant),
        ...styles[variant],
        ...(props.disabled && styles.disabled),
        ...style,
      }}
      {...props}>
      {iconLeft && iconLeft}
      <View style={styles.textContainer}>
        <Typography style={{...styleTextButton(variant), ...styleText}}>
          {title}
        </Typography>
      </View>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
};

export default CustomButton;
