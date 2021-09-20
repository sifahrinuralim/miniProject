import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, {useState, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {Paragraph, RadioButton, TouchableRipple} from 'react-native-paper';

function InformasiNasabah(props) {
  const {navigation} = props;
  const [pertanyaan1, setPertanyaan1] = useState('');
  const [pertanyaan2, setPertanyaan2] = useState('');
  const [pertanyaan3, setPertanyaan3] = useState('');
  const [pertanyaan4, setPertanyaan4] = useState('');
  const [pertanyaan5, setPertanyaan5] = useState('');
  const [pertanyaan6, setPertanyaan6] = useState('');
  const [pertanyaan7, setPertanyaan7] = useState('');
  const [pertanyaan8, setPertanyaan8] = useState('');

  const [checked, setChecked] = useState('');

  return (
    <ScrollView style={style.container}>
      <Image
        style={style.lpIklan}
        source={require('../../Image/lp3.png')}
        resizeMode="contain"></Image>

      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Apakah Anda nasabah Bank Muamalat</Text>
      </View>

      <TouchableRipple onPress={() => setChecked('Tidak')}>
        <View style={style.container2}>
          <View pointerEvents="none">
            <RadioButton.Android
              value="Tidak"
              status={checked === 'Tidak' ? 'checked' : 'unchecked'}
            />
          </View>
          <Paragraph style={style.RadioButton}>Tidak</Paragraph>
        </View>
      </TouchableRipple>

      <TouchableRipple onPress={() => setChecked('Ya')}>
        <View style={style.container2}>
          <View pointerEvents="none">
            <RadioButton.Android
              value="Tidak"
              status={checked === 'Ya' ? 'checked' : 'unchecked'}
            />
          </View>
          <Paragraph style={style.RadioButton}>Ya</Paragraph>
        </View>
      </TouchableRipple>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor Rekening Bank Muamalat</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Masukkan Nomor Rekening Bank Muamalat"
          />
        </View>
      </View>

      <View style={style.container}>
        <View style={style.simpanLanjut}>
          <TouchableOpacity
            style={style.btnLanjut}
            onPress={() => navigation.navigate('FasilitasPembayaran')}>
            <Text style={style.btn}>Lanjut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    // paddingLeft: 30,
    // paddingRight: 30,
    // marginTop: 50,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    // fontSize: 80,
    flexDirection: 'column',
    // alignItems: 'center'
  },
  kolompertanyaan: {
    marginBottom: 40,
  },
  judul: {
    fontSize: 30,
    marginBottom: 20,
    color: '#500878',
    fontWeight: 'bold',
  },
  pertanyaan: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 20,
  },
  pertanyaanbagi2: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
  },
  dropdown: {},
  placeholder: {
    color: 'grey',
  },
  opsi: {
    color: 'black',
  },
  border: {
    borderWidth: 0.1,
    borderColor: 'black',
    borderRadius: 8,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
  },
  inputbagi2: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 150,
    marginRight: 50,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
  },
  container2: {
    flexDirection: 'row',
    marginBottom: 30,

    // backgroundColor: '#E5E5E5'
  },
  simpanLanjut: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  simpanForm: {
    // alignItems: "flex-end",
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    flex: 0.5,
    // marginRight: 0,
    color: '#500878',
  },
  RadioButton: {
    // alignItems: "flex-end",
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    flex: 0.5,
    marginLeft: 20,
    marginTop: 10,
    // color: '#500878',
  },
  btnLanjut: {
    // padding: 50,
    borderRadius: 9,
    padding: 10,
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: '#500878',
    justifyContent: 'center',
    marginLeft: 100,
  },
  btn: {
    fontSize: 25,
    // flexDirection: 'row-reverse',
    // alignItems: 'flex-end',
    color: 'white',
  },
  lpIklan: {
    // position: 'absolute',
    // flex: 1,
    height: 400,
    width: null,
    // top: 91,
  },
});

export default InformasiNasabah;
