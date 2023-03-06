import React, {useEffect, useState,useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import axios from 'axios';
import { texts } from '../constants/text';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function DashBoard() {
  const [userDataList, setUserDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then(res => {
        console.log('Response', res.data.data);
        setUserDataList(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error', err);
      });
  };


  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color="blue" />
      ) : (
        <View style={{flex: 1,backgroundColor:'white'}}>
          <View
            style={styles.flatListView}>
            <Text style={styles.userText}>
              {texts.USERS_LISTS}
            </Text>
          </View>
          <FlatList
            data={userDataList}
            renderItem={({item, index}) => (
              <View style={styles.cardView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Image
                    source={{uri: item.avatar}}
                    style={styles.image}
                  />
                  <View
                    style={{
                      justifyContent: 'space-around',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text style={styles.text}>{item.first_name}</Text>
                      <Text style={styles.text}>{item.last_name}</Text>
                    </View>
                    <Text style={styles.text}>{item.email}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    height: 150,
    width: screenWidth - 30,
    justifyContent: 'center',
    backgroundColor: '#F0FFFF',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 30,
  },
  text: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  extra:{
    padding:20,
    borderWidth:1
  },
  image:{
    height: 100, 
    width: 100, 
    borderRadius: 100 / 2
  },
  userText:{
    fontSize: 20, 
    fontWeight: 'bold', 
    color: 'black'
  },
  flatListView:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  }
});

export default DashBoard;
