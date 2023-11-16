import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Keyboard,
} from 'react-native';
import {Colors, Icon, NavService} from '../../config';
import Toast from 'react-native-toast-message';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import * as EmailValidator from 'email-validator';
import {login} from '../../redux/actions';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

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
  };

  login = () => {
    const {email, password} = this.state;
    if (!email && !password)
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
    if (!schema.validate(password))
      return Toast.show({
        text1: 'Password not valid (Use atleast eight character)',
        type: 'error',
        visibilityTime: 3000,
      });

    this.props.login(email.toLowerCase(), password);
  };

  render() {
    const {email, password} = this.state;

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
              SIGNIN
            </Text>
          </View>
        </View>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
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
          <>
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
            <TouchableOpacity
              onPress={this.login}
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
            <Text
              onPress={() => {
                this.props.navigation.navigate('ForgetPassword');
              }}
              style={{
                marginTop: 40,
                color: '#fff',
                textDecorationLine: 'underline',
                fontWeight: '700',
              }}>
              Forget Password
            </Text>
          </>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 30,
              marginTop: 30,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: '700',
              }}>
              Don't have an account?{' '}
              <Text
                onPress={() => {
                  this.props.navigation.navigate('Signup');
                }}
                style={{
                  textDecorationLine: 'underline',
                }}>
                Signup
              </Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    login: (email, password) => {
      dispatch(login(email, password));
    },
  };
}

export default connect(
  null,
  mapDispatch,
)(App);
