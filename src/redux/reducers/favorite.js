import actions from 'src/redux/actions/types';

export default (state = { data: undefined, measurement: 'C' }, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actions.SET_FAVORITE:
      newState.data = action.payload
      return newState
    case actions.CLEAN_FAVORITE:
      newState.data = undefined
      return newState
    case actions.SET_MEASUREMENT:
      newState.measurement = action.payload
      return newState
    default:
      return state
  }
}
