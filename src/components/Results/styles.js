import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 70,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 40,
  },
  containerItem: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '100%'
  },
  text: {
    color: 'grey',
    fontWeight: 'bold'
  }
});
