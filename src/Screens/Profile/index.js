import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {Colors, Icon, NavService} from '../../config';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions';
import moment from 'moment';

const {height, width} = Dimensions.get('screen');

class App extends Component {
  render() {
    const {
      user_fname,
      user_lname,
      user_email,
      user_image,
      user_dob,
      user_city,
      user_state,
      user_gender,
    } = this.props.user;
    const url =
      'http://server.appsstaging.com:3013/' + user_image.replace(/\\/g, '/');

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
                onPress={() => {
                  this.props.navigation.navigate('EditProfile');
                }}
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
              {`${user_fname} ${user_lname}`}
            </Text>
            <Text numberOfLines={1} style={{fontSize: 16, marginTop: 10}}>
              {user_email}
            </Text>
            <Text numberOfLines={1} style={{fontSize: 16}}>
              {user_gender},{' '}
              {moment().format('YYYY') - moment(user_dob).format('YYYY')} yrs
              old
            </Text>
            <Text numberOfLines={1} style={{fontSize: 16}}>
              {user_city}, {user_state}
            </Text>
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
                onPress={() => {
                  this.props.navigation.navigate('ChangePassword');
                }}
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
                onPress={() => {
                  this.props.navigation.navigate('TermsConditionsApp');
                }}
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
                onPress={() => {
                  this.props.navigation.navigate('PrivacyPolicyApp');
                }}
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
                onPress={this.props.logout}
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
}

function mapState({reducer: {user}}) {
  return {
    user,
  };
}

function mapDispatch(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
}

export default connect(
  mapState,
  mapDispatch,
)(App);
