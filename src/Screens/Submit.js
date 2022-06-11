//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  FlatList,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
// create a component
const Submit = ({navigation, route}) => {
  const data = route.params.data
  
  const [finalValue, setFinalValue] = useState();
  useEffect(() => {
    console.log('data',data)
   setFinalValue(route.params.data)
  }, []);

  const openURL = ()=> {
    if(finalValue){
      Linking.openURL(finalValue).catch(err =>
        console.error('An error occured', err),
      );
    }
    else{
      alert('url not found');
    }
  }
  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@qrCode');
  //     // console.log('json ',jsonValue)
  //     // return jsonValue != null ? setFinalValue(JSON.parse(jsonValue)) : null;
  //     if (jsonValue != null) {
  //       let data = JSON.parse(jsonValue);
  //       console.log('finalValuee', data);
  //       // data.push(JSON.parse(jsonValue));
  //       // console.log('async data', data);
  //       setFinalValue(data);
  //     } else {
  //       return null;
  //     }
  //     // return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.error('An error occured', e);
  //   }
  // };

  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('@qrCode');
  //   } catch (e) {
  //     // remove error
  //   }

  //   console.log('Done.');
  // };

  // const Submit = () => {
  //   if (result == '') {
  //     alert('url not found');
  //     return;
  //   } else {
  //     Linking.openURL(result).catch(err =>
  //       console.error('An error occured', err),
  //     );
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/result.png')}
        style={{width:'100%', height: '50%'}}
        resizeMode="contain"
      />
       <TouchableOpacity onPress={() => {openURL()}}>
       <Text style={{color:'#000',fontSize:16}}>{finalValue}</Text>
       </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          margin: 10,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            openURL();
          }}
          style={styles.button}>
          <Text style={styles.text}>Open Url</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {name: 'Home'},
                  {
                    name: 'Scan',
                  },
                ],
              }),
            );
          }}
          style={styles.button}>
          <Text style={styles.text}>Scan Again</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.button}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#e2ebf2',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E61A23',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

//make this component available to the app
export default Submit;
