import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <Text>
      {item.title}
    </Text>
  </TouchableOpacity>
)

export default ({ results, onPress }) => {
  return (
    <View style={styles.container}>
      {
        results.length > 0 &&
        results.map((item, index) => <Item item={item} key={index} onPress={onPress} />)
      }
    </View>
  )
}
