import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import FavoriteOn from 'src/assets/icon/favoriteOn.png'
import FavoriteOff from 'src/assets/icon/favoriteOff.png'
import styles from './styles'

export default ({ favorite, toogleFavorite }) => (
  <TouchableOpacity style={styles.container} onPress={toogleFavorite}>
    <Image
      style={styles.image}
      source={favorite ? FavoriteOn : FavoriteOff}
    />
  </TouchableOpacity>
)

