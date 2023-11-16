import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Animated,
  ScrollView,
  Keyboard,
} from 'react-native';
import {Colors, Icon, NavService} from '../../config';
import {Toast} from 'native-base';
import OTPInputView from '../../components/react-native-otp-input';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {resendCode, verifyCode} from '../../redux/actions';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {
    code: '',
    key: 1,
    resendActivated: false,
  };

  resend = () => {
    const {key} = this.state;
    this.setState({key: key + 1, resendActivated: false});
    this.props.resendCode();
  };

  verifyCode = code => {
    Keyboard.dismiss();
    setTimeout(() => {
      const {goto} = this.props.route.params;
      this.props.verifyCode(code, goto);
    }, 100);
  };

  render() {
    const {code, key, resendActivated} = this.state;
    const {
      navigation: {goBack, navigate},
    } = this.props;
    const otpContainerWidth = width - 60;
    const otpsingle = (width - 110) / 6;
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
            VERIFICATION
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
              // marginTop: 40,
            }}>
            <Text
              style={{
                width: '70%',
                textAlign: 'center',
                color: '#fff',
                marginBottom: 40,
                fontWeight: '600',
              }}>
              We have sent you an email containing {'\n'}VERIFICATION CODE and
              instructions. {'\n'}Please follow the instructions to verify
              {'\n'}your email address
            </Text>
            <OTPInputView
              style={{width: otpContainerWidth, height: otpsingle}}
              pinCount={6}
              code={code}
              onCodeChanged={code => {
                this.setState({code});
              }}
              autoFocusOnLoad
              codeInputFieldStyle={{
                width: otpsingle,
                height: otpsingle,
                backgroundColor: Colors.primary,
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: 'white',
              }}
              // codeInputHighlightStyle={{borderBottomColor: 'white'}}
              onCodeFilled={this.verifyCode}
            />
            <View
              style={{
                marginVertical: 50,
                padding: 10,
                borderRadius: 200,
                backgroundColor: Colors.primaryOpacity,
              }}>
              <CountdownCircleTimer
                key={key}
                isPlaying
                rotation={'clockwise'}
                duration={60}
                colors={[[Colors.yellow, 2000]]}
                trailColor={Colors.primaryOpacity}
                size={110}
                strokeWidth={4}
                onComplete={() => this.setState({resendActivated: true})}>
                {({remainingTime, animatedColor}) => (
                  <View
                    style={{
                      height: '85%',
                      borderColor: 'white',
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '85%',
                      borderRadius: 200,
                    }}>
                    {resendActivated ? (
                      <Text
                        onPress={this.resend}
                        style={{
                          color: Colors.yellow,
                          fontWeight: 'bold',
                          // fontFamily: Fonts.semiBold,
                        }}>
                        Resend
                      </Text>
                    ) : (
                      <Animated.Text
                        style={{
                          color: Colors.yellow,
                          fontWeight: 'bold',
                          // fontFamily: Fonts.semiBold,
                        }}>
                        00:{remainingTime}
                      </Animated.Text>
                    )}
                  </View>
                )}
              </CountdownCircleTimer>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    verifyCode: (code, goto) => {
      dispatch(verifyCode(code, goto));
    },
    resendCode: () => {
      dispatch(resendCode());
    },
  };
}

export default connect(
  null,
  mapDispatch,
)(App);
