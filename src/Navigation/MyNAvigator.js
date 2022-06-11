import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Scan from '../Screens/Scan';
import Submit from '../Screens/Submit';

const Stack = createNativeStackNavigator();
const MyNAvigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Scan" component={Scan}   options={{headerStyle:{backgroundColor:'#e2ebf2'}} }/>
      <Stack.Screen name="Submit" component={Submit}  options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default MyNAvigator;
