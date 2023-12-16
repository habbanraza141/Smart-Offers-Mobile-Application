//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import ButtonComponent from '../../components/ButtonComponent';
import imagePath from '../../Constants/imagePath';
import navigationStrings from '../../Constants/navigationStrings';

// create a component
const PreLogin = ({navigation}) => {
    return (
        <ImageBackground
            source={require('../../assets/bg.png')}
            style={styles.container} >

                <HeaderComponent
                    hdrText={"pre login"}
                    hdrTextStyle={{ textAlign: 'center' }} />
          <View
          style={{height: '100%', width: '100%', paddingLeft:  30, paddingRight: 30, alignItems: 'center'}} >      
                <Image
                    resizeMode='contain'
                    source={require('../../assets/logo.png')}
                    style={{
                      width: '80%',
                      height: 120,
                      marginBottom: 40,
                      marginTop: 30,
                    }}                />
                <ButtonComponent
                    btnText={"Signin with Email"}
                    img={imagePath.email}
                    imgStyle={{tintColor: '#ff6807'}}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                    onPress={()=>navigation.navigate(navigationStrings.LOGIN_WITH_EMAIL)}
                />

                <ButtonComponent
                    btnText={"Signin with Phone"}
                    img={imagePath.phone}
                    imgStyle={{tintColor: '#ed3031'}}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                    onPress={()=>navigation.navigate(navigationStrings.LOGIN_WITH_PHONE)}

                />

                <ButtonComponent
                    btnText={"Signin with Apple"}
                    img={imagePath.apple}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                    onPress={()=>navigation.navigate('AppStack')}

                />

                <ButtonComponent
                    btnText={"Signin with Facebook"}
                    img={imagePath.facebook}
                    imgStyle={{tintColor: '#405B9D'}}
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                    onPress={()=>navigation.navigate('AppStack')}

                />

                <ButtonComponent
                    btnText={"Signin with Google"}
                    img={imagePath.google}
                    
                    btnStyle={{ width: '100%', marginBottom: 15 }}
                    btnTextStyle={{}}
                    onPress={()=>navigation.navigate('AppStack')}

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
     
    },
});

//make this component available to the app
export default PreLogin;
