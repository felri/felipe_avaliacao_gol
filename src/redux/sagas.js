import { throttle, call, put, all, takeLatest } from 'redux-saga/effects'
import actions from 'src/redux/actions/types'
import api from 'src/utils/api'

function* handleInput(action) {
  try {
    const data = yield call(api.getCities, action.payload)
    yield put({ type: actions.FETCH_CITIES_SUCCEEDED, payload: data })
  } catch (error) {
    yield put({ type: actions.FETCH_CITIES_FAILED })
  }
}

function* watchInput() {
  yield throttle(1000, actions.FETCH_CITIES, handleInput)
}

function* fetchDataWeather(action) {
  yield put({ type: actions.CLEAN_DATA })
  try {
    const data = yield call(api.getWeatherInfo, action.payload.woeid)
    yield put({ type: actions.FETCH_DATA_WEATHER_SUCCEEDED, payload: data })
  } catch (error) {
    yield put({ type: actions.FETCH_DATA_WEATHER_FAILED })
  }
}

function* watchCity() {
  yield takeLatest(actions.FETCH_DATA_WEATHER, fetchDataWeather)
}

export default function* rootSaga() {
  yield all([
    watchInput(),
    watchCity()
  ])
}