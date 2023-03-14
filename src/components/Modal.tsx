import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {texts} from '../constants/text';

function IndexModal(props: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentView}>
          <Text>{texts.NIFTY}</Text>
          <CheckBox
            onClick={() => {
              props.changeIndex('Nifty');
            }}
            isChecked={props.niftyValue}
          />
        </View>
        <View style={styles.modalContentView}>
          <Text>{texts.SENSEX}</Text>
          <CheckBox
            onClick={() => {
              props.changeIndex('SenSex');
            }}
            isChecked={props.sensexValue}
          />
        </View>
        <View style={styles.modalContentView}>
          <Text>{texts.OTHER}</Text>
          <CheckBox
            onClick={() => {
              props.changeIndex('Other');
            }}
            isChecked={props.otherValue}
          />
        </View>
        <Button
          title="Press"
          onPress={() => props.onClose()}
          disabled={props.niftyValue && props.sensexValue && props.otherValue}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 200,
    bottom: 200,
    left: 50,
    right: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  modalContentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default IndexModal;
