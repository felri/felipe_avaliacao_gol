import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 10,
    borderRadius: 5,
    paddingRight: 10,
    marginLeft: -20
  },
});
