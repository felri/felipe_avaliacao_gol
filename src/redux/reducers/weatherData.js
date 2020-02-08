import actions from 'src/redux/actions/types';

export default (state = { data: {}, error: false }, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actions.SET_DATA_WEATHER_SUCCEEDED:
      newState.data = action.payload
      newState.error = false
      return newState
    case actions.SET_DATA_WEATHER_FAILED:
      newState.error = true
      return newState
    case actions.CLEAN_DATA:
      newState.data = {}
      newState.error = false
      return newState
    default:
      return state
  }
}
