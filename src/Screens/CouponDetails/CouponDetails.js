import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
 
import Colors from '../../config/colors/index'
const CouponDetails = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>

 
        <ScrollView
          contentContainerStyle={{padding: 20}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: '600', width: '80%'}}>bdjcdsbjc
            </Text>
            <Text
              style={{fontSize: 22, fontWeight: '600', color: Colors.primary}}>fdfdf
            </Text>
          </View>
          <Text style={{fontSize: 18, marginTop: 5}}>
fdfd          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          
            <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
          fdfdfd
            </Text>
          </View>
          <Text style={{fontSize: 18, marginTop: 15}}>Description</Text>
          <Text style={{fontSize: 14, marginTop: 15, color: Colors.text}}>
ghgbhbh          </Text>
          <Text style={{fontSize: 18, marginTop: 15}}>Reviews</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
             
                <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
                  (50)
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
              
              
                <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
                  (25)
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
              
              
                <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
                  (30)
                </Text>
              </View>
            </View>
           
           
          </View>
        </ScrollView>
      </View>
    );
  }


export default CouponDetails;
