//ELEMENTS & LIBRARIES
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
//import { PersistGate } from 'redux-persist/es/integration/getStoredStateMigrateV4'
import  Loading  from './components/LoadingComponent';

//COMPONENTS
import Main from './components/MainComponent';

//Disable MetroBundler warning window
console.disableYellowBox = true;

const { persistor, store } = ConfigureStore();

export default function App() {
  return (
      <Provider store={store}>
          <PersistGate
              loading={<Loading />}
              persistor={persistor}>
              <Main />
          </PersistGate>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
