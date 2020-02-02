import React from 'react';
import { Text, View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'


import styles from './styles'

export default ({ measurement, onPress }) => {
  return (
    <View style={styles.container}>
      <Text>Celsius / Fahrenheit</Text>
      <ToggleSwitch
        isOn={measurement === 'F'}
        onColor="red"
        offColor="green"
        labelStyle={{ color: "black", fontWeight: "900" }}
        size="medium"
        onToggle={() => onPress(measurement === 'C' ? 'F' : 'C')}
      />
    </View>
  )
}
