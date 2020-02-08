import { throttle, call, put, all } from 'redux-saga/effects'
import actions from 'src/redux/actions/types'
import api from 'src/utils/api'

function* handleInput(action) {
  try {
    const data = yield call(api.getCities, action.payload)
    yield put({ type: actions.FETCH_CITIES_SUCCEEDED, payload: data })
  } catch (error) {
    yield put({ type: actions.FETCH_CITIES_FAILED, error })
  }
}

function* watchInput() {
  yield throttle(1000, actions.FETCH_CITIES, handleInput)
}

export default function* rootSaga() {
  yield all([
    watchInput(),
  ])
}