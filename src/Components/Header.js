import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../config';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Header = ({name, goBack, icon}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        width: '100%',
        backgroundColor: Colors.primary,
        paddingTop: getStatusBarHeight() + 10,
        paddingBottom: 20,
      }}>
      {icon === 'menu' ? null : (
        <TouchableOpacity
          onPress={() => {
            if (goBack) goBack();
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
            source={require('../assets/Icons/back.png')}
          />
        </TouchableOpacity>
      )}
      <Text
        style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
    </View>
  );
};
export default Header;
