//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#e2ebf2',  
        }}>
          {/* <Text style={{fontSize:26,color:'#E61A23',fontWeight:'bold'}}>
            Welcome In Scannie{'\n'}<Text style={{fontSize:16,textAlign:'center'}}>Scan Anything!</Text>
          </Text> */}
        <Image
          source={require('../images/logo.png')}
          style={{width: '80%', height: '15%', marginTop: 10}}
          resizeMode={'contain'}
        />
        <Image
          source={require('../images/QR.png')}
          style={{width: '100%', height: '50%'}}
          resizeMode={'contain'}
        />
        <TouchableOpacity
          style={{
            paddingHorizontal: 100,
            paddingVertical: 10,
            backgroundColor: '#E61A23',
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('Scan');
          }}>
          <Text style={styles.text}>Scan Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2ebf2',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

//make this component available to the app
export default Home;
