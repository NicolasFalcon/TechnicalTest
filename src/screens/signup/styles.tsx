import {Dimensions, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme';
const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    marginTop: height * 0.3,
    width: '80%',
  },
  background: {
    flex: 1,
  },
  buttonContainer: {
    height: 100,
    justifyContent: 'center',
  },
  buttonGreen: {
    backgroundColor: ThemeColors.greenTaxdown,
  },
  buttonOutline: {
    borderColor: ThemeColors.blueTaxdown,
  },

  buttonText: {
    fontWeight: '700',
    fontSize: 14,
  },

  title: {
    marginTop: 30,
    color: ThemeColors.blueTaxdown,
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Avenir',
  },
});
