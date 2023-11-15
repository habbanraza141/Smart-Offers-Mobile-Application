import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Profile, Booking } from '../Screens';
import navigationStrings from '../Constants/navigationStrings';
import imagePath from '../Constants/imagePath';
import colors from '../styles/colors';

const BottomTab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <BottomTab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarInactiveTintColor: colors.blackOpacity50,
            tabBarActiveTintColor: colors.themeColor
        }} >
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                            <Image style={{
                                tintColor: focused ? colors.themeColor : colors.blackOpacity50
                            }}
                                source={imagePath.home} />
                        )
                    }
                }} />

            <BottomTab.Screen
                name={navigationStrings.BOOKING}
                component={Booking}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{
                                tintColor: focused ? colors.themeColor : colors.blackOpacity50
                            }}
                                source={imagePath.booking} />
                        )
                    }
                }} />

            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{
                                tintColor: focused ? colors.themeColor : colors.blackOpacity50
                            }}
                                source={imagePath.profile} />
                        )
                    }
                }} />

        </BottomTab.Navigator>
    )
}