import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'

export default ({ goToSearch, askForLocation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToSearch} style={styles.btn}>
        <Text style={styles.text}>Buscar cidade</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={askForLocation} style={styles.btn}>
        <Text style={styles.text}>Usar localização</Text>
      </TouchableOpacity>
    </View>
  )
}
