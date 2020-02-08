import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles'

const Item = ({ item }) => (
  <View>
    <Text>
      {item.title}
    </Text>
  </View>
)

export default ({ results, onClick }) => {
  return (
    <View style={styles.container}>
      {
        results.length > 0 &&
        results.map((item, index) => <Item item={item} key={index} />)
      }
    </View>
  )
}
