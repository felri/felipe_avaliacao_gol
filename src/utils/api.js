
import { BASE_URL, LOCATION, QUERY_LOCATION } from 'src/utils/env'

export const getLocation = async ({ lat, long }) => {
  const response = await fetch(`${BASE_URL}${QUERY_LOCATION}${lat},${long}`, { method: 'GET' })
  const data = await response.json()
  return data
}

export const getWeatherInfo = async ({ id }) => {
  const response = await fetch(`${BASE_URL}${LOCATION}${id}`, { method: 'GET' })
  const data = await response.json()
  const weatherInfo = {
    city: data.title,
    arrayWeather: data.consolidated_weather
  }
  return weatherInfo
}

