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
  TouchableOpacity,
} from 'react-native';

const Register = () => {
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
      <TextInput placeholder="Masukkan Password" style={registerstyles.input} />
      <Text style={registerstyles.teksInput}>Ulangi Password</Text>
      <TextInput placeholder="Masukkan Password" style={registerstyles.input} />
      <TouchableOpacity style={{paddingTop: 20}}>
        <Button
          color="#C2C2C2"
          style={registerstyles.btnDaftar}
          title="Daftar"
        />
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: 'center', paddingTop: 20}}>
        <Text
          style={registerstyles.linkingTeks}
          onPress={() => Linking.openURL('http://google.com')}>
          Sudah Punya Akun? Masuk
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const registerstyles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  teksInput: {
    fontSize: 12,
    color: '#888888',
    paddingBottom: 12,
    paddingTop: 16,
  },
  btnDaftar: {
    color: '#C2C2C2',
    borderRadius: 9,
    flex: 1,
    height: 48,
  },
  linkingTeks: {
    paddingTop: 11,
    color: '#500878',
    textDecorationLine: 'underline',
    paddingBottom: 36,
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
});
export default Register;
