import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import navigationStrings from '../../Constants/navigationStrings';

const LoginWithEmail = ({ navigation }) => {
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
        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.PRE_LOGIN)}
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
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            SIGNIN
          </Text>
        </View>
      </View>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{
          // flex: 1,
          alignItems: 'center',
          // marginTop: 40,
          justifyContent: 'space-between',
        }}>
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
          <View style={{ marginLeft: 15, width: '100%' }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>Email Address</Text>
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
            source={require('../../assets/Icons/lock.png')}
            style={{
              width: 25,
              height: 25,
              resizeMode: 'contain',
              alignSelf: 'flex-end',
              justifyContent: 'center',
              tintColor: '#fff',
              marginBottom: 10,
            }}
          />
          <View style={{ marginLeft: 15, width: '100%' }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>Password</Text>
            <TextInput
              secureTextEntry
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                height: 40,
                width: '85%',
              }}
              placeholder="Password"
              placeholderTextColor={'#fff'}
            />
          </View>
        </View>
        <TouchableOpacity
                onPress={()=>navigation.navigate('HomeStack')}

          style={{
            width: '80%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            marginTop: 30,
            borderRadius: 10,
          }}>
          <Text style={{ fontSize: 16 }}>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate(navigationStrings.FORGET_PASSWORD)}>
          <Text

            style={{
              marginTop: 40,
              color: '#fff',
              textDecorationLine: 'underline',
              fontWeight: '700',
            }}>
            Forget Password
          </Text>
        </TouchableOpacity>

  
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.SIGN_UP)}
            style={{
              alignItems: 'center',
              marginBottom: 30,
              marginTop: 30,
              flexDirection: 'row',

            }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
            }}>Don't have an account?{' '}

              </Text>
              <Text

                style={{
                  textDecorationLine: 'underline',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                Signup
              </Text>

            </TouchableOpacity>

     
      </ScrollView>
    </ImageBackground>
  );
}



export default LoginWithEmail
