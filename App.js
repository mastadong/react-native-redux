//ELEMENTS & LIBRARIES
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//COMPONENTS
import Main from './components/MainComponent';

//Disable MetroBundler warning window
console.disableYellowBox = true;


const store = ConfigureStore();

//MAIN
export default function App() {
  return (
    <Provider store={store}>
      <Main />
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
