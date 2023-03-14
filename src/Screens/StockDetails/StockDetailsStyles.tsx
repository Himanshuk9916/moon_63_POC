import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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