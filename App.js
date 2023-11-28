
import React from 'react';
import {  SafeAreaView, Text,  View,} from 'react-native';
import PreLogin from './src/Screens/PreLogin/PreLogin';
import ChangePassword from './src/Screens/ChangePassword/ChangePassword';
import Profile from './src/Screens/Profile/Profile';
import OfferDetails from './src/Screens/OfferDetails/OfferDetails';
import CompleteProfile from './src/Screens/CompleteProfile/CompleteProfile';
import SignUp from './src/Screens/SignUp/SignUp';
import NewPassword from './src/Screens/NewPassword/NewPassword';
import LoginWithPhone from './src/Screens/LoginWithPhone/LoginWithPhone';
import TermsAndConditions  from './src/Screens/TermsAndConditions/TermsAndConditions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/Navigation/AuthStack';
import CouponStack from './src/Navigation/CouponStack';
import HomeStack from './src/Navigation/HomeStack';
import AppStack from './src/Navigation/AppStack';

const Stack = createNativeStackNavigator()

function App() {
return (

<NavigationContainer>
  <Stack.Navigator>
<Stack.Screen name='AuthStack' options={{headerShown: false}} component={AuthStack}/>
<Stack.Screen name='CouponStack' options={{headerShown: false}} component={CouponStack}/>
<Stack.Screen name='HomeStack' options={{headerShown: false}} component={HomeStack}/>
<Stack.Screen name='AppStack' options={{headerShown: false}} component={AppStack}/>
  </Stack.Navigator>
  </NavigationContainer>
    );
}



export default App;
