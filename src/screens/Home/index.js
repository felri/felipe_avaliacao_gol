import React from 'react';
import { Text, View } from 'react-native';

import Btn from 'src/components/Btn'
import Map from 'src/components/Map'
import Title from 'src/components/Title'
import FavoriteBtn from 'src/components/FavoriteBtn'
import Refresh from 'src/components/Refresh'
import Table from 'src/components/Table'
import Loading from 'src/components/Loading'
import SearchBtn from 'src/components/SearchBtn'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'src/redux/actions/types'
import styles from './styles'

export default ({ navigation }) => {
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
    favorite !== weatherData.woeid ? dispatch({ type: actions.SET_FAVORITE, payload: weatherData.woeid }) : dispatch({ type: actions.CLEAN_FAVORITE })
  }

  const refresh = () => {
    setLoading(true)
    let woeid = weatherData.woeid
    dispatch({ type: actions.CLEAN_DATA })
    dispatch({ type: actions.FETCH_DATA_WEATHER, payload: woeid })
  }

  return loading ? <Loading /> :
    <View style={styles.container}>
      <Refresh refresh={refresh} />
      <SearchBtn goToSearch={goToSearch} />
      <FavoriteBtn toogleFavorite={toogleFavorite} favorite={favorite === weatherData.woeid} />
      <Title weatherInfo={weatherData} measurement={measurement} />
      <Map location={weatherData.location} />
      <Table weatherInfo={weatherData} measurement={measurement} />
      <Btn onPress={handleChangeMeasurement} measurement={measurement} />
    </View>
}
