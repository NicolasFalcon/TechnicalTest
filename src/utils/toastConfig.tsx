import {styles} from './toast.styles';
import React, {ReactNode} from 'react';
import Toast, {BaseToastProps} from 'react-native-toast-message';
import {Text, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ToastColors} from '../theme';

interface IBaseCustomToast extends BaseToastProps {
  containerStyles?: ViewStyle;
  icon?: ReactNode;
}
const BaseCustomToast = ({
  text1,
  text2,
  containerStyles,
  icon,
}: IBaseCustomToast) => {
  return (
    <View style={{...styles.customToast, ...containerStyles}}>
      {icon}
      <View style={styles.textContainer}>
        <Text style={styles.text1}>
          {text1} <Text style={styles.text2}>{text2}</Text>
        </Text>
      </View>
      <Icon name="close" size={15} color="black" onPress={() => Toast.hide()} />
    </View>
  );
};
export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseCustomToast
      {...props}
      containerStyles={styles.success}
      icon={
        <Icon name="check-circle" size={25} color={ToastColors.successIcon} />
      }
    />
  ),
  error: (props: BaseToastProps) => (
    <BaseCustomToast
      {...props}
      containerStyles={styles.error}
      icon={
        <Icon name="alert-circle" size={25} color={ToastColors.errorIcon} />
      }
    />
  ),
  info: (props: BaseToastProps) => (
    <BaseCustomToast
      {...props}
      containerStyles={styles.info}
      icon={<Icon name="information" size={25} color={ToastColors.infoIcon} />}
    />
  ),
};
