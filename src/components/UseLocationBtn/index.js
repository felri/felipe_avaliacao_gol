import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import PinPng from 'src/assets/icon/pin.png'
import styles from './styles'

export default ({ androidSimulator, askForLocation }) => (
  !androidSimulator ?
    <TouchableOpacity onPress={askForLocation} style={styles.container}>
      <Image
        style={styles.img}
        source={PinPng}
      />
    </TouchableOpacity>
    : null
)

