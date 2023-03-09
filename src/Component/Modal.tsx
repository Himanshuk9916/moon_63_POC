import React, {useEffect, useState} from 'react';
import {View, Text, Modal, Alert, StyleSheet, FlatList} from 'react-native';
import CheckBox from 'react-native-check-box';

function IndexModal(props: any) {
  const [nifty, setNifty] = useState(props.nifty);
  const [senSex, setSenSex] = useState(props.sensex);
  const [other, setOther] = useState(true);

  const updateState = (text: any) => {
    switch (text) {
      case 'Nifty':
        setNifty((prev:any) => !prev);
        return props.getData(text, !nifty);
      case 'SenSex':
        setSenSex((prev:any) => !prev);
        return props.getData(text, !senSex);
      case 'Other':
        setOther(!other);
        return props.getData(text, other);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View
        style={[
          {
            position: 'absolute',
            top: 200,
            bottom: 200,
            left: 50,
            right: 50,
            backgroundColor: 'white',
            borderRadius:30,
            borderWidth:1,
            justifyContent: 'space-around',
            padding: 10,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Nifty</Text>
          <CheckBox
            onClick={() => {
              updateState('Nifty');
            }}
            isChecked={nifty}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Sensex</Text>
          <CheckBox
            onClick={() => {
              updateState('SenSex');
            }}
            isChecked={senSex}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Other</Text>
          <CheckBox
            onClick={() => {
              updateState('Other');
            }}
            isChecked={!other}
          />
        </View>
      </View>
    </Modal>
  );
}

export default IndexModal;
