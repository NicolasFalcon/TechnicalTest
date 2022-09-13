import {Dimensions, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme';
const screenHeigt = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColors.white,
    height: screenHeigt,
  },
  userTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ThemeColors.blueTaxdown,
    marginLeft: 20,
    marginTop: 20,
  },
});
