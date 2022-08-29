import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Avenir',
  },

  body: {
    fontSize: 15,
    fontWeight: '400',
    color: '#454545',
    fontFamily: 'Avenir',
    textAlign: 'left',
  },

  card: {
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    zIndex: 1,
    backgroundColor: 'white',
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

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 22,
    elevation: 3,
    backgroundColor: '#28559e',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#454545',
    fontFamily: 'Avenir',
  },
});
