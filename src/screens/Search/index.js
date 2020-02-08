import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import actions from 'src/redux/actions/types'
import Loading from 'src/components/Loading'
import InputSearch from 'src/components/InputSearch'
import Results from 'src/components/Results'

import styles from './styles'

export default ({ navigation }) => {
  const [search, setSearch] = React.useState('')

  const dispatch = useDispatch();
  const results = useSelector(state => state.citiesSearch.data);

  const onResultClick = item => {
    dispatch({ type: actions.FETCH_DATA_WEATHER, payload: item })
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

  return (
    <View style={styles.container}>
      <InputSearch value={search} onChange={handleSearchChange} />
      <Results results={results} onPress={onResultClick} />
    </View>
  )
}
