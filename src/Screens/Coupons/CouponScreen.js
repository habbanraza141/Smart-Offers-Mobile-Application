//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import navigationStrings from '../../Constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';
import imagePath from '../../Constants/imagePath';


// coupons
let DummyData = [
    {
        couponImage: require('../../assets/football.webp'),
        couponTitle: `Men's Football Shoes`,
        couponBrand: 'Adidas',
        couponRating: 3.5,
        couponPrice: '$50',
        couponDiscount: 25
    },
    {
        couponImage: require('../../assets/lotion.webp'),
        couponTitle: `Body Lotion`,
        couponBrand: 'Loreal',
        couponRating: 3.5,
        couponPrice: '$35',
        couponDiscount: 10
    },
    {
        couponImage: require('../../assets/pizza.jpeg'),
        couponTitle: `2 Pizzas Love Cake`,
        couponBrand: 'Pizza Hut',
        couponRating: 3.5,
        couponPrice: '$15',
        couponDiscount: 15
    },
    {
        couponImage: require('../../assets/watch.jpeg'),
        couponTitle: `Gold Hand Watch`,
        couponBrand: 'Armani',
        couponRating: 3.5,
        couponPrice: '$50',
        couponDiscount: 30
    },
    {
        couponImage: require('../../assets/ideal.jpeg'),
        couponTitle: `Ideal women's perfume`,
        couponBrand: 'Ideal',
        couponRating: 3.5,
        couponPrice: '$50',
        couponDiscount: 20
    },
    {
        couponImage: require('../../assets/fragrance.png'),
        couponTitle: `A lot of Fragrances`,
        couponBrand: 'Unknown',
        couponRating: 3.5,
        couponPrice: '$35',
        couponDiscount: 30
    },
    {
        couponImage: require('../../assets/football.webp'),
        couponTitle: `Men's Football Shoes`,
        couponBrand: 'Adidas',
        couponRating: 3.5,
        couponPrice: '$50',
        couponDiscount: 20
    },
    {
        couponImage: require('../../assets/lotion.webp'),
        couponTitle: `Body Lotion`,
        couponBrand: 'Loreal',
        couponRating: 3.5,
        couponPrice: '$35',
        couponDiscount: 30
    },
    {
        couponImage: require('../../assets/pizza.jpeg'),
        couponTitle: `2 Pizzas Love Cake`,
        couponBrand: 'Pizza Hut',
        couponRating: 3.5,
        couponPrice: '$15',
        couponDiscount: 25
    },
    {
        couponImage: require('../../assets/watch.jpeg'),
        couponTitle: `Gold Hand Watch`,
        couponBrand: 'Armani',
        couponRating: 3.5,
        couponPrice: '$50',
        couponDiscount: 15
    },
    {
        couponImage: require('../../assets/ideal.jpeg'),
        couponTitle: `Ideal women's perfume`,
        couponBrand: 'Ideal',
        couponRating: 3.5,
        couponPrice: '$50',
        couponDiscount: 30
    },
    {
        couponImage: require('../../assets/fragrance.png'),
        couponTitle: `A lot of Fragrances`,
        couponBrand: 'Unknown',
        couponRating: 3.5,
        couponPrice: '$35',
        couponDiscount: 40
    },
]
// create a component
const RenderItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{ height: 170, width: 150, marginLeft: 10, marginRight: 10, backgroundColor: '#fff', marginBottom: 20, borderRadius: 15, borderColor: 'grey' }}
            onPress={()=>navigation.navigate(navigationStrings.COUPON_DETAILS)} >
            <View style={{ height: 23, width: 70, backgroundColor: '#ff5006', position: 'absolute', zIndex: 1, top: 20, borderBottomRightRadius: 7, borderTopRightRadius: 7, padding: 3 }}>
                <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }} >{item.couponDiscount}% OFF</Text>
            </View>
            <Image
                source={item.couponImage}
                resizeMode='cover'
                style={{ height: 103, width: 146, borderRadius: 15, marginLeft: 2, marginTop: 2 }} />
            <Text style={{ marginLeft: 6, fontSize: 13, marginTop: 3, marginBottom: 3 }}>{item.couponTitle}</Text>
            <Text style={{ fontSize: 12, color: 'grey', marginLeft: 7 }}>{item.couponBrand}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, paddingRight: 10, paddingLeft: 8 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../../assets/Icons/star.png')}
                        tintColor={'#ff5006'}
                        resizeMode='contain'
                        style={{ height: 15, width: 15, marginRight: 7 }} />
                    <Text style={{ fontSize: 12, color: 'grey' }}>{item.couponRating}(50)</Text>
                </View>
                <View>
                    <Text style={{ color: '#ff5006' }}>{item.couponPrice}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}
const CouponScreen = () => {

    return (
        <View style={styles.container}>
            <HeaderComponent
                img={imagePath.menu}
                hdrText={'COUPONS'}
            />
            <View style={styles.midView}>
                <FlatList
                    onPress={() => navigation.navigate(navigationStrings.COUPON_DETAILS)} 
                    data={DummyData}
                    renderItem={({item})=> <RenderItem item={item} /> }
                    numColumns={2} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    midView: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        backgroundColor: '#f0f8fb'
    }
});

//make this component available to the app
export default CouponScreen;
