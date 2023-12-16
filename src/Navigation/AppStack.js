import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import navigationStrings from '../Constants/navigationStrings'
import { Notifications} from '../Screens'
import HomeStack from './HomeStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabbarComp from '../components/TabbarComp'
import CouponStack from './CouponStack'
import ProfileStack from './ProfileStack'

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
          name={'Home'}
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Coupons'}
          component={CouponStack}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={navigationStrings.NOTIFICATIONS}
          component={Notifications}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name={'Profile'}
          component={ProfileStack}
          options={{headerShown: false}}
        />
        
      </Tab.Navigator>
    );
  };