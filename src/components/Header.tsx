import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {texts} from '../constants/text';
import {colors} from '../constants/colors';
import IndexModal from './Modal';
import FlashMessage, {showMessage} from 'react-native-flash-message';

function Header(props: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [niftyValue, setNiftyValue] = useState(true);
  const [sensexValue, setSenSexValue] = useState(true);
  const [otherValue, setOtherValue] = useState(false);

  useEffect(() => {
    // if(otherValue == true){
    //   setNiftyValue(false)
    // }else if(otherValue == false){
    //   setNiftyValue(true)
    // }
    if (niftyValue && sensexValue && otherValue) {
      showMessage({
        message: 'Information',
        description: 'Please select any two indices',
        type: 'danger',
      });
    }

    console.log('Value', niftyValue, sensexValue, otherValue);
  }, [niftyValue, sensexValue, otherValue]);

  const niftyView = () => {
    return (
      <View style={styles.niftyContainerView}>
        <View>{/* <Text>View1</Text> */}</View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nifty_value_text}>{niftyValue.toString()}</Text>
          <Text style={styles.nifty_value_text}>{texts[17755]}</Text>
          <Text style={styles.niftyValue}>{texts[160]}</Text>
        </View>
      </View>
    );
  };

  const sensexView = () => {
    return (
      <View style={styles.niftyContainerView}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nifty_value_text}>{texts.SENSEX}</Text>
          <Text style={styles.nifty_value_text}>{texts[60397]}</Text>
          <Text style={styles.niftyValue}>{texts[588]}</Text>
        </View>
        <View style={styles.settingsView}>
          <TouchableOpacity>
            <Image
              source={require('../Assets/rupees.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(prev => !prev)}>
            <Image
              source={require('../Assets/settings.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onClose = () => {
    setModalVisible(prev => !prev);
  };

  const changeIndex = (text: any) => {
    switch (text) {
      case 'Nifty':
        setNiftyValue((prevState: any) => !prevState);
        break;
      case 'SenSex':
        setSenSexValue((prevState: any) => !prevState);
        break;
      case 'Other':
        setOtherValue((prevState: any) => !prevState);
        break;

      default:
        null;
    }
  };

  return (
    <>
      <IndexModal
        visible={modalVisible}
        onClose={onClose}
        changeIndex={changeIndex}
        niftyValue={niftyValue}
        sensexValue={sensexValue}
        otherValue={otherValue}
      />
      <View style={styles.container}>
        <View style={styles.headerView}>
          {niftyView()}
          {sensexView()}
        </View>
        <FlashMessage
          position={'top'}
          animated={true}
          animationDuration={1000}
          floating={true}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
  },
  nifty_value_text: {
    fontWeight: 'bold',
    color: colors.black,
  },
  niftyValue: {
    color: colors.bright_green,
  },
  niftyContainerView: {
    borderRightWidth: 1,
    borderRightColor: colors.grey,
    width: '50%',
    height: '350%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '1%',
  },
  settingsView: {
    height: '100%',
    justifyContent: 'space-around',
  },
  image: {
    height: 20,
    width: 20,
  },
  headerView: {
    flexDirection: 'row',
    height: '30%',
  },
});

export default Header;
