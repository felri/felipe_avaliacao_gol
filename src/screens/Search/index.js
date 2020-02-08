import React from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import actions from 'src/redux/actions/types'
import InputSearch from 'src/components/InputSearch'
import Results from 'src/components/Results'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import styles from './styles'
import UseLocationBtn from 'src/components/UseLocationBtn';

export default ({ navigation }) => {
  const [androidSimulator, setAndroidSimulator] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const dispatch = useDispatch();
  const results = useSelector(state => state.citiesSearch.data);
  const favorite = useSelector(state => state.favorite.data);

  React.useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setAndroidSimulator(true)
    }
    if (favorite)
      onResultClick({ woeid: favorite })
  }, [])

  const onResultClick = item => {
    dispatch({ type: actions.FETCH_DATA_WEATHER, payload: item.woeid })
    dispatch({ type: actions.CLEAN_CITIES })
    setSearch('')
    navigation.navigate('Home')
  }

  const handleSearchChange = input => {
    setSearch(input)
    if (!input) dispatch({ type: actions.CLEAN_CITIES })
    else {
      let query = input.trim().split(' ').join('+')
      dispatch({ type: actions.FETCH_CITIES, payload: query })
    }
  }

  const askForLocation = async () => {
    await Location.requestPermissionsAsync()
    getLocationAsync()
  }

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({})
      dispatch({ type: actions.FETCH_DATA_WEATHER_LOCATION, payload: { lat: location.coords.latitude, long: location.coords.longitude } })
      dispatch({ type: actions.CLEAN_CITIES })
      setSearch('')
      navigation.navigate('Home')
    }
  };

  return (
    <View style={styles.container}>
      <UseLocationBtn askForLocation={askForLocation} androidSimulator={androidSimulator} />
      <InputSearch value={search} onChange={handleSearchChange} />
      <Results results={results} onPress={onResultClick} />
    </View>
  )
}
