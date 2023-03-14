import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity as Touch,
  Alert,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {texts} from '../../constants/text';
import alignment from '../../utils/alignment';
import styles from './LoginStyle';
import {colors} from '../../constants/colors';
import { regex } from '../../constants/regex';

function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [valid,setValid]=useState(true);
  const [securePassword,setSecurePassword]=useState(true)

  const validateAndProceed=(userName:any,password:any)=>{
    if(userName!=='' && regex.password.test(password)){
        setValid(false)
        Alert.alert('Success')
    }else{
        setValid(true)
        Alert.alert('Check password')
    }
  }

  const newUserSignUpView = () => {
    return (
      <View style={styles.newUserSignupContainer}>
        <Text style={{color: 'white'}}>New User?</Text>
        <View style={{...alignment.row_spacebtn}}>
          <View style={{width: 220}}>
            <Text style={{color: colors.white}}>{texts.SIGNUP_INFO}</Text>
          </View>
          <Touch style={styles.singUpButton}>
            <Text style={{paddingHorizontal: 40}}>{texts.SIGNUP}</Text>
          </Touch>
        </View>
      </View>
    );
  };

  const onClose=()=>{
    setModalVisible((prevState)=>!prevState)
  }

  return (
    <SafeAreaView style={modalVisible?styles.containerBlur:styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.loginTextHeader}>WAVE 2.0</Text>
        <Text style={styles.loginTextHeader}>{texts.LOGIN}</Text>
      </View>

      <View style={styles.inputView}>
        <CustomInput placeholder="Username" 
        onChangeText={setUserName}
        />
        <CustomInput
          rightIcon={require('../../Assets/password.png')}
          placeholder="Password"
          secureTextEntry={securePassword}
          onChangeText={setPassword}
          onPress={()=>setSecurePassword(!securePassword)}
        />
      </View>

      <View style={{paddingBottom: '20%', height: '40%'}}>
        <View style={styles.signUpView}>
          <Touch style={styles.loginButton} onPress={()=>validateAndProceed(userName,password)} disabled={valid}>
            <Text style={styles.loginText}>{texts.LOGIN}</Text>
          </Touch>
          <Touch style={null}>
            <Text style={styles.forgotPText}>{`${texts.FORGOT_PASS} ?`}</Text>
          </Touch>
        </View>
        <View style={{...alignment.row, marginVertical: 15}}>
          <Text>{texts.NOT_REGISTERED}</Text>
          <Touch>
            <Text style={styles.registerText}>{texts.REGISTER}</Text>
          </Touch>
        </View>
        <View>{newUserSignUpView()}</View>
      </View>

      <View>
        <Text>{texts.EXCHANGES}</Text>
        <View style={{...alignment.row_spacebtn}}>
          <Touch onPress={() => setModalVisible(true)}>
            <Text style={styles.forgotPText}>{texts.TIMINGS}</Text>
          </Touch>
          <Touch>
            <Text style={styles.forgotPText}>{texts.ABOUT_US}</Text>
          </Touch>
          <Touch>
            <Text style={styles.forgotPText}>{texts.MEMBERSHIP}</Text>
          </Touch>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
