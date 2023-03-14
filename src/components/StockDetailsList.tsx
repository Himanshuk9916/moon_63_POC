import React  from "react";
import {View,Text} from 'react-native';
import { colors } from "../constants/colors";
import {styles} from '../screens/StockDetails/StockDetailsStyles'

function StockDetailsList(props:any){
    return(
        <View style={styles.stock}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold',fontSize:20,color:colors.black}}>{props.companyName}</Text>
          <Text style={styles.index}>{props.index}</Text>
        </View>
        <View style={styles.stockContainer}>
          <View>
            <Text style={styles.stockPriceText}>{props.value}</Text>
            <Text
              style={{
                color: colors.bright_green,
                fontWeight:'bold'
              }}>{`${props.dayValue}(+${props.percentage}%)`}</Text>
          </View>
          <View style={styles.endT}>
            <Text style={styles.endTtext}>T</Text>
          </View>
        </View>
      </View>
    )
}

export default StockDetailsList;