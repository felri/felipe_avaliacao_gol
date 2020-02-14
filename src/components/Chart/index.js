import React from 'react';
import { LineChart } from "react-native-chart-kit";
import moment from 'moment'
import { handleMeasurement } from 'src/utils/utils'
import { Dimensions, View } from 'react-native';
import styles from './styles'

export default ({ weatherInfo, measurement }) => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: weatherInfo.arrayWeather.map(f => moment(f.applicable_date).format('DD/MM')),
          datasets: [{ data: weatherInfo.arrayWeather.map(f => handleMeasurement({ measurement: measurement, number: f.the_temp })) }]
        }}
        width={Dimensions.get("window").width - 40} // from react-native
        height={220}
        yAxisSuffix={'° ' + measurement}
        withInnerLines={false}
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => measurement === 'C' ? `#98DFAF` : `#F48161`,
          labelColor: (opacity = 1) => `grey`,
          style: {
            borderRadius: 4
          },
          propsForDots: {
            r: "6",
            strokeWidth: "1",
            stroke: measurement === 'C' ? "#7DCFB6" : '#D85858'
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />

    </View>
  )
}
