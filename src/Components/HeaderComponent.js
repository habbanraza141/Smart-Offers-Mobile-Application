//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import imagePath from '../Constants/imagePath';
import { Colors } from '../config';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// create a component
const HeaderComponent = (
    {
        hdrText,
        hdrTextStyle = {},
        onPress = () => { },
        img
    }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={onPress}
            >
                <Image
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: '#fff',
                    }}
                   
                    source= {img}
                    />
            </TouchableOpacity>

            <Text
                style={{ ...styles.hdrTextStyle, ...hdrTextStyle }}>
                {hdrText}
            </Text>
            <Text>    </Text>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 90,
        width: '100%',
        paddingTop: 40,
        paddingHorizontal: 30,
        backgroundColor: Colors.primary
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
