import React from "react";
import {View,Text} from 'react-native';
import Header from "../Component/Header";

function StockDetails(){
    return(
        <View style={{flex:1}}>
            <Header />
        <Text>Stocks Data</Text>
        </View>
    )
}

export default StockDetails;