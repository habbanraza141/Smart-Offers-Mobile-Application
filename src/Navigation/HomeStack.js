import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../Constants/navigationStrings'
import { Home, OfferDetails } from '../Screens';
const Stack = createNativeStackNavigator();


export default function HomeStack () {
    return (
      <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
        }}
        initialRouteName={navigationStrings.HOME}>
        <Stack.Screen
          name={navigationStrings.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationStrings.OFFER_DETAILS}
          component={OfferDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };