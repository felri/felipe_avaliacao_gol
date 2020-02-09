import { put, call } from 'redux-saga/effects'
import {
  handleInput,
  fetchDataWeather,
  handleLocation
} from 'src/redux/sagas'
import actions from 'src/redux/actions/types'
import api from 'src/utils/api'

describe('Cities fetching flow', () => {
  it('Fetches cities successfully', () => {
    const generator = handleInput({ payload: 'London' });

    expect(generator.next().value)
      .toEqual(call(api.getCities, 'London'));
    expect(generator.next().value)
      .toEqual(put(
        { type: actions.FETCH_CITIES_SUCCEEDED, payload: undefined }
      ));
  });

  it('Fetches cities failed', () => {
    const generator = handleInput({ payload: 'London' });

    expect(generator.next().value)
      .toEqual(call(api.getCities, 'London'));
    expect(generator.throw('error').value)
      .toEqual(put(
        { type: actions.FETCH_CITIES_FAILED }
      ));
  });
});

describe('WeatherData fetching flow', () => {
  it('Fetches weatherData successfully', () => {
    const generator = fetchDataWeather({ payload: 44418 });
    expect(generator.next().value)
      .toEqual(put(
        { type: actions.CLEAN_DATA }
      ));
    expect(generator.next().value)
      .toEqual(call(api.getWeatherInfo, 44418));
    expect(generator.next().value)
      .toEqual(put(
        { type: actions.FETCH_DATA_WEATHER_SUCCEEDED, payload: undefined }
      ));
  });

  it('Fetches weatherData failed', () => {
    const generator = fetchDataWeather({ payload: '44418' });
    expect(generator.next().value)
      .toEqual(put(
        { type: actions.CLEAN_DATA }
      ));
    expect(generator.next().value)
      .toEqual(call(api.getWeatherInfo, '44418'));
    expect(generator.throw('error').value)
      .toEqual(put(
        { type: actions.FETCH_DATA_WEATHER_FAILED }
      ));
  });
});

describe('Location fetching flow', () => {
  it('Fetches location successfully', () => {
    const generator = handleLocation({
      payload: {
        lat: 51.506321,
        long: -0.12714
      }
    });
    expect(generator.next().value)
      .toEqual(put(
        { type: actions.CLEAN_DATA }
      ));
    expect(generator.next().value)
      .toEqual(call(api.getLocation, {
        lat: 51.506321,
        long: -0.12714
      }));
  });
});