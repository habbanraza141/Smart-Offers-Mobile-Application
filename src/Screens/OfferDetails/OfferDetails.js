import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../../config/colors/index';
// import {SliderBox} from 'react-native-image-slider-box';
// import FastImage from 'react-native-fast-image';
// import StarRating from 'react-native-star-rating';
// import LinearGradient from 'react-native-linear-gradient';
// import Header from '../../components/Header';

const OfferDetails = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        {/* <Header name={'OFFER DETAILS'}  /> */}

        {/* <SliderBox
          ImageComponent={FastImage}
          images={productImages}
          sliderBoxHeight={
            Devices.isIphoneX || Devices.isAndroidBeazeLess ? 250 : 200
          }
          dotColor={Colors.primary}
          autoplay
          circleLoop
        /> */}
        <ScrollView
          contentContainerStyle={{padding: 20}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: '600', width: '80%'}}>
Habban Raza            </Text>
            <Text
              style={{fontSize: 22, fontWeight: '600', color: Colors.primary}}>
djsndxjdsndxmzx            </Text>
          </View>
          <Text style={{fontSize: 18, marginTop: 5}}>
xnzzkncxzncxz          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            {/* <StarRating
              disabled
              fullStar={require('../../assets/Icons/filledStar.png')}
              emptyStar={require('../../assets/Icons/emptyStar.png')}
              maxStars={5}
              rating={3}
              starSize={20}
              starStyle={{marginRight: 5}}
            /> */}
            <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
              2r162712
            </Text>
          </View>
          <Text style={{fontSize: 18, marginTop: 15}}>Description</Text>
          <Text style={{fontSize: 14, marginTop: 15, color: Colors.text}}>
lorem ipsum          </Text>
          <Text style={{fontSize: 18, marginTop: 15}}>Reviews</Text>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            {/* <StarRating
              disabled
              fullStar={require('../../assets/Icons/filledStar.png')}
              emptyStar={require('../../assets/Icons/emptyStar.png')}
              maxStars={5}
              rating={4}
              starSize={20}
              starStyle={{marginRight: 5}}
            /> */}
            <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
              (50)
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            {/* <StarRating
              disabled
              fullStar={require('../../assets/Icons/filledStar.png')}
              emptyStar={require('../../assets/Icons/emptyStar.png')}
              maxStars={5}
              rating={3}
              starSize={20}
              starStyle={{marginRight: 5}}
            /> */}
            <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
              (25)
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            {/* <StarRating
              disabled
              fullStar={require('../../assets/Icons/filledStar.png')}
              emptyStar={require('../../assets/Icons/emptyStar.png')}
              maxStars={5}
              rating={2}
              starSize={20}
              starStyle={{marginRight: 5}}
            /> */}
            <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
              (30)
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.7} onPress={this.avail}>
          {/* <LinearGradient
            colors={['rgb(255, 60, 0)', 'rgb(255,120,35)', 'rgb(255, 160, 12)']}
            style={{
              height: 50,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 3,
            }}> */}
            <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
              Avail
            </Text>
          {/* </LinearGradient> */}
        </TouchableOpacity>
      </View>
    );
  }



export default OfferDetails;