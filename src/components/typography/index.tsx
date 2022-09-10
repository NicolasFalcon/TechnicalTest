import {Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ITypography} from '../../models/components/ITypography';

const Typography = ({
  style,
  variant = 'description1',
  fontFamily,
  ...props
}: ITypography) => {
  const fontFamilyStyle = fontFamily && {fontFamily};
  return (
    <Text style={{...styles[variant], ...fontFamilyStyle, ...style}} {...props}>
      {props.children}
    </Text>
  );
};

export default Typography;
