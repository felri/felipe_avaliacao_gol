import React from 'react';
import { Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Btn from 'src/components/Btn'
import Map from 'src/components/Map'
import Title from 'src/components/Title'
import FavoriteBtn from 'src/components/FavoriteBtn'
import TryAgain from 'src/components/TryAgain'
import Table from 'src/components/Table'
import Loading from 'src/components/Loading'
import SearchBtn from 'src/components/SearchBtn'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'src/redux/actions/types'
import styles from './styles'

export default ({ navigation }) => {
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [measurement, setMeasurement] = React.useState('C')

  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weatherData.data);
  const favorite = useSelector(state => state.favorite.data);

  React.useEffect(() => {
    weatherData.woeid && setLoading(false)
  }, [weatherData])

  const goToSearch = () => {
    navigation.pop()
  }

  const handleChangeMeasurement = (measurement) => {
    setMeasurement(measurement)
  }

  const toogleFavorite = () => {
    console.log(weatherData.woeid)
    console.log(favorite)
    favorite !== weatherData.woeid ? dispatch({ type: actions.SET_FAVORITE, payload: weatherData.woeid }) : dispatch({ type: actions.CLEAN_FAVORITE })
  }

  // const askForLocation = async () => {
  //   await Location.requestPermissionsAsync()
  //   getLocationAsync()
  // }

  // const getLocationAsync = async () => {
  //   setLoading(true)
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     setDenied(true)
  //     setLoading(false)
  //     setError('Permissão para acessar localização foi negada')
  //   } else {
  //     let location = await Location.getCurrentPositionAsync({})
  //     setDenied(false)
  //     setLocation(location)
  //     getWeatherData(location)
  //   }
  // };

  // const getWeatherData = async (location) => {
  //   const city = await getLocation({ lat: location.coords.latitude, long: location.coords.longitude })
  //   if (city.length > 0 && city[0].woeid) {
  //     const weatherInfo = await getWeatherInfo({ id: city[0].woeid })
  //     setWeatherInfo(weatherInfo)
  //     setLoading(false)
  //   }
  // }

  return loading ? <Loading /> :
    <View style={styles.container}>
      <FavoriteBtn toogleFavorite={toogleFavorite} favorite={favorite === weatherData.woeid} />
      <Title weatherInfo={weatherData} measurement={measurement} />
      {/* <SearchBtn askForLocation={askForLocation} goToSearch={goToSearch} /> */}
      <SearchBtn goToSearch={goToSearch} />
      <Map location={weatherData.location} />
      <Table weatherInfo={weatherData} measurement={measurement} />
      <Btn onPress={handleChangeMeasurement} measurement={measurement} />
    </View>
}
