
import { BASE_URL, LOCATION, QUERY_LOCATION, QUERY_INPUT } from 'src/utils/env'

export const getLocation = async (payload) => {
  const response = await fetch(`${BASE_URL}${QUERY_LOCATION}${payload.lat},${payload.long}`, { method: 'GET' })
  const data = await response.json()
  return data
}

export const getCities = async input => {
  const response = await fetch(`${BASE_URL}${QUERY_INPUT}${input}`, { method: 'GET' })
  const data = await response.json()
  return data
}

export const getWeatherInfo = async id => {
  const response = await fetch(`${BASE_URL}${LOCATION}${id}`, { method: 'GET' })
  const data = await response.json()
  let location = data.latt_long.split(",")
  const weatherInfo = {
    city: data.title,
    arrayWeather: data.consolidated_weather,
    woeid: data.woeid,
    location: {
      lat: parseFloat(location[0]),
      long: parseFloat(location[1])
    }
  }
  return weatherInfo
}

export default {
  getCities,
  getLocation,
  getWeatherInfo
}