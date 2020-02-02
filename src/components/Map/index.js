import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles'

export default ({ location }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}
