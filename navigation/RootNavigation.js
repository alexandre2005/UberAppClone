import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../screens/loginscreen';
import OtpVerificationScreen from "../screens/OtpVerificationScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Services from "../screens/Services";
import Activity from "../screens/Activity";
import Account from "../screens/Account";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const RootNavigation = () => {

    const stack = createStackNavigator()

    function BottomTabs(){

        const Tabs = createBottomTabNavigator()

        return(
            <Tabs.Navigator screenOptions={({routes}) => ({
                tabBarHideOnKeyboard:true,
                tabBarStyle:{height: 70}
            })}>
                <Tabs.Screen name="Home" component={HomeScreen} options={{ headerShown:false, 
                    tabBarIcon:({focused})=>
                    focused ? (
                       <MaterialCommunityIcons name="home" size={24} color="black" />
                    ) : (
                       <MaterialCommunityIcons name="home-outline" size={24} color="gray" />
                    ),
                    tabBarLabel:({focused}) => 
                    focused ? (
                       <Text style={{ marginBottom: 10, fontWeight: '500' }}>Home</Text>
                    ) : (
                       <Text style={{ marginBottom: 10, color: '#aaa' }}>Home</Text>
                    ),
                 }}      
                />
                <Tabs.Screen name="Services" component={Services} options={{ headerShown:false,
                tabBarIcon:({focused})=>
                    focused ? (
                       <MaterialCommunityIcons name="dots-horizontal-circle" size={24} color="black" />
                    ) : (
                       <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="gray" />
                    ),
                    tabBarLabel:({focused}) => 
                    focused ? (
                       <Text style={{ marginBottom: 10, fontWeight: '500' }}>Services</Text>
                    ) : (
                       <Text style={{ marginBottom: 10, color: '#aaa' }}>Services</Text>
                    ),
                 }}
                />
                <Tabs.Screen name="Activity" component={Activity} options={{ headerShown:false,
                tabBarIcon:({focused})=>
                    focused ? (
                       <MaterialCommunityIcons name="equalizer" size={24} color="black" />
                    ) : (
                       <MaterialCommunityIcons name="equalizer-outline" size={24} color="gray" />
                    ),
                    tabBarLabel:({focused}) => 
                    focused ? (
                       <Text style={{ marginBottom: 10, fontWeight: '500' }}>Activity</Text>
                    ) : (
                       <Text style={{ marginBottom: 10, color: '#aaa' }}>Activity</Text>
                    ),
                 }}
                />
                <Tabs.Screen name="Account" component={Account} options={{ headerShown:false,
                tabBarIcon:({focused})=>
                    focused ? (
                       <FontAwesome name="user-circle" size={24} color="black" />
                    ) : (
                       <FontAwesome name="user-circle-o" size={24} color="gray" />
                    ),
                    tabBarLabel:({focused}) => 
                    focused ? (
                       <Text style={{ marginBottom: 10, fontWeight: '500' }}>Account</Text>
                    ) : (
                       <Text style={{ marginBottom: 10, color: '#aaa' }}>Account</Text>
                    ),
                 }}
                />
            </Tabs.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }}/>
                <stack.Screen name="OtpVerify" component={OtpVerificationScreen} options={{ headerShown:false }}/>
                <stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown:false }}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})