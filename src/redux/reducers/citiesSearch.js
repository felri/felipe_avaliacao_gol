import actions from 'src/redux/actions/types';

const citiesSearch = (state = [], action) => {
  const newState = { ...state }
  switch (action.type) {
    case actions.SET_CITIES:
      newState.data = action.payload
      return newState
    default:
      return state
  }
}
export default citiesSearch