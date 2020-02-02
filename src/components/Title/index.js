import React from 'react';
import { Text, View } from 'react-native';
import { handleMeasurement } from 'src/utils/utils'
import styles from './styles'

export default ({ weatherInfo, measurement }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{!!weatherInfo.city && weatherInfo.city}</Text>
    <Text style={styles.subtitle}>
      {
        !!weatherInfo.arrayWeather[0] &&
        handleMeasurement({ measurement: measurement, number: weatherInfo.arrayWeather[0].the_temp }) + '°'
      }
    </Text>
  </View>
)

