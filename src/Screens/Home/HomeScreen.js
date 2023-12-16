//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import { useNavigation } from '@react-navigation/native';
import navigationStrings from '../../Constants/navigationStrings';
import imagePath from '../../Constants/imagePath';

//category
let categoryData = [
    {
        categoryImage: require('../../assets/Home/beauty-spa.png'),
        categoryName: 'Beauty & Spa'
    },
    {
        categoryImage: require('../../assets/Home/food.png'),
        categoryName: 'Food items'
    },
    {
        categoryImage: require('../../assets/Home/personal-service.png'),
        categoryName: 'Personal Service'
    },
    {
        categoryImage: require('../../assets/Home/thing-to-do.png'),
        categoryName: 'Things to do'
    },
]
// coupons
let couponData = [
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



// create a category flatlist
const EachCategory = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ height: 120, width: 80, marginLeft: 10, marginRight: 10, backgroundColor: '#fff', borderRadius: 15, marginBottom: 45, alignItems: 'center', justifyContent: 'center', paddingLeft: 5, paddingRight: 5 }}
            onPress={() => navigation.navigate(navigationStrings.OFFER_DETAILS)}
        >

            <Image
                source={item.categoryImage}
                resizeMode='contain'
                style={{ height: 50, width: 60, marginLeft: 2, marginTop: 2, }} />
            <Text style={{ fontSize: 12, textAlign: 'center' }}>{item.categoryName}</Text>

        </TouchableOpacity>
    )
}

// create a coupon flatlist
const EachCoupon = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={{ height: 170, width: 150, marginLeft: 10, marginRight: 10, backgroundColor: '#fff', marginBottom: 20, borderRadius: 15, borderColor: 'grey' }}
            onPress={() => navigation.navigate(navigationStrings.COUPON_DETAILS)}
        >
            <View style={{ height: 23, width: 70, backgroundColor: '#ff5006', position: 'absolute', zIndex: 1, top: 20, borderBottomRightRadius: 7, borderTopRightRadius: 7, padding: 3 }}>
                <Text style={{ color: '#fff', fontSize: 13, fontWeight: 'bold' }} >{item.couponDiscount}% OFF</Text>
            </View>
            <View>
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
            </View>
        </TouchableOpacity>
    )
}





const HomeScreen = () => {
const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <HeaderComponent
                img={imagePath.menu}
                
                hdrText={'HOME'}
            />
            <View style={styles.midView}>
                {/* <FlatList /> */}
                <FlatList
                    data={categoryData}
                    renderItem={({ item }) => <EachCategory item={item} />}
                    horizontal={true}
                />
                <View
                    style={{ height: 30 }} >

                </View>
                <FlatList
                    data={couponData}
                    renderItem={({ item }) => < EachCoupon item={item} />}
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
export default HomeScreen;
