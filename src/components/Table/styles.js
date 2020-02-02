import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    paddingLeft: 10,
    borderRadius: 5,
    paddingRight: 10
  },
  containerItem: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 10,
    flex: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
  day: {
    fontWeight: '700',
    fontSize: 18,
    color: 'grey'
  },
  temp: {
    fontSize: 18,
    color: 'grey'

  }
});
