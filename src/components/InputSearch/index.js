import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './styles'

export default ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Qual o clima de
      </Text>
      <TextInput
        placeholder="São Paulo..."
        style={styles.input}
        onChangeText={text => onChange(text)}
        value={value}
      />
    </View>
  )
}
