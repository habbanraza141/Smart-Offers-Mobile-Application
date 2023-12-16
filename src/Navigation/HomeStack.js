import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../Constants/navigationStrings'
import { HomeScreen, OfferDetails, CouponDetails } from '../Screens';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'simple_push',
      }}
      initialRouteName={navigationStrings.HOME}>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.OFFER_DETAILS}
        component={OfferDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.COUPON_DETAILS}
        component={CouponDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};