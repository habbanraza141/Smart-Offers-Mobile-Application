import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../Constants/navigationStrings'
import {Home, Coupons, Notifications, Profile} from '../Screens'
import HomeStack from './HomeStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabbarComp from '../components/TabbarComp'

const Tab = createBottomTabNavigator();

  export default function AppStack ()  {
    return (
      <Tab.Navigator
        tabBar={props => <TabbarComp {...props} />}
        screenOptions={{
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
          drawerType: 'front',
          drawerStyle: {width: '90%', backgroundColor: 'transparent'},
        }}
        initialRouteName="HomeStack"
        drawerContent={props => <DrawerCustom {...props} />}>
        <Tab.Screen
          name={navigationStrings.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={navigationStrings.COUPONS}
          component={Coupons}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={navigationStrings.NOTIFICATIONS}
          component={Notifications}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={navigationStrings.PROFILE}
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };