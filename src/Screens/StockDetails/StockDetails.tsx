import React, {useEffect, useState,useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text, FlatList, TouchableOpacity, LogBox} from 'react-native';
import Header from '../../components/Header';
import StockDetailsList from '../../components/StockDetailsList';
import {colors} from '../../constants/colors';
import {texts} from '../../constants/text';
import {styles} from './StockDetailsStyles'

LogBox.ignoreAllLogs();

function StockDetails() {
  const [stockData, setStockData] = useState<any>();

  useEffect(() => {
    pushStockData();
  }, []);

  const componentHeaderBlock = () => {
    return (
      <View style={styles.headerComponentView}>
        <View>
          <TouchableOpacity ><Text>{texts.NOR}</Text></TouchableOpacity>
        </View>
        <View style={styles.headerFlexEndView}>
          <TouchableOpacity style={styles.notificationView}>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth: 1, borderRadius: 20}}>
            <Text style={styles.addText}>{texts.ADD}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../Assets/filter.png')} style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../Assets/options.png')} style={styles.icon}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const pushStockData = () => {
    let StockArraydata = [];
    for (let i = 0; i < 20; i++) {
      StockArraydata.push({
        companyName: Math.floor(Math.random()*99),
        index: 'NSE',
        value: Math.floor(Math.random()*999),
        dayValue: '35.15',
        percentage: '1.65',
        id: i,
      });
    }
    setStockData(StockArraydata);
  };

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }:any) => {
    // console.log("Visible items are", viewableItems);
    // console.log("Changed in this iteration", changed);
}, []);

const _viewabilityConfig = {
    itemVisiblePercentThreshold: 50
}

  return (
    <View style={{flex: 1}}>
      <Header />
      {componentHeaderBlock()}
      <View style={{height: 500}}>
        <FlatList
        // onViewableItemsChanged={onViewableItemsChanged}
        // viewabilityConfig={_viewabilityConfig}
          data={stockData}
          renderItem={({item}) => (
            <StockDetailsList 
            index={item.index}
            companyName={item.companyName}
            value={item.value}
            dayValue={item.dayValue}
            percentage={item.percentage}
            endtext={item.endtext}
            />
          )}
        />
      </View>
    </View>
  );
}


export default StockDetails;
