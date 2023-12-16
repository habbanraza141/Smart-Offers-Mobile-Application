import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Colors from '../../config/colors/index';
import StarRating from 'react-native-star-rating';
import navigationStrings from '../../Constants/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';
import GeneralStarExample from '../../components/GeneralStarExample';
import QRCode from 'react-native-qrcode-svg';
import imagePath from '../../Constants/imagePath';



const CouponDetails = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f0f8fb'
      }}>
      <HeaderComponent hdrText={'COUPON DETAILS'} img={imagePath.icBack}
        onPress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/football.webp')}
          style={{ height: 250, width: '100%' }}
          resizeMode='cover' />
        <View style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 26, fontWeight: '600', width: '80%' }}>Busenitz Shoes</Text>
            <Text style={{ fontSize: 26, fontWeight: '600', color: Colors.primary }}>$50</Text>
          </View>
          <Text style={{ fontSize: 18, marginTop: 5 }}>Adidas</Text>
          <View
            style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
            <GeneralStarExample
            />
            <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}> 3.5 (50)  </Text>
          </View>
          <Text style={{ fontSize: 18, marginTop: 15 }}>Description</Text>
          <Text style={{ fontSize: 14, marginTop: 15, color: Colors.text }}>Lorem ipsum  feugiat nisi ut, suscipit dolor Curabitur sed es consectetur adipiscing elitt ligula consectetur, iaculis sapien vel, pellentesque erat. Mauris vel lacus facilisis, feugiat nisi ut, suscipit dolor. Quisque venenatis odio et dui volutpat, ut pharetra risus </Text>
          <Text style={{ fontSize: 18, marginTop: 15 }}>Reviews</Text>
        
              <View
                style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <GeneralStarExample
                />
                <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>
                  (50)
                </Text>
              </View>
              <View
                style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <GeneralStarExample
                />
                <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>
                  (25)
                </Text>
              </View>
              <View
                style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                <GeneralStarExample
                />
                <Text style={{ fontSize: 16, fontWeight: '300', marginLeft: 10 }}>
                  (30)
                </Text>
              </View>
           
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{ backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', height: 40 }}
        activeOpacity={0.7} onPress={this.avail}>

        <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
          Avail
        </Text>
      </TouchableOpacity>

    </View>
  );
}



export default CouponDetails;