import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Colors from '../../config/colors/index';
import HeaderComponent from '../../components/HeaderComponent';
import navigationStrings from '../../Constants/navigationStrings';
import imagePath from '../../Constants/imagePath';

const USER = [
  {
    userName: 'Charlize Layne',
    userEmail: 'charlize@domain.com',
    gender: 'Male',
    age: 26,
    city: 'New York, NY',
    userImage: require('../../assets/user.png')
  }
]

const userDetails = ({ item }) => {
  return (

    <View style={{ width: '100%',  justifyContent: 'center', marginTop: 90, height: '50%' }}>
      <Image
        source={item.userImage}
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          borderWidth: 5,
          borderColor: 'rgb(210,228,231)',
        }}
      />
      <Text
        style={{ fontSize: 24, fontWeight: '600', marginTop: 15, color: 'black', marginBottom: 12 }}> {item.userName} </Text>
      <Text style={{ fontSize: 16 }} > {item.userEmail} </Text>
      <Text style={{ fontSize: 16 }} > {item.gender} {item.age} years old </Text>
      <Text style={{ fontSize: 16 }} > {item.city}  </Text>


    </View>

  )
}
const ProfileScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}>


      <HeaderComponent hdrText={'PROFILE'}                 img={imagePath.menu} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingRight: 30, paddingLeft: 30}}>
        <View style={{height: 30, width: 30, }}></View>
        <View>
        <FlatList
          data={USER}
          renderItem={userDetails}
        />
        </View>
        <TouchableOpacity 
        style={{marginTop:  30,}}
        onPress={()=>navigation.navigate(navigationStrings.EDIT_PROFILE)}>
          <Image
            source={require('../../assets/Icons/edit.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: '#606060',
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{
        paddingVertical: 30, paddingHorizontal: 25, flexDirection: 'column', flex: 1, backgroundColor: Colors.primary, borderTopLeftRadius: 25, borderTopRightRadius: 25, justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.CHANGE_PASSWORD)}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/Icons/changePassword.png')}
            style={{ width: 30, height: 30, tintColor: 'white' }}
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
          onPress={() => navigation.navigate(navigationStrings.TERMS_AND_CONDITIONS )}

          style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          onPress={() => navigation.navigate(navigationStrings.PRIVACY_POLICY )}

          style={{ flexDirection: 'row', alignItems: 'center' }}>
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
          onPress={() => navigation.navigate('AuthStack')}

          style={{ flexDirection: 'row', alignItems: 'center' }}>
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
  );

}


export default ProfileScreen
