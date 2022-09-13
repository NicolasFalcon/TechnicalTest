import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme';
export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: ThemeColors.blueTaxdown,
  },
  email: {
    fontSize: 14,
    color: ThemeColors.lightBlue,
  },
  role: {
    fontSize: 14,
    color: ThemeColors.blueTaxdown,
  },
  age: {
    fontSize: 14,
    color: ThemeColors.blueTaxdown,
  },
  divider: {
    marginBottom: 10,
  },
});
