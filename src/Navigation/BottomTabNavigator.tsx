import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StockDetails from '../Screens/StockDetails';
import Screen2 from '../Screens/extra/Screen2';
import Screen3 from '../Screens/extra/Screen3';
import Screen4 from '../Screens/extra/Screen4';
import Screen5 from '../Screens/extra/Screen5';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="StockDetails"
        component={StockDetails}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/watchlist.png')}
                style={styles.image}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/market.png')}
                style={styles.image}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <Image
                source={require('../Assets/search.png')}
                style={styles.image}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/orders.png')}
                style={styles.image}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Screen5"
        component={Screen5}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../Assets/portfolio.jpeg')}
                style={styles.image}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    marginBottom: 40,
    backgroundColor: '#e8f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    transform: [{rotate: '-30deg'}],
  },
  image:{
    height:25,
    width:25
  }
});

export default BottomTabNavigator;
