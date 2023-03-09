import React, {useEffect, useState} from 'react';
import {View, Text, FlatList,TouchableOpacity, LogBox} from 'react-native';
import Header from '../Component/Header';
import {colors} from '../constants/colors';

LogBox.ignoreAllLogs()

function StockDetails() {
  const [stockData, setStockData] = useState<any>();

  useEffect(() => {
    pushStockData();
  }, []);

  const componentHeaderBlock = () => {
    return (
      <View
        style={{
          height: '7%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          alignItems: 'center',
          backgroundColor:'yellow'
        }}>
        <View>
          <Text>NOR</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text>Extra</Text>
          <TouchableOpacity style={{borderWidth:1,borderRadius:20}}>
            <Text style={{paddingHorizontal:10,paddingVertical:5}}>Add</Text>
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

  const anyFunction=()=>{
    console.log('Any Function Passed')
  }


  return (
    <View style={{flex: 1}}>
      <Header anyFunction={anyFunction} />
      {componentHeaderBlock()}
      <View style={{height: 500}}>
        <FlatList
          data={stockData}
          renderItem={({item}) => (
            <View
              style={{
                height: 50,
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>{item.companyName}</Text>
                <Text style={{fontSize: 12, marginLeft: 5}}>{item.index}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text
                    style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
                    {item.value}
                  </Text>
                  <Text
                    style={{
                      color: colors.bright_green,
                    }}>{`${item.dayValue}(+${item.percentage}%)`}</Text>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    height: 30,
                    width: 30,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>T</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default StockDetails;
