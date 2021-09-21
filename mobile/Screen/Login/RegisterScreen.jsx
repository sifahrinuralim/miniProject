import React, {useState} from 'react';
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
  TouchableOpacity,
} from 'react-native';

function Register(props) {
  const {navigation} = props;
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={registerstyles.container}>
      <Text style={registerstyles.text}>Daftar</Text>
      <Text style={registerstyles.teksInput}>Nama Lengkap</Text>
      <TextInput
        placeholder="Masukkan Nama Lengkap"
        style={registerstyles.input}
      />
      <Text style={registerstyles.teksInput}>Email</Text>
      <TextInput placeholder="Masukkan Email" style={registerstyles.input} />
      <Text style={registerstyles.teksInput}>Password</Text>
      <TextInput
        placeholder="Masukkan Password"
        secureTextEntry={hidePass ? true : false}
        style={registerstyles.input}
      />
      <Text style={registerstyles.teksInput}>Ulangi Password</Text>
      <TextInput
        placeholder="Masukkan Password"
        secureTextEntry={hidePass ? true : false}
        style={registerstyles.input}
      />
      <View style={{paddingTop: 30}}>
        <TouchableOpacity
          style={registerstyles.btnMasuk}
          onPress={() => navigation.navigate('PendaftaranBerhasil')}>
          <Text style={registerstyles.btnTeks}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{alignItems: 'center', paddingTop: 20}}>
        <Text
          style={registerstyles.linkingTeks}
          onPress={() => navigation.navigate('Login')}>
          Sudah Punya Akun? Masuk
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const registerstyles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  teksInput: {
    fontSize: 18,
    color: '#888888',
    paddingBottom: 12,
    paddingTop: 16,
  },
  btnDaftar: {
    color: '#500878',
    borderRadius: 10,
    flex: 1,
    height: 48,
  },
  linkingTeks: {
    paddingTop: 11,
    color: '#500878',
    textDecorationLine: 'underline',
    paddingBottom: 36,
    fontSize: 18,
  },
  text: {
    fontSize: 24,
    color: '#500878',
    height: 54,
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    color: '#888888',
    fontSize: 15,
  },
  btnTeks: {
    padding: 10,
    color: '#f4f4f4',
    fontSize: 20,
  },
  btnMasuk: {
    borderRadius: 9,
    height: 48,
    backgroundColor: '#500878',
    alignItems: 'center',
  },
});
export default Register;
