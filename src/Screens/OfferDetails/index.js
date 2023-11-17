// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import {Colors, Icon} from '../../config';
// import {SliderBox} from 'react-native-image-slider-box';
// import FastImage from 'react-native-fast-image';
// import StarRating from 'react-native-star-rating';
// import LinearGradient from 'react-native-linear-gradient';
// import Devices from '../Devices';
// import Header from '../../components/Header';
// import {getProductDetails, products} from '../Products';
// import {connect} from 'react-redux';
// import {addCoupons} from '../../redux/actions/action';
// import {addUserProduct, productDetails} from '../../redux/actions';

// const {height, width} = Dimensions.get('screen');

// class App extends Component {
//   state = {
//     productDetails: [],
//   };

//   avail = () => {
//     // const empty = [];
//     const {route, navigation, addCoupons} = this.props;
//     const {productID} = route.params;
//     // const coupons = this.props.coupons.length ? this.props.coupons : [];
//     // coupons.includes(productID) ? null : coupons.push(productID);
//     // addCoupons(coupons);
//     this.props.addUserProduct(productID);
//     navigation.goBack();
//   };

//   componentDidMount() {
//     const {route} = this.props;
//     const {productID} = route.params;
//     this.props.productDetails(productID, this.saveDetails);
//   }

//   saveDetails = data => {
//     this.setState({
//       productDetails: data,
//     });
//   };

//   render() {
//     const {productDetails} = this.state;
//     let productImages = [];
//     if (productDetails.length) {
//       const p = productDetails.map(i => {
//         return i.product_images;
//       });
//       productImages = p[0].map(i => {
//         return `http://server.appsstaging.com:3013/${i.product_images.replace(
//           /\\/g,
//           '/',
//         )}`;
//       });
//     }

//     let avgRating = 0;
//     if (productDetails.length) {
//       const ratings = productDetails[0].rating.map(i => {
//         return i.rate;
//       });

//       const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
//       avgRating = average(ratings).toFixed(1);
//     }
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#fff',
//         }}>
//         <Header name={'OFFER DETAILS'} goBack={this.props.navigation.goBack} />

//         <SliderBox
//           ImageComponent={FastImage}
//           images={productImages}
//           sliderBoxHeight={
//             Devices.isIphoneX || Devices.isAndroidBeazeLess ? 250 : 200
//           }
//           dotColor={Colors.primary}
//           autoplay
//           circleLoop
//         />
//         <ScrollView
//           contentContainerStyle={{padding: 20}}
//           showsVerticalScrollIndicator={false}>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}>
//             <Text style={{fontSize: 22, fontWeight: '600', width: '80%'}}>
//               {productDetails[0]?.title || ''}
//             </Text>
//             <Text
//               style={{fontSize: 22, fontWeight: '600', color: Colors.primary}}>
//               {productDetails[0]?.price || ''}
//             </Text>
//           </View>
//           <Text style={{fontSize: 18, marginTop: 5}}>
//             {productDetails[0]?.brand || ''}
//           </Text>
//           <View
//             style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//             <StarRating
//               disabled
//               fullStar={require('../../assets/Icons/filledStar.png')}
//               emptyStar={require('../../assets/Icons/emptyStar.png')}
//               maxStars={5}
//               rating={3}
//               starSize={20}
//               starStyle={{marginRight: 5}}
//             />
//             <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
//               {productDetails[0]?.rating?.length ? avgRating : 0}(
//               {productDetails[0]?.rating?.length
//                 ? productDetails[0]?.rating?.length
//                 : 0}
//               )
//             </Text>
//           </View>
//           <Text style={{fontSize: 18, marginTop: 15}}>Description</Text>
//           <Text style={{fontSize: 14, marginTop: 15, color: Colors.text}}>
//             {getProductDetails(6).description}
//           </Text>
//           <Text style={{fontSize: 18, marginTop: 15}}>Reviews</Text>
//           <View
//             style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//             <StarRating
//               disabled
//               fullStar={require('../../assets/Icons/filledStar.png')}
//               emptyStar={require('../../assets/Icons/emptyStar.png')}
//               maxStars={5}
//               rating={4}
//               starSize={20}
//               starStyle={{marginRight: 5}}
//             />
//             <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
//               (50)
//             </Text>
//           </View>
//           <View
//             style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//             <StarRating
//               disabled
//               fullStar={require('../../assets/Icons/filledStar.png')}
//               emptyStar={require('../../assets/Icons/emptyStar.png')}
//               maxStars={5}
//               rating={3}
//               starSize={20}
//               starStyle={{marginRight: 5}}
//             />
//             <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
//               (25)
//             </Text>
//           </View>
//           <View
//             style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
//             <StarRating
//               disabled
//               fullStar={require('../../assets/Icons/filledStar.png')}
//               emptyStar={require('../../assets/Icons/emptyStar.png')}
//               maxStars={5}
//               rating={2}
//               starSize={20}
//               starStyle={{marginRight: 5}}
//             />
//             <Text style={{fontSize: 16, fontWeight: '300', marginLeft: 10}}>
//               (30)
//             </Text>
//           </View>
//         </ScrollView>
//         <TouchableOpacity activeOpacity={0.7} onPress={this.avail}>
//           <LinearGradient
//             colors={['rgb(255, 60, 0)', 'rgb(255,120,35)', 'rgb(255, 160, 12)']}
//             style={{
//               height: 50,
//               width: '100%',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginTop: 3,
//             }}>
//             <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
//               Avail
//             </Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// function mapState(state) {
//   return {
//     coupons: state.reducer.coupons,
//   };
// }
// function mapDispatch(dispatch) {
//   return {
//     addCoupons: coupons => {
//       dispatch(addCoupons(coupons));
//     },
//     productDetails: (porduct_id, saveDetails) => {
//       dispatch(productDetails(porduct_id, saveDetails));
//     },
//     addUserProduct: porduct_id => {
//       dispatch(addUserProduct(porduct_id));
//     },
//   };
// }
// export default connect(
//   mapState,
//   mapDispatch,
// )(App);
