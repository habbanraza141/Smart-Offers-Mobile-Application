import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Colors from '../../config/colors/index'
import HeaderComponent from '../../components/HeaderComponent';
import navigationStrings from '../../Constants/navigationStrings';
import imagePath from '../../Constants/imagePath';

const EditProfile = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      resizeMode="stretch">

      <HeaderComponent
        hdrText={'EDIT PROFILE'}
        img={imagePath.icBack}
        onPress={() => navigation.goBack()} />
      <View style={{
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20
      }}>


        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <Image
            source={require('../../assets/pp.jpeg')
            }
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
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
            <Text style={{ color: '#fff', fontSize: 12 }}>First Name</Text>
            <TextInput
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                height: 40,
                width: '100%',
              }}

              placeholder={'First Name'}
              placeholderTextColor={'#fff'}
            />
          </View>
          <View
            style={{
              width: '47%',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
            }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>Last Name</Text>
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
          <Text style={{ color: '#fff', fontSize: 12 }}>Date of Birth</Text>
          <TouchableOpacity
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                height: 40,
                width: '85%',
                paddingVertical: 10,
              }}>
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
            <Text style={{ color: '#fff', fontSize: 12 }}>City</Text>
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
            <Text style={{ color: '#fff', fontSize: 12 }}>
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
        <View style={{ width: '100%', marginTop: 30 }}>
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          onPress={() => navigation.goBack()}
          style={{
            width: '100%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <Text style={{ fontSize: 16 }}>Done</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


export default EditProfile;