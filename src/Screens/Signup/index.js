import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import {Colors, Icon} from '../../config';
import Toast from 'react-native-toast-message';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {signup} from '../../redux/actions';
import {connect} from 'react-redux';
import * as EmailValidator from 'email-validator';

var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
  .is()
  .min(8)
  .is()
  .max(100);

const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  signup = () => {
    const {email, password, confirmPassword} = this.state;
    if (!email && !password && !confirmPassword)
      return Toast.show({
        text1: 'Please enter all info',
        type: 'error',
        visibilityTime: 3000,
      });
    if (!EmailValidator.validate(email))
      return Toast.show({
        text1: 'Email not valid',
        type: 'error',
        visibilityTime: 3000,
      });
    if (password !== confirmPassword)
      return Toast.show({
        text1: 'Passwords does not match',
        type: 'error',
        visibilityTime: 3000,
      });
    if (!schema.validate(password))
      return Toast.show({
        text1: 'Password not valid (Use atleast eight character)',
        type: 'error',
        visibilityTime: 3000,
      });
    // if (!isAgreed)
    //   return Toast.show({
    //     text1: 'Please accept Terms & Conditions',
    //     textStyle: {
    //       textAlign: 'center',
    //       //  fontFamily: Fonts.regular
    //     },
    //     type: 'error',
    //     visibilityTime: 3000,
    //   });
    this.props.signup(email.toLowerCase(), password);
    // this.props.navigation.navigate('Verification', {
    //   next: 'CompleteProfile',
    // });
  };

  render() {
    const {email, password, confirmPassword} = this.state;

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
            SIGNUP
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: '60%',
                height: 120,
                marginBottom: 40,
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
                  value={email}
                  onChangeText={email => this.setState({email, error: false})}
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
              <View style={{marginLeft: 15, width: '100%'}}>
                <Text style={{color: '#fff', fontSize: 12}}>Password</Text>
                <TextInput
                  secureTextEntry
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                    height: 40,
                    width: '85%',
                  }}
                  value={password}
                  onChangeText={password =>
                    this.setState({password, error: false})
                  }
                  placeholder="Password"
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
              <View style={{marginLeft: 15, width: '100%'}}>
                <Text style={{color: '#fff', fontSize: 12}}>
                  Confirm Password
                </Text>
                <TextInput
                  secureTextEntry
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                    height: 40,
                    width: '85%',
                  }}
                  value={confirmPassword}
                  onChangeText={confirmPassword =>
                    this.setState({confirmPassword, error: false})
                  }
                  placeholder="Confirm Password"
                  placeholderTextColor={'#fff'}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={this.signup}
              style={{
                width: '80%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                marginVertical: 30,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 16}}>Signup</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    signup: (email, password) => {
      dispatch(signup(email, password));
    },
  };
}

export default connect(
  null,
  mapDispatch,
)(App);
