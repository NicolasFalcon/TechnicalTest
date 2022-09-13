import {ReactNode} from 'react';
import {TextStyle, ViewStyle, TouchableOpacityProps} from 'react-native';

export interface IButton extends TouchableOpacityProps {
  title?: string;
  styleText?: TextStyle;
  variant?: TVariantButton;
  style?: ViewStyle;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export type TVariantButton = 'solid' | 'outline' | 'default' | 'badgeOutline';
