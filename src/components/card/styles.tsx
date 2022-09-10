import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    zIndex: 1,
    backgroundColor: ThemeColors.white,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
