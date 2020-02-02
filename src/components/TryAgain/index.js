import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'

export default ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.text}>Permitir localização</Text>
      </TouchableOpacity>
    </View>
  )
}
