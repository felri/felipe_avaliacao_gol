import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from 'src/screens/Home'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from 'src/redux/reducers'

const store = createStore(
  reducers,
  // applyMiddleware(sagaMiddleware)
)

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Home />

      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
