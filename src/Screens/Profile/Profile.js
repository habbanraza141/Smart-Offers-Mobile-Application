import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../../config';

const Profile = () => {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Header name={'PROFILE'} icon={'menu'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <TouchableOpacity
              
                style={{
                  position: 'absolute',
                  right: 30,
                  top: 10,
                }}>
                <Image
                  source={require('../../assets/Icons/edit.png')}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: '#606060',
                  }}
                />
              </TouchableOpacity>
              <Image
                source={
                  user_image ? {uri: url} : require('../../assets/pp.jpeg')
                }
                style={{
                  width: width * 0.35,
                  height: width * 0.35,
                  borderRadius: (width * 0.35) / 2,
                  borderWidth: 5,
                  borderColor: 'rgb(210,228,231)',
                }}
              />
            </View>
            <Text
              numberOfLines={1}
              style={{fontSize: 18, fontWeight: '600', marginTop: 15}}>
jbfksdjlbfsj            </Text>
            <Text numberOfLines={1} style={{fontSize: 16, marginTop: 10}}>
habban            </Text>
            <Text numberOfLines={1} style={{fontSize: 16}}>
male              15 yrs
              old
            </Text>
            <Text numberOfLines={1} style={{fontSize: 16}}>
karachi            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.primary,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}>
            <View style={{flex: 1, paddingVertical: 30, paddingHorizontal: 25}}>
              <TouchableOpacity
    
    
                style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Image
                  source={require('../../assets/Icons/changePassword.png')}
                  style={{width: 30, height: 30, tintColor: 'white'}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    marginLeft: 20,
                    fontSize: 18,
                  }}>
                  Change Password
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
      
      
                style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Image
                  source={require('../../assets/Icons/terms.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    marginLeft: 20,
                    fontSize: 18,
                  }}>
                  Terms & Conditions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
            
            
                style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Image
                  source={require('../../assets/Icons/privacy.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    marginLeft: 20,
                    fontSize: 18,
                  }}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity

style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <Image
                  source={require('../../assets/Icons/logout.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    marginLeft: 20,
                    fontSize: 18,
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  
}


export default Profile
