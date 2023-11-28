import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
// import Device from './containers/Responsive/Device';
import {Colors, Icon} from '../config';

export default class TabbarComp extends React.Component {
  render() {
    const {state, descriptors, navigation} = this.props;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          overflow: 'visible',
        }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };
          let imageSrc = require('../assets/Tabbar/home.png');
          if (route.name === 'Coupons')
            imageSrc = require('../assets/Tabbar/coupon.png');
          if (route.name === 'Notifications')
            imageSrc = require('../assets/Tabbar/notifcation.png');
          if (route.name === 'Profile')
            imageSrc = require('../assets/Tabbar/profile.png');
          return (
            <TouchableOpacity
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={onPress}
              style={styles.tabs}>
              <Image
                source={imageSrc}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: isFocused ? Colors.primary : Colors.grey,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: isFocused ? Colors.primary : Colors.grey,
                  fontSize: 12,
                }}>
                {route.name}
              </Text>
              {/* {isFocused ? (
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 16,
                    // borderBottomRightRadius: 16,
                    // borderBottomEndRadius: 16,
                    backgroundColor: '#F1668D',
                    position: 'absolute',
                    top: -8,
                  }}
                />
              ) : null} */}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    paddingVertical: 20,
    // paddingBottom: Device.isIphoneX ? 15 + 10 : 15,
    // paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    overflow: 'hidden',
  },
});
