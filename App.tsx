import React,{useState} from "react";
import TabBar from "./src/navigationP/TabNavigation";
import {View} from 'react-native';
import Login from "./src/screens/Login/Login";

function App(){

  return(
    <TabBar />
    // <Login /> //uncomment only to check the Login Screen
  )
}

export default App;