import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Register, ChooseAccount, ForgotPassword, SetPassword } from '../Screens';
import navigationStrings from '../Constants/navigationStrings';
import TabRoutes from './TabRoutes';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{headerShown: false}}/>
            <Stack.Screen name={navigationStrings.REGISTER} component={Register} options={{headerShown: false}}/>
            <Stack.Screen name={navigationStrings.CHOOSE_ACCOUNT} component={ChooseAccount} options={{headerShown: false}}/>
            <Stack.Screen name={navigationStrings.FORGOT_PASSWORD} component={ForgotPassword} options={{headerShown: false}}/>
            <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}