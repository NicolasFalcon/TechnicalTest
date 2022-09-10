import {StyleSheet} from 'react-native';
import {ToastColors} from '../theme';

export const styles = StyleSheet.create({
  customToast: {
    flex: 1,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: ToastColors.success,
    borderRadius: 15,
    padding: 16,
  },

  textContainer: {flexDirection: 'row', paddingLeft: 10, width: '90%'},
  text1: {
    color: ToastColors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
  text2: {
    color: ToastColors.text,
    fontWeight: '200',
    fontSize: 14,
  },

  success: {
    backgroundColor: ToastColors.success,
  },
  error: {
    backgroundColor: ToastColors.error,
  },
  info: {
    backgroundColor: ToastColors.info,
  },
  warning: {
    backgroundColor: ToastColors.warning,
  },
});
