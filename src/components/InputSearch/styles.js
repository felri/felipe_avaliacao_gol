import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 40,
  },
  text: {
    color: 'grey',
    marginBottom: 10

  },
  input: {
    borderRadius: 5,
    padding: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%'
  }
});
