import React,{useState} from "react";
import {View,Text} from 'react-native';
import DashBoard from "./src/Screens/DashBoard";
import StockDetails from "./src/Screens/StockDetails";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

function App(){

  return(
    <NavigationContainer>
    <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default App;