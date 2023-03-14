import React, {useEffect, useState,useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text, FlatList, TouchableOpacity, LogBox} from 'react-native';
import Header from '../components/Header';
import {colors} from '../constants/colors';
import {texts} from '../constants/text';

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
            <Image source={require('../Assets/filter.png')} style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../Assets/options.png')} style={styles.icon}/>
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
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
          data={stockData}
          renderItem={({item}) => (
            <View style={styles.stock}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>{item.companyName}</Text>
                <Text style={styles.index}>{item.index}</Text>
              </View>
              <View style={styles.stockContainer}>
                <View>
                  <Text style={styles.stockPriceText}>{item.value}</Text>
                  <Text
                    style={{
                      color: colors.bright_green,
                    }}>{`${item.dayValue}(+${item.percentage}%)`}</Text>
                </View>
                <View style={styles.endT}>
                  <Text style={styles.endTtext}>T</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stock: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endT: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  endTtext: {
    fontWeight: 'bold',
    color: 'black',
  },
  stockPriceText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  index: {
    fontSize: 12,
    marginLeft: 5,
  },
  headerComponentView: {
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  addText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  notificationView:{
    height:25,
    width:25,
    borderRadius:12.5,
    backgroundColor:'orange'
  },
  icon:{
    height:25,
    width:25
  },
  headerFlexEndView:{
    flexDirection:'row',
    width:150,
    justifyContent:'space-between',
    alignItems:'center'
  }
});

export default StockDetails;
