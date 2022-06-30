import { View, Text } from 'react-native'
import React from 'react'
import Stack from './src/routes/stack/Stack'
import { Provider } from 'react-redux'
import {store,persistor} from './src/redux/Store' 
import { PersistGate } from 'redux-persist/integration/react'

// import { Settings } from 'react-native-fbsdk-next';


export default function App() {
// Settings.setAppID('552140496412761');
// Settings.initializeSDK();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <Stack/>
    </PersistGate>
    </Provider>
  )
}
