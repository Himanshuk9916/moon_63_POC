import React from "react";
import {View,Text,TextInput, StyleSheet,Image, TouchableOpacity} from 'react-native';

const CustomInput=(props:any)=>{
    return(
        <View style={styles.main}>
            {props.leftIcon && 
            <View style={{width:25,height:25,backgroundColor:'yellow'}}></View>
            }
            <TextInput 
            placeholder={props.placeholder}
            style={props.style? props.style: styles.input}
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            />
            {props.rightIcon && 
            <TouchableOpacity onPress={props.onPress} style={styles.rightIconContainer}>
            <Image source={props.rightIcon} style={styles.leftIcon}/>
            </TouchableOpacity>
            }
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    input:{
    width:'85%'
    },
    leftIcon:{
        height:20,
        width:20
    },
    rightIconContainer:{
        // justifyContent:'flex-end',
    }
})

export default CustomInput;