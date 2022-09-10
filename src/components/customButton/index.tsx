import React from 'react';
import {IButton} from '../../models/components/IButton';
import Typography from '../typography';
import {styleContainer, styles, styleTextButton} from './styles';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {ThemeColors} from '../../theme';

const CustomButton = ({
  title,
  variant = 'default',
  style,
  styleText,
  iconLeft,
  iconRight,
  loading,
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
        {loading && (
          <ActivityIndicator
            size={15}
            color={ThemeColors.white}
            style={styles.mr10}
          />
        )}
        <Typography style={{...styleTextButton(variant), ...styleText}}>
          {title}
        </Typography>
      </View>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
};

export default CustomButton;
