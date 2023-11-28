import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../../config/colors/index';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import navigationStrings from '../../Constants/navigationStrings';


const LoginWithPhone = ({navigation}) => {

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
                     onPress={()=>navigation.navigate(navigationStrings.PRE_LOGIN)}

         
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
            marginTop: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              borderBottomColor: '#fff',
              borderBottomWidth: 1,
              paddingBottom: 5,
              alignItems: 'flex-end',
            }}>
            <View style={{width: '100%'}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  marginLeft: 55,
                  marginBottom: 5,
                }}>
                Country Code
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '95%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  {/* <CountryPicker
                    visible={false}
                    withCallingCode
                    withCallingCodeButton
                    withAlphaFilter
                    onSelect={data =>
                      this.setState({
                        countryCode: data.cca2,
                        calling: data.callingCode[0],
                        showPicker: false,
                      })
                    }
                    countryCode={countryCode}
                    withEmoji
                    withFlag
                    containerButtonStyle={{marginBottom: 5}}
                    withCountryNameButton
                    theme={{
                      // primaryColor: 'red',
                      // primaryColorVariant: '#eee',
                      backgroundColor: 'grey',
                      onBackgroundTextColor: 'white',
                      fontSize: 16,

                      // fontFamily: ,
                    }}
                  /> */}
                  <Image
                    source={require('../../assets/FlagCanada.png')}
                    style={{
                      width: 25,
                      height: 25,
                      marginBottom: 5,
                      marginRight: 20,
                    }}
                  />
                  <Text
                    style={{
                      color: 'white',
                      marginBottom: 5,
                      fontSize: 16,
                      // backgroundColor: 'red',
                      flex: 1,
                    }}>
                    Canada +
                  </Text>
                </View>
                <Image
                  source={require('../../assets/Icons/downArrow.png')}
                  style={{width: 15, height: 15, tintColor: 'white'}}
                />
              </View>
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
              source={require('../../assets/Icons/phone.png')}
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
                tintColor: '#fff',
              }}
            />
            <View style={{marginLeft: 15, flex: 1}}>
              <Text style={{color: '#fff', fontSize: 12}}> Phone Number</Text>
              <TextInput
                keyboardType="phone-pad"
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                }}
              
                placeholder="Phone Number"
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
            <Text style={{fontSize: 16}}>Signin</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }


export default LoginWithPhone;
