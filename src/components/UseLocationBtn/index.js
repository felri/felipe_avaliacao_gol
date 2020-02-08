import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'

export default ({ androidSimulator, askForLocation }) => (
  !androidSimulator ?
    <TouchableOpacity onPress={askForLocation} style={styles.btn}>
      <Text style={styles.text}>Usar localização</Text>
    </TouchableOpacity> : null
)

