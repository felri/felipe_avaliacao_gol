import React from 'react';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from 'src/redux/reducers'
import createSagaMiddleware from 'redux-saga'
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import rootSaga from 'src/redux/sagas'

import Home from 'src/screens/Home'
import Search from 'src/screens/Search'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorite']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

let persistor = persistStore(store)

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Search" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
