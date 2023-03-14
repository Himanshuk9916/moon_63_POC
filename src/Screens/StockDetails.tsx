import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, FlatList, TouchableOpacity, LogBox} from 'react-native';
import Header from '../Component/Header';
import {colors} from '../constants/colors';

LogBox.ignoreAllLogs();

function StockDetails() {
  const [stockData, setStockData] = useState<any>();

  useEffect(() => {
    pushStockData();
  }, []);

  const componentHeaderBlock = () => {
    return (
      <View
        style={styles.headerComponentView}>
        <View>
          <Text>NOR</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Extra</Text>
          <TouchableOpacity style={{borderWidth: 1, borderRadius: 20}}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const pushStockData = () => {
    let StockArraydata = [];
    for (let i = 0; i < 20; i++) {
      StockArraydata.push({
        companyName: 'AKZOINDIA',
        index: 'NSE',
        value: '2221.00',
        dayValue: '35.15',
        percentage: '1.65',
        id: i,
      });
    }
    setStockData(StockArraydata);
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      {componentHeaderBlock()}
      <View style={{height: 500}}>
        <FlatList
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
  index:{
    fontSize: 12, marginLeft: 5
  },
  headerComponentView:{
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  addText:{
    paddingHorizontal: 10, paddingVertical: 5
  }
});

export default StockDetails;
