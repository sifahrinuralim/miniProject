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

const Login = () => {
  return (
    <View>
      {/* <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          iconStyle: {color: '#fff'},
        }}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      /> */}
      {/* <View style={loginstyles.headertext}>
        <Text>Pengajuan tes KPR</Text>
      </View> */}

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
        <TouchableOpacity>
          <Button color="#C2C2C2" style={loginstyles.btnMasuk} title="Masuk" />
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', paddingTop: 20}}>
          <Text
            style={loginstyles.linkingTeks}
            onPress={() => Linking.openURL('http://google.com')}>
            Daftar Sekarang
          </Text>
        </TouchableOpacity>

        <Text></Text>
        {/* <Button title="Daftar Sekarang" /> */}
      </View>
      {/* <Text style={loginstyles.text}> Bohir nak front end</Text>
      <Wicak /> */}
    </View>
  );
};

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
    backgroundColor: '#F4F4F4',
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
    color: '#C2C2C2',
    borderRadius: 9,
    // width: 328,
    height: 48,
  },
  linkingTeks: {
    paddingTop: 11,
    color: '#500878',
    textDecorationLine: 'underline',
    paddingBottom: 36,
  },
});

export default Login;
