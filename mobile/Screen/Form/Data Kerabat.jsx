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
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';

const DataKerabat = () => {
  const [pertanyaan1, setPertanyaan1] = useState('');
  const [pertanyaan2, setPertanyaan2] = useState('');
  const [pertanyaan3, setPertanyaan3] = useState('');
  const [pertanyaan4, setPertanyaan4] = useState('');
  const [pertanyaan5, setPertanyaan5] = useState('');
  const [pertanyaan6, setPertanyaan6] = useState('');
  const [pertanyaan7, setPertanyaan7] = useState('');
  const [pertanyaan8, setPertanyaan8] = useState('');

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Data Kerabat</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Lengkap</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            onChangeText={() => {}}
            placeholder="Input Nama"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor KTP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            onChangeText={() => {}}
            placeholder="Input Nomor KTP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Tempat Lahir</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Tempat Lahir"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Tanggal Lahir</Text>
        <View style={style.border}>
          <Button title="Pilih Tanggal" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              // this.setDate({date:date})
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
        <Text style={style.pertanyaan}>Nomor Handphone</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input No.HP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor NPWP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input NPWP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Tempat Tinggal Saat ini</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.container2}>
        <View style={style.container}>
          <Text style={style.pertanyaan}>RT</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              onChangeText={() => {}}
              placeholder="RT"
            />
          </View>
        </View>
        <View style={style.container}>
          <Text style={style.pertanyaan}>RW</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              onChangeText={() => {}}
              placeholder="RW"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Provinsi</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Kab/Kot"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kab/Kota</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Kab/Kot"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kecamatan</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Kecamatan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kode Post</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Kode Post"
          />
        </View>
      </View>

      <View style={style.simpanLanjut}>
        <TouchableOpacity style={style.simpanForm}>
          <Text style={style.simpanForm}>Simpan Formulir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnLanjut}>
          <Text style={style.btn}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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

export default DataKerabat;
