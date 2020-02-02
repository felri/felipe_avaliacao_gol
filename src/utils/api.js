
import { BASE_URL, LOCATION, QUERY_LOCATION } from 'src/utils/env'

export const getLocation = async ({ lat, long }) => {

  console.log(BASE_URL)

  fetch(`${BASE_URL}${QUERY_LOCATION}${lat},${long}`, { method: 'GET' })
    .then(response => response.json())
    .then(function (json) {
      console.log(json)
    },
      error => {
        return error;
      }
    )
}