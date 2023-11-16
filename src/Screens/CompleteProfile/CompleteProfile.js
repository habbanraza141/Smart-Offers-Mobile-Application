import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CompleteProfile = () => {
    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        resizeMode="stretch"
        style={{
          flex: 1,
        }}>
        
        <View style={{width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              setTimeout(() => {
                this.props.navigation.goBack();
              }, 100);
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
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            COMPLETE PROFILE
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center', paddingHorizontal: 30}}>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginTop: 40,
            }}>
            <Image
              source={require('../../assets/pp.jpeg')
              }
              style={{
                width:  200,
                height:  200,
                borderRadius:  100,
                borderColor: Colors.darkOrange,
                borderWidth: 6,
              }}
            />
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                backgroundColor: Colors.darkOrange,
                borderWidth: 2,
                borderColor: '#fff',
                position: 'absolute',
                bottom: 5,
                right: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/Icons/camera.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 30,
            }}>
            <View
              style={{
                width: '47%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>First Name</Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '100%',
                }}
               
                placeholder="First Name"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View
              style={{
                width: '47%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>Last Name</Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '100%',
                }}
              
                placeholder="Last Name"
                placeholderTextColor={'#fff'}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              marginTop: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
            }}>
            <Text style={{color: '#fff', fontSize: 12}}>Date of Birth</Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({pickerModal: true});
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '85%',
                  paddingVertical: 10,
                }}>mndkscn
              </Text>
              <Image
                source={require('../../assets/Icons/calendar.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff',
                  position: 'absolute',
                  right: 0,
                  bottom: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}>
            <View
              style={{
                width: '47%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>City</Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '100%',
                }}
               
                placeholder="City"
                placeholderTextColor={'#fff'}
              />
            </View>
            <View
              style={{
                width: '47%',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
              }}>
              <Text style={{color: '#fff', fontSize: 12}}>
                Province / State
              </Text>
              <TextInput
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  height: 40,
                  width: '100%',
                }}
            
                placeholder="Province / State"
                placeholderTextColor={'#fff'}
              />
            </View>
          </View>
          <View style={{width: '100%', marginTop: 30}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
              }}>
              Gender
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between',
                width: '90%',
              }}>
           
            </View>
          </View>
          <View
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 10,
              marginTop: 20,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../assets/Icons/bell.png')}
                style={{
                  width: 20,
                  height: 25,
                  tintColor: Colors.yellow,
                  resizeMode: 'stretch',
                }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '700',
                  marginLeft: 10,
                }}>
                Notify me for new offer on:
              </Text>
            </View>
          
          </View>
          <TouchableOpacity
            onPress={this.updateProfile}
            style={{
              width: '100%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginVertical: 30,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 16}}>Done</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
export default CompleteProfile;