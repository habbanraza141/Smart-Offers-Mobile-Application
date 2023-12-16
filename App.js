
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/Navigation/AuthStack';
import CouponStack from './src/Navigation/CouponStack';
import HomeStack from './src/Navigation/HomeStack';
import AppStack from './src/Navigation/AppStack';
import ProfileStack from './src/Navigation/ProfileStack';

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
      
        <Stack.Screen name='AuthStack' options={{ headerShown: false }} component={AuthStack} />
        <Stack.Screen name='AppStack' options={{ headerShown: false }} component={AppStack} />
        <Stack.Screen name='CouponStack' options={{ headerShown: false }} component={CouponStack} />
        <Stack.Screen name='HomeStack' options={{ headerShown: false }} component={HomeStack} />
        <Stack.Screen name='ProfileStack' options={{ headerShown: false }} component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
