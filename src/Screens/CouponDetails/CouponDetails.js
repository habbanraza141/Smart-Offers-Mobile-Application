import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
 
import Colors from '../../config/colors/index'
import HeaderComponent from '../../components/HeaderComponent';
const CouponDetails = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>

 <HeaderComponent />
        <ScrollView
          contentContainerStyle={{padding: 20}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: '600', width: '80%'}}>Bata Shoes
            </Text>
            <Text
              style={{fontSize: 22, fontWeight: '600', color: Colors.primary}}>$50
            </Text>
          </View>
          <Text style={{fontSize: 18, marginTop: 5}}>Adidas </Text>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          
            <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>3.5 (50)  </Text>
          </View>
          <Text style={{fontSize: 18, marginTop: 15}}>Description</Text>
          <Text style={{fontSize: 14, marginTop: 15, color: Colors.text}}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum</Text>
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
