import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../Constants/navigationStrings'
import { ChangePassword, PrivacyPolicy, TermsAndConditions , ProfileScreen, EditProfile} from '../Screens';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'transparent' },
        animation: 'simple_push',
      }}
      initialRouteName={navigationStrings.PROFILE}>
      <Stack.Screen
        name={navigationStrings.PROFILE}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.CHANGE_PASSWORD}
        component={ChangePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.PRIVACY_POLICY}
        component={PrivacyPolicy}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

