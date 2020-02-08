import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles'

export default ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChange(text)}
        value={value}
      />
    </View>
  )
}
