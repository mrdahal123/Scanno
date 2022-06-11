//import liraries
import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
  Linking,
  ToastAndroid
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a component
const Scan = ({navigation}) => {
  
  // useEffect(() => {
  //   getData();
  // }, []);

  
  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@qrCode');
  //     // console.log('json ',jsonValue)
  //     // return jsonValue != null ? setFinalValue(JSON.parse(jsonValue)) : null;
  //     if (jsonValue != null) {
  //       let data = JSON.parse(jsonValue);
  //       setArrayData(data);
  //     } else {
  //       setArrayData([]);
  //     }
  //     // return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.error('An error occured', e);
  //   }
  // };

const [storedata,setStoreData] = useState()
  const onSuccess = e => {
    if (onSuccess == undefined || onSuccess == '') {
      alert('code not found');
    } else {
      setStoreData(e.data);
    }
    if(e){
      navigation.navigate('Submit',{
        data: e.data,
      })
      Linking.openURL(e.data).catch(err =>
        console.error('it is not a url to open',),
      );
    }
    else{
      alert('url not found');
    }
  };


  // const storeData = async (value) => {
  //   try {
  //     // const qrData = JSON.stringify(value);

  //     if(ArrayData.length > 0 ){
  //       let arrayDummy = JSON.parse(JSON.stringify(ArrayData));
  //       arrayDummy.push(value);
       
  //       let qrData = JSON.stringify(arrayDummy);
  //       console.log('qrData',qrData);
  //       await AsyncStorage.setItem('@qrCode', qrData);
  //     }else{
  //       let arrayDummy = [];
  //       arrayDummy.push(value);
  //       let qrData = JSON.stringify(arrayDummy);
  //       await AsyncStorage.setItem('@qrCode', qrData);
  //     }
  //   } catch (e) {
  //     console.error('An error occured', e)
  //   }
  // }


    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          laserColor={'blue'}
       
          cameraContainerStyle={{width:275,borderWidth:1,borderColor:'white',borderRadius:10,alignSelf:'center',}}
          cameraStyle={{width:'97%',borderWidth:1, borderRadius:50, alignSelf:'center',}}
          topContent={
              <Text style={{fontSize:18}}>Scan Your Qr Code</Text>
          }
          // bottomContent={
          //   <TouchableOpacity onPress={() => {openUrl()}}>
          //     <Text>{code}</Text>
          //   </TouchableOpacity>
          // }
        />
        {/* <TouchableOpacity
          style={{padding: 10, backgroundColor: 'orange', borderRadius: 10}}
          onPress={() => {
            navigation.navigate('Submit');
          }}>
          <Text>Next</Text>
        </TouchableOpacity> */}
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
});

//make this component available to the app
export default Scan;

// RnkstyDam6tBTC6gSyzc
