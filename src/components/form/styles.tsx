import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  GreenButton: {
    backgroundColor: ThemeColors.greenTaxdown,
  },

  taxesTitle: {
    fontWeight: '700',
    fontSize: 32,
    fontFamily: 'Avenir',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 30,
  },
  card: {
    marginTop: '20%',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
