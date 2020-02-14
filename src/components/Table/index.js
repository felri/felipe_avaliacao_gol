import React from 'react';
import { Text, View, Image } from 'react-native';
import moment from 'moment'
import { handleMeasurement } from 'src/utils/utils'
import { BASE_URL, ICON } from 'src/utils/env'
import styles from './styles'

const Item = ({ item, measurement, last }) => {
  const URL_ICON = `${BASE_URL}${ICON}${item.weather_state_abbr}.png`
  return (
    <View style={[styles.containerItem, { borderBottomWidth: last ? 0 : 1 }]}>
      <Text style={styles.day}>
        {moment(item.applicable_date).format('DD/MM')}
      </Text>
      <Text style={styles.temp}>
        {handleMeasurement({ measurement: measurement, number: item.the_temp }) + '° ' + measurement}
      </Text>
      <Image
        style={styles.image}
        source={{ uri: URL_ICON }}
      />
    </View>
  )
}

export default ({ weatherInfo, measurement }) => (
  <View style={styles.container}>
    {
      weatherInfo.arrayWeather.map((item, index) => <Item key={index} item={item} measurement={measurement} last={index === weatherInfo.arrayWeather.length - 1} />)
    }
  </View>
)
