import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import Avatar from "../screens/Avatar";
import Message from "../screens/Message";
import Library from "../screens/Library";
import Moon from "../screens/Moon";

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // headerLeft: () => (
        //   <TouchableOpacity style={{ paddingLeft: 30 }}>
        //     <Feather name="menu" color={"#8B97A8"} size={20} />
        //   </TouchableOpacity>
        // ),
        // headerRight: () => (
        //   <TouchableOpacity style={{ paddingRight: 30 }}>
        //     <Feather name="settings" color={"#8B97A8"} size={20} />
        //   </TouchableOpacity>
        // ),
        headerTitleStyle: {
          color: "#595085",
        },
        tabBarActiveTintColor: "#403572",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Avatar"
        component={Avatar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-square" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Moon"
        component={Moon}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="moon" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootStack;
