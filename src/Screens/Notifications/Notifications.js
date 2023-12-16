//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../Constants/imagePath';

const NOTIFICATION = [
    {
        title: 'Adidas New Shoe Offer',
        date: 'August 11, 2023',
        details: 'lorem ipsum sdbd djndj sudhe ndjnsjdnw wdwbdnw jwfddjw hdff fdjfdjfh '
    },

    {
        title: 'Adidas New Shoe Offer',
        date: 'August 11, 2023',
        details: 'lorem ipsum sdbd djndj sudhe ndjnsjdnw wdw jnc  jxfn bfhjcbdjcbdnw jwfddjw hdff fdjfdjfh '
    },

    {
        title: 'Adidas New Shoe Offer',
        date: 'August 11, 2023',
        details: 'lorem ipsum sudhe ndjnsjdnw wdwbdnw jwfddjw hdff fdjfdjfh '
    },

    {
        title: 'Adidas New Shoe Offer',
        date: 'August 11, 2023',
        details: 'lorem ipsum sudhe ndjnsjdnw wdwbdnw jwfddjw hdff fdjfdjfh '
    },

    {
        title: 'Adidas New Shoe Offer',
        date: 'August 11, 2023',
        details: 'lorem ipsum sudhe ndjnsjdnw wdwbdnw jwfddjw hdff fdjfdjfh '
    },

    {
        title: 'Adidas New Shoe Offer',
        date: 'August 11, 2023',
        details: 'lorem ipsum sudhe ndjnsjdnw wdwbdnw jwfddjw hdff fdjfdjfh '
    },
]

//
const oneView = ({ item }) => {
    return (
        <View style={{ backgroundColor: '#ffffff', marginTop: 30, marginLeft: 30, marginRight: 30 }}>
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, fontWeight: 'bold', fontSize: 15, paddingBottom: 3 }}>{item.title}</Text>
            <Text style={{ paddingLeft: 20, paddingRight: 20 }}>{item.date}</Text>
            <Text style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 15, paddingTop: 10 }}>{item.details}</Text>
        </View>
    )
}


// create a component
const Notifications = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'NOTIFICATIONS'} 
                img={imagePath.menu}
                />

            <View>
                <FlatList
                    data={NOTIFICATION}
                    renderItem={oneView} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8fb'

    },
});

//make this component available to the app
export default Notifications;
