import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen, DetailScreen } from "../Containers";

const Tab = createBottomTabNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Detail" component={DetailScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
