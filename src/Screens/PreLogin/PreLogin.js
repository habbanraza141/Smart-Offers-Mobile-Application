//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import ButtonComponent from '../../Components/ButtonComponent';
import imagePath from '../../Constants/imagePath';

// create a component
const PreLogin = () => {
    return (
        <ImageBackground
            source={require('../../assets/bg.png')}
            style={{ height: '100%', width: '100%', }} >
            <View style={styles.container}>

                <HeaderComponent
                    hdrText={"pre login"}
                    hdrTextStyle={{ textAlign: 'center' }} />
                <Image
                    resizeMode='contain'
                    source={require('../../assets/logo.png')}
                    style={{ height: '10%', width: '80%', marginBottom: 50, marginTop: 50 }}
                />
                <ButtonComponent
                    btnText={"Signin with Email"}
                    img={imagePath.email}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                />

                <ButtonComponent
                    btnText={"Signin with Phone"}
                    img={imagePath.phone}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                />

                <ButtonComponent
                    btnText={"Signin with Apple"}
                    img={imagePath.apple}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                />

                <ButtonComponent
                    btnText={"Signin with Facebook"}
                    img={imagePath.facebook}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                />

                <ButtonComponent
                    btnText={"Signin with Google"}
                    img={imagePath.google}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                />

            </View>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 30,
        paddingTop: 40,
        paddingRight: 30
    },
});

//make this component available to the app
export default PreLogin;
