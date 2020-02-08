import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import SearchIcon from 'src/assets/icon/search.png'
import styles from './styles'

export default ({ goToSearch }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToSearch}>
        <Image
          style={styles.img}
          source={SearchIcon}
        />
      </TouchableOpacity>
    </View>
  )
}
