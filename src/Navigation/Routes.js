import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator ();

export default function Routes() {
  return (
    <NavigationContainer>
        {false? HomeStack(): AuthStack()}
    </NavigationContainer>
  );
}