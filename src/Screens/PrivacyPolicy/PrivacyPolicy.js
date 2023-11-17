import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../../config/colors/index';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const PrivacyPolicy = ()=> {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            backgroundColor: Colors.primary,
            paddingBottom: 20,
          }}>
          <TouchableOpacity
         
            style={{
              position: 'absolute',
              top: getStatusBarHeight() + 10,
              left: 25,
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: '#fff',
                resizeMode: 'stretch',
              }}
              source={require('../../assets/Icons/back.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              marginTop: getStatusBarHeight() + 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            PRIVACY POLICY
          </Text>
        </View>
        
     
          <View
            style={{
              zIndex: 99,
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              height: 1,
              width: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
          </View>
   
      </View>
    );
  
}



export default PrivacyPolicy;