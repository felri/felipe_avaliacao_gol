import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles'

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.containerItem}>
    <Text style={styles.text}>
      {item.title}
    </Text>
  </TouchableOpacity>
)

export default ({ results, onPress }) => {
  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
        {
          results.length > 0 &&
          results.map((item, index) => <Item item={item} key={index} onPress={onPress} />)
        }
      </View>
    </ScrollView>
  )
}
