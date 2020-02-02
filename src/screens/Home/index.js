import React from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import styles from './styles'

export default () => {
  const [location, setLocation] = React.useState({})
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setError('Não é possível usar localização no emulador android')
    } else {
      getLocationAsync()
    }
  }, [])

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setError('Permissão para acessar localização foi negada')
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location)
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}
