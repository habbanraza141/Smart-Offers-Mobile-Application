//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import navigationStrings from '../../Constants/navigationStrings';

// create a component
const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate(navigationStrings.OFFER_DETAILS)}
            >

            <Text>MyComponent</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
