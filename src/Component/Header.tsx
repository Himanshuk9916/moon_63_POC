import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {texts} from '../constants/text';
import {colors} from '../constants/colors';

function Header() {
  const niftyView = () => {
    return (
      <View style={styles.niftyContainerView}>
        <View>{/* <Text>View1</Text> */}</View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nifty_value_text}>{texts.NIFTY_50}</Text>
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
        <View style={{height: '100%', justifyContent: 'space-around'}}>
          <TouchableOpacity>
            <Image
              source={require('../Assets/rupees.png')}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../Assets/settings.png')}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', height: '30%'}}>
        {niftyView()}
        {sensexView()}
      </View>
    </View>
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
});

export default Header;
