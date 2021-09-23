import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import DatePicker from 'react-native-date-picker';
import React, {useState, Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import axios from 'axios';

function DataPembiayaanForm(props) {
  const [jumlah_pembiayaan, setJumlah_Pembiayaan] = useState('');
  const [angsuran, setAngsuran] = useState('');
  const [jatuh_tempo, setDate] = React.useState(new Date());
  const [jenis_pembiayaan, setJenis_Pembiayaan] = useState('');
  const [nama_kreditur, setNama_Kreditur] = useState('');

  const [open, setOpen] = useState(false);

  const {navigation} = props;

  const handleNext = () => {
    const getIdUser = 11;

    axios({
      url:
        'http://10.80.247.58:4000/api/data_pembiayaan/update_form_data_pembiayaan/' +
        getIdUser,
      method: 'PUT',
      data: {
        jumlah_pembiayaan,
        angsuran,
        jatuh_tempo,
        jenis_pembiayaan,
        nama_kreditur,
      },
    })
      .then(response => {
        console.log(response);
        navigation.navigate('UploadDocument');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jumlah Pembiayaan</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={jumlah_pembiayaan}
            onChangeText={itemValue1 => setJumlah_Pembiayaan(itemValue1)}
            placeholder="Input Angka dengan satuan Rp. (ex: 500000000)"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Angsuran</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={angsuran}
            onChangeText={itemValue3 => setAngsuran(itemValue3)}
            placeholder="Input Angka dalam satuan bulan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jatuh tempo</Text>
        <View style={style.border}>
          <Button title="Pilih Tanggal" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={jatuh_tempo}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              console.log(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Pembiayaan</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={jenis_pembiayaan}
            onChangeText={itemValue4 => setJenis_Pembiayaan(itemValue4)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Kreditur</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_kreditur}
            onChangeText={itemValue5 => setNama_Kreditur(itemValue5)}
            placeholder="Input Nama Kreditur"
          />
        </View>
      </View>

      <View style={style.simpanLanjut}>
        <TouchableOpacity style={style.simpanForm}>
          <Text style={style.simpanForm}>Simpan Formulir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnLanjut} onPress={() => handleNext()}>
          <Text style={style.btn}>Lanjut</Text>
        </TouchableOpacity>
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
  dropdown: {
    borderWidth: 1,
    borderRadius: 9,
  },
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
    flexDirection: 'row',
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
  btnLanjut: {
    // paddingLeft: 50
    borderRadius: 9,
    padding: 10,
    flex: 0.2,
    alignItems: 'center',
    backgroundColor: '#500878',
    justifyContent: 'center',
    marginRight: -200,
  },
  btn: {
    fontSize: 25,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    color: 'white',
  },
});

export default DataPembiayaanForm;
