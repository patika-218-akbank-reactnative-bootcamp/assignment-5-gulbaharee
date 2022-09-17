import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tabs.Navigator>
  );
};
export default BottomNavigator;
