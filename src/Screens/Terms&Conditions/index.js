import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Colors, Icon} from '../../config';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {policies} from '../../redux/actions';
import {connect} from 'react-redux';
import RenderHtml from 'react-native-render-html';

const {height, width} = Dimensions.get('screen');

class App extends Component {
  state = {terms: ''};
  componentDidMount() {
    this.props.policies('tc', this.setPolicies);
  }

  setPolicies = data => {
    this.setState({terms: data});
  };

  render() {
    const {terms} = this.state;
    const source = {
      html: terms ? `${terms.content_content}` : '<p></p>',
    };
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
            onPress={() => {
              this.props.navigation.goBack();
            }}
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
            TERMS & CONDITIONS
          </Text>
        </View>
        {terms ? (
          <ScrollView
            style={{padding: 25, backgroundColor: 'white'}}
            contentContainerStyle={{paddingBottom: 40}}
            showsVerticalScrollIndicator={false}>
            {/* <Text style={{color: Colors.text, fontSize: 12}}>
            {terms.content_content}
          </Text> */}
            <RenderHtml
              contentWidth={width - 50}
              source={source}
              style={{flex: 1}}
            />
          </ScrollView>
        ) : (
          <View
            style={{
              zIndex: 99,
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              height,
              width,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    policies: (content_type, setPolicies) => {
      dispatch(policies(content_type, setPolicies));
    },
  };
}

export default connect(
  null,
  mapDispatch,
)(App);
