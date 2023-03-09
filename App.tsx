import React,{useState} from "react";
import {View,Text} from 'react-native';
import DashBoard from "./src/Screens/DashBoard";
import StockDetails from "./src/Screens/StockDetails";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/navigationPackage/tabNvaigation";
import SampleContext,{data} from "./src/context/Context";

function App(){
  const [s1,setS1]=useState(false)
  const [s2,setS2]=useState(false)
  const [s3,setS3]=useState(false)

  return(
    <SampleContext.Provider value={data}>
    <TabBar />
    </SampleContext.Provider>
  )
}

export default App;