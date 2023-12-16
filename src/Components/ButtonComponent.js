//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../styles/colors';
import imagePath from '../Constants/imagePath';

// create a component
const ButtonComponent = ({
    btnText,
    btnStyle = {},
    onPress = () => { },
    img,
    btnTextStyle= {},
    imgStyle= {}
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{ ...styles.btnStyle, ...btnStyle }}>

            <Image 
            source={img} 
            style={{...styles.imgStyle, ...imgStyle}} />
                <Text style={{...styles.btnTextStyle, ...btnTextStyle}}>{btnText}</Text>
            
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        flexDirection: 'row',
        height: 60,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    btnTextStyle: {
        fontSize: 15,
        color: 'black',
        fontWeight: '500',
    },

    imgStyle: {
        height: 40, 
        width: 40, 
        marginLeft: 30, 
        marginRight: 30
    }
    
});

//make this component available to the app
export default ButtonComponent;
