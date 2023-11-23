import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const NewPassword = () => {
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
              RESET PASSWORD
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
              source={require('../../assets/Icons/lock.png')}
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
              <Text style={{color: '#fff', fontSize: 12}}>New Password</Text>
              <TextInput
                secureTextEntry
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '85%',
                  // backgroundColor: 'red',
                }}
            
                
                placeholder="New Password"
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
                width: 30,
                height: 30,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
                tintColor: '#fff',
                marginBottom: 4,
              }}
            />
            <View style={{marginLeft: 15, width: '100%'}}>
              <Text style={{color: '#fff', fontSize: 12}}>
                Confirm New password
              </Text>
              <TextInput
                secureTextEntry
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '85%',
                  // backgroundColor: 'red',
                }}
            
                
                placeholder="Confirm New password"
                placeholderTextColor={'#fff'}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={this.resetPassword}
            style={{
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginTop: 40,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 16}}>Change</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }


export default NewPassword
