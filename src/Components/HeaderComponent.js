//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import imagePath from '../Constants/imagePath';
// import { useNavigation } from '@react-navigation/native';

// create a component
const HeaderComponent = (
    {
        hdrText,
        hdrTextStyle = {}

        // onPressBack
    }
) => {
    //     const navigation = useNavigation()
    //     const goBack = () => {
    //         navigation.goBack()
    //     }
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
            // onPress={!!onPressBack? onPressBack:()=> goBack()} 
            >
                <Image source={imagePath.icBack} />
            </TouchableOpacity> */}
            <Text></Text>
            <Text style={{ ...styles.hdrTextStyle, ...hdrTextStyle }}>{hdrText}</Text>
            <Text></Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height: 40,
        width:'100%'
    },

    hdrTextStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
        textTransform: 'uppercase'
    }
});

//make this component available to the app
export default HeaderComponent;
