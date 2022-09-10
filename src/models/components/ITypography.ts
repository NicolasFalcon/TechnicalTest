import {TextProps, TextStyle} from 'react-native';

export interface ITypography extends TextProps {
  variant?: TVariantsTypography;
  fontFamily?: TFontFamilyTypography;
  style?: TextStyle;
}

export type TVariantsTypography =
  | 'h1'
  | 'h2'
  | 'title'
  | 'subtitle1'
  | 'subtitle2'
  | 'description1'
  | 'description2';

export type TFontFamilyTypography =
  | 'Avenir-Black'
  | 'Avenir-Roman'
  | 'Avenir-Book';
