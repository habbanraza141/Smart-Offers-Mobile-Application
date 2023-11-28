import * as React from 'react'
import { ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../Constants/navigationStrings'
import { PreLogin, LoginWithEmail, LoginWithPhone, ForgetPassword, Signup, NewPassword , Verification, CompleteProfile , TermsAndConditions, PrivacyPolicy } from '../Screens';
const Stack = createNativeStackNavigator();
export default function AuthStack(){
    return(
        <ImageBackground source={require('../assets/bg.png')} style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: 'transparent'},
            animation: 'simple_push',
          }}
          initialRouteName={navigationStrings.PRE_LOGIN}>
          <Stack.Screen
            name={navigationStrings.PRE_LOGIN}
            component={PreLogin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.LOGIN_WITH_PHONE}
            component={LoginWithPhone}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.LOGIN_WITH_EMAIL}
            component={LoginWithEmail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.FORGET_PASSWORD}
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.SIGN_UP}
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.NEW_PASSWORD}
            component={NewPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.TERMS_AND_CONDITIONS}
            component={TermsAndConditions}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.COMPLETE_PROFILE}
            component={CompleteProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.VERIFICATION}
            component={Verification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.PRIVACY_POLICY}
            component={PrivacyPolicy}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </ImageBackground>
    );
  };
    
