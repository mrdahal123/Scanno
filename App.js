// In App.js in a new project

import React , {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyNAvigator from './src/Navigation/MyNAvigator';
import SplashScreen from 'react-native-splash-screen'

function App() {
  // useEffect(() => {SplashScreen.hide();
  // }, [])
  
  return (
    <NavigationContainer>
      <MyNAvigator />
    </NavigationContainer>
  );
}

export default App;
