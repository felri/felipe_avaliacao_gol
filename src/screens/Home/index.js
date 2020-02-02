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

import { getLocation, getWeatherInfo } from 'src/utils/api'

import styles from './styles'

export default () => {
  const [weatherInfo, setWeatherInfo] = React.useState({})
  const [location, setLocation] = React.useState({})
  const [error, setError] = React.useState('')
  const [denied, setDenied] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [measurement, setMeasurement] = React.useState('C')

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
      setLoading(false)
      setError('Permissão para acessar localização foi negada')
    } else {
      let location = await Location.getCurrentPositionAsync({})
      setDenied(false)
      setLocation(location)
      getWeatherData(location)
    }
  };

  const getWeatherData = async (location) => {
    const city = await getLocation({ lat: location.coords.latitude, long: location.coords.longitude })
    if (city.length > 0 && city[0].woeid) {
      const weatherInfo = await getWeatherInfo({ id: city[0].woeid })
      setWeatherInfo(weatherInfo)
      setLoading(false)
    }
  }

  const handleChangeMeasurement = (measurement) => {
    setMeasurement(measurement)
  }

  return loading ? <Loading /> :
    denied ?
      <TryAgain onPress={askForLocation} error={error} />
      :
      <View style={styles.container}>
        <Title weatherInfo={weatherInfo} measurement={measurement} />
        <Map location={location} />
        <Table weatherInfo={weatherInfo} measurement={measurement} />
        <Btn onPress={handleChangeMeasurement} measurement={measurement} />
      </View>
}
