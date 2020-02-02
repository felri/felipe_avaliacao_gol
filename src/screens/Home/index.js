import React from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Btn from 'src/components/Btn'
import Map from 'src/components/Map'
import Title from 'src/components/Title'
import TryAgain from 'src/components/TryAgain'
import Table from 'src/components/Table'
import Loading from 'src/components/Loading'

import styles from './styles'

export default () => {
  const [location, setLocation] = React.useState({})
  const [error, setError] = React.useState('')
  const [denied, setDenied] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setError('Não é possível usar localização no emulador android')
    } else {
      getLocationAsync()
    }
  }, [])

  const askForLocation = async () => {
    await Location.requestPermissionsAsync()
    getLocationAsync()
  }

  const getLocationAsync = async () => {
    setLoading(true)
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setDenied(true)
      setError('Permissão para acessar localização foi negada')
    } else {
      let location = await Location.getCurrentPositionAsync({})
      setDenied(false)
      setLocation(location)
    }
    setLoading(false)
  };

  return loading ? <Loading /> :
    denied ?
      <TryAgain onPress={askForLocation} error={error} />
      :
      <View style={styles.container}>
        <Title />
        <Map location={location} />
        <Table />
        <Btn />
      </View>
}
