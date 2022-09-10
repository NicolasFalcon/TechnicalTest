import {View, ViewProps, ColorValue, StyleSheet} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme';

export interface IDivider extends IStyle, ViewProps {}

export interface IStyle {
  color?: ColorValue;
  height?: number | string;
  width?: number | string;
}

const Divider = ({color, height, width, style, ...props}: IDivider) => {
  return (
    <View
      style={{...styles({color, height, width}).root, ...(style as Object)}}
      {...props}
    />
  );
};

export default Divider;

const styles = ({color, height, width}: IStyle) =>
  StyleSheet.create({
    root: {
      backgroundColor: color ? color : ThemeColors.lightGrey,
      height: height ? height : 1,
      width: width ? width : '100%',
    },
  });
