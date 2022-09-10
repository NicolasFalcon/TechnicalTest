import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export namespace CustomCard {
  export type CardComponentProps = {
    children: ReactNode;
    style?: ViewStyle;
  };
}
