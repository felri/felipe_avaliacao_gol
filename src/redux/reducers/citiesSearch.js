import actions from 'src/redux/actions/types';

const citiesSearch = (state = { data: [] }, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actions.FETCH_CITIES_SUCCEEDED:
      newState.data = action.payload
      return newState
    case actions.CLEAN_CITIES:
      newState.data = []
      return newState
    default:
      return state
  }
}
export default citiesSearch