import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonGreen: {
    width: 80,
    height: 25,
    backgroundColor: ThemeColors.greenTaxdown,
  },

  buttonText: {
    fontWeight: '500',
    fontSize: 14,
  },
});
