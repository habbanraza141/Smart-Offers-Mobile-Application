//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import ButtonComponent from '../../components/ButtonComponent';
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
                    style={{
                      width: '72%',
                      height: 120,
                      marginBottom: 40,
                      marginTop: 30,
                    }}                />
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
