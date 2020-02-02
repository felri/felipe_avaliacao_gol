import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  },
  mapStyle: {
    width: Dimensions.get('window').width - 40,
    height: '80%'
  },
});
