import React from 'react';
import {
  Linking,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableHighlight,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
// import { useNavigation } from '@react-navigation/core';
function Login(props) {
  const {navigation} = props;
  return (
    <View>
      <View style={loginstyles.container}>
        <Text style={loginstyles.text}>Masuk</Text>
        <Text style={loginstyles.teksInput}>Email</Text>
        <TextInput placeholder="Masukan Email" style={loginstyles.input} />
        <Text style={loginstyles.teksInput}>Password</Text>
        <TextInput placeholder="Masukan Password" style={loginstyles.input} />
        <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
          <Text
            style={loginstyles.linkingTeks}
            onPress={() => Linking.openURL('http://google.com')}>
            Forget Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingTop: 20, borderRadius: 10}}>
          <Button
            color="#500878"
            style={loginstyles.btnMasuk}
            title="Masuk"
            // onPress={() => navigation.navigate('InformasiNasabah')}
            onPress={() => navigation.navigate('DataAngunan')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center', paddingTop: 20}}
          onPress={() => navigation.navigate('Register')}>
          <Text style={loginstyles.linkingTeks}>Daftar Sekarang</Text>
        </TouchableOpacity>

        <Text></Text>
        {/* <Button title="Daftar Sekarang" /> */}
      </View>
      {/* <Text style={loginstyles.text}> Bohir nak front end</Text>
      <Wicak /> */}
    </View>
  );
}

const loginstyles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  headertext: {
    fontSize: 24,
    color: '#494949',
    flexDirection: 'column',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#500878',
    height: 54,
  },
  input: {
    height: 48,
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    color: '#888888',
  },
  teksInput: {
    fontSize: 12,
    color: '#888888',
    paddingBottom: 12,
    paddingTop: 16,
  },
  btnMasuk: {
    color: '#f4f4f4',
    borderRadius: 9,
    height: 48,
    backgroundColor: '#500878',
  },
  linkingTeks: {
    paddingTop: 11,
    color: '#500878',
    textDecorationLine: 'underline',
    paddingBottom: 36,
  },
  btnTeks: {
    // color:
  },
});

export default Login;
