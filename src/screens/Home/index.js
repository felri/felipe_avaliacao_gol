import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import FlipCard from 'src/utils/react-native-flip-card'
import Btn from 'src/components/Btn'
import Map from 'src/components/Map'
import Chart from 'src/components/Chart'
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
  const [flip, setFlip] = React.useState(false)

  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weatherData.data);
  const favorite = useSelector(state => state.favorite.data);
  const measurement = useSelector(state => state.favorite.measurement);

  React.useEffect(() => {
    !loading && !flip &&
      setTimeout(() => {
        setFlip(!flip)
      }, 5000);
  }, [loading])

  React.useEffect(() => {
    weatherData.woeid && setLoading(false)
  }, [weatherData])

  const goToSearch = () => {
    navigation.pop()
  }

  const handleChangeMeasurement = (measurement) => {
    dispatch({ type: actions.SET_MEASUREMENT, payload: measurement })
  }

  const toogleFavorite = () => {
    favorite !== weatherData.woeid ? dispatch({ type: actions.SET_FAVORITE, payload: weatherData.woeid }) : dispatch({ type: actions.CLEAN_FAVORITE })
  }

  const refresh = () => {
    setFlip(false)
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
      <View style={{ flex: 3 }}>
        {
          weatherData.arrayWeather.length > 0 &&
          <TouchableOpacity onPress={() => setFlip(!flip)}>
            <FlipCard
              flipHorizontal
              friction={10}
              flipVertical={false}
              flip={flip}
              clickable
              useNativeDriver

            >
              <Table weatherInfo={weatherData} measurement={measurement} />
              <Chart weatherInfo={weatherData} measurement={measurement} />
            </FlipCard>
          </TouchableOpacity>
        }
      </View>
      <Btn onPress={handleChangeMeasurement} measurement={measurement} />
    </View>
}
