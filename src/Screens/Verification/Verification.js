import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import navigationStrings from '../../Constants/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../Constants/imagePath';

const Verification = ({navigation}) => {
   return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="stretch"
        style={{
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          
          <HeaderComponent 
          hdrText={'VERIFY YOUR ACCOUNT'}
          img={imagePath.icBack}
          onPress={()=>navigation.navigate(navigationStrings.FORGET_PASSWORD)}/>
          <Image
            resizeMode="contain"
            style={{
              width: '60%',
              height: 120,
              marginBottom: 40,
              marginTop: 30,
            }}
            source={require('../../assets/logo.png')}
          />
       
       
          
          

          <TouchableOpacity
            onPress={()=>navigation.navigate(navigationStrings.LOGIN_WITH_EMAIL)}
            style={{
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginTop: 40,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 16}}>Proceed to Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }


export default Verification;
