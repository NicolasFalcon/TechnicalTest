import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: ThemeColors.lightGrey,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  hint: {
    color: 'red',
    fontSize: 11,
  },
});
