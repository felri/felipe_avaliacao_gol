import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import actions from 'src/redux/actions/types'
import Loading from 'src/components/Loading'
import InputSearch from 'src/components/InputSearch'
import Results from 'src/components/Results'

import styles from './styles'

export default () => {
  const [loading, setLoading] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const dispatch = useDispatch();
  const results = useSelector(state => {
    return state.citiesSearch.data
  });


  const handleSearchChange = input => {
    setSearch(input)
    if (!input) dispatch({ type: actions.CLEAN_CITIES })
    else {
      let query = input.trim().split(' ').join('+')
      dispatch({ type: actions.FETCH_CITIES, payload: query })
    }
  }

  return loading ? <Loading /> :
    <View style={styles.container}>
      <InputSearch value={search} onChange={handleSearchChange} />
      <Results results={results} />
    </View>
}
