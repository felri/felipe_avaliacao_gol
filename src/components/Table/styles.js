import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    paddingLeft: 10,
    borderRadius: 5,
    paddingRight: 10
  },
  image: {
    width: 30,
    height: 30,
    marginTop: -5
  },
  containerItem: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
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
