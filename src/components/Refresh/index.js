import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import RefreshIcon from 'src/assets/icon/refresh.png'
import styles from './styles'

export default ({ refresh }) => (
  <TouchableOpacity style={styles.container} onPress={refresh}>
    <Image
      style={styles.image}
      source={RefreshIcon}
    />
  </TouchableOpacity>
)

