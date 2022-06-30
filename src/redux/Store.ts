import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

import RootReducer from './RootReducer';

const enhancers  : any= [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      predicate: () => __DEV__,
    }),
  ),
];

const enhancer :any = compose(...enhancers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthReducer','newAppInstallReducer','UserDetailsReducer' ],
};

const persistedReducer = persistReducer(persistConfig,RootReducer);

export const store = createStore(persistedReducer, {},enhancer);
export const persistor = persistStore(store);