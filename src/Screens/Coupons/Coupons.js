import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  RefreshControl,
} from 'react-native';
import {Colors, Icon} from '../../config';
import Header from '../../components/Header';
import {getCoupons} from '../Products';
import {connect} from 'react-redux';
import {addCoupons} from '../../redux/actions/action';
import {couponList} from '../../redux/actions';
class App extends Component {
  state = {
    products: [],
    isRefreshing: false,
  };

  componentDidMount() {
    this.couponList();
  }

  couponList = () => {
    this.setState({isRefreshing: true});
    this.props.couponList(this.saveProducts);
  };

  saveProducts = productsList => {
    this.setState({products: productsList, isRefreshing: false});
  };

  _renderItem({_id, product, product_images}) {
    const {title, brand, discount, price, rating} = product[0];
    const ratings = rating.map(i => {
      return i.rate;
    });

    const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    const avgRating = average(ratings).toFixed(1);

    const url =
      'http://server.appsstaging.com:3013/' +
      product_images[0].product_images.replace(/\\/g, '/');

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('CouponDetails', {
            product,
            product_images,
          });
        }}
        style={{
          width: '48%',
          borderRadius: 6,
          marginTop: 20,
        }}>
        <ImageBackground
          source={{
            uri: url,
          }}
          style={{
            height: 100,
            backgroundColor: 'black',
            borderRadius: 10,
          }}
          imageStyle={{
            borderRadius: 10,
          }}>
          <View
            style={{
              alignSelf: 'flex-start',
              padding: 5,
              paddingHorizontal: 10,
              backgroundColor: Colors.primary,
              marginTop: 15,
              marginLeft: -3,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: 'white',
                fontSize: 12,
              }}>
              {discount}% OFF
            </Text>
          </View>
        </ImageBackground>
        <Text
          numberOfLines={1}
          style={{
            color: 'black',
            fontSize: 14,
            marginTop: 5,
          }}>
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: 'grey',
            fontSize: 12,
            marginTop: 3,
          }}>
          {brand}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginTop: 5,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/Icons/star.png')}
              style={{width: 17, height: 17, tintColor: Colors.primary}}
            />
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 12,
                marginLeft: 10,
              }}>
              {rating.length ? avgRating : 0} ({rating.length})
            </Text>
          </View>

          <Text
            numberOfLines={1}
            style={{
              color: Colors.primary,
              fontSize: 16,
              marginTop: 3,
            }}>
            {price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const {products, isRefreshing} = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <Header name={'COUPONS'} icon={'menu'} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 30,
            backgroundColor: 'white',
            marginTop: 20,
          }}
          numColumns={2}
          renderItem={({item}) => this._renderItem(item)}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={this.couponList}
            />
          }
        />
      </View>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    couponList: saveProduct => {
      dispatch(couponList(saveProduct));
    },
  };
}

export default connect(
  null,
  mapDispatch,
)(App);
