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


const ForgetPassword = ({navigation}) => {
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
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {navigation.navigate(navigationStrings.LOGIN_WITH_EMAIL);
                
              }}
              style={{
                position: 'absolute',
                top: getStatusBarHeight() + 15,
                left: 25,
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: '#fff',
                }}
                source={require('../../assets/Icons/back.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                marginTop: getStatusBarHeight() + 15,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              FORGET PASSWORD
            </Text>
          </View>
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
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              paddingBottom: 5,
              alignItems: 'flex-end',
              marginTop: 25,
            }}>
            <Image
              source={require('../../assets/Icons/email.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
                tintColor: '#fff',
                marginBottom: 4,
              }}
            />
            <View style={{marginLeft: 15, width: '100%'}}>
              <Text style={{color: '#fff', fontSize: 12}}>Email Address</Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '85%',
                  // backgroundColor: 'red',
                }}
                placeholder="Email Address"
                placeholderTextColor={'#fff'}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={()=>navigation.navigate(navigationStrings.VERIFICATION)}
            style={{
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginTop: 40,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 16}}>Proceed to Verification</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }


export default ForgetPassword;
