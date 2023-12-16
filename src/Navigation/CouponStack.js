import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../Constants/navigationStrings'
import {CouponScreen, CouponDetails} from '../Screens'
const Stack = createNativeStackNavigator();

export default function CouponStack () {
    return (
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
        }}
        initialRouteName={navigationStrings.COUPONS}>
        <Stack.Screen
          name={navigationStrings.COUPONS}
          component={CouponScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.COUPON_DETAILS}
          component={CouponDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };