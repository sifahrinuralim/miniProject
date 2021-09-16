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

function DataAngunan(props) {
  const [pertanyaan1, setPertanyaan1] = React.useState('Pilih Opsi');
  const [pertanyaan2, setPertanyaan2] = React.useState('Pilih Opsi');
  const [pertanyaan3, setPertanyaan3] = React.useState('Pilih Opsi');
  const [pertanyaan4, setPertanyaan4] = React.useState('Pilih Opsi');
  const [pertanyaan5, setPertanyaan5] = React.useState('Pilih Opsi');
  const [pertanyaan6, setPertanyaan6] = React.useState(null);
  const [pertanyaan7, setPertanyaan7] = React.useState('Pilih Opsi');
  const [pertanyaan8, setPertanyaan8] = React.useState('Pilih Opsi');
  const {navigation} = props;
  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Angunan</Text>
        <View style={style.dropdown}>
          <Picker /*pertanyaan1={pertanyaan1}*/
          // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
          >
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item style={style.opsi} label="Rumah" value="Rumah" />
            <Picker.Item
              style={style.opsi}
              label="Apartemen/Rusun"
              value="Apartemen/Rusun"
            />
            <Picker.Item
              style={style.opsi}
              label="Ruko/Rukan"
              value="Ruko/Rukan"
            />
            <Picker.Item style={style.opsi} label="Kavling" value="Kavling" />
          </Picker>
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Status Kepemilikan</Text>
        <View style={style.dropdown}>
          <Picker /*pertanyaan1={pertanyaan1}*/
          // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
          >
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item style={style.opsi} label="SHM" value="SHM" />
            <Picker.Item style={style.opsi} label="SHGB" value="SHGB" />
            <Picker.Item
              style={style.opsi}
              label="Strata Title/SMHRIS"
              value="Strata Title/SMHRIS"
            />
          </Picker>
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Status Angunan</Text>
        <View style={style.dropdown}>
          <Picker /*pertanyaan1={pertanyaan1}*/
          // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
          >
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Ditinggali"
              value="Ditinggali"
            />
            <Picker.Item
              style={style.opsi}
              label="Disewakan"
              value="Disewakan"
            />
            <Picker.Item style={style.opsi} label="Kosong" value="Kosong" />
          </Picker>
        </View>
      </View>

      <View style={style.container2}>
        <View style={style.container}>
          <Text style={style.pertanyaan}>Luas Tanah</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={style.inputLuas}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              placeholder="input"
            />
            <Text style={style.textLuas}>m2</Text>
          </View>
        </View>
        <View style={style.container}>
          <Text style={style.pertanyaan}>Luas Bangunan</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={style.inputLuas}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              placeholder="input"
            />
            <Text style={style.textLuas}>m2</Text>
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kondisi Bangunan</Text>
        <View style={style.dropdown}>
          <Picker /*pertanyaan1={pertanyaan1}*/
          // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
          >
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Siap Huni"
              value="Siap Huni"
            />
            <Picker.Item
              style={style.opsi}
              label="Dalam Proses Pembuatan"
              value="Dalam Proses Pembuatan"
            />
            <Picker.Item style={style.opsi} label="Kosong" value="Kosong" />
          </Picker>
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>
          Atas Nama Sertifikat (Eksisting / Balik nama jual beli
        </Text>
        <View>
          <TextInput placeholder="Input Text" style={style.input} />
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>No. Sertifikat</Text>
        <View>
          <TextInput placeholder="Input Number" style={style.input} />
        </View>
        <Text>*Minimum Number</Text>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>No. SPR* Developer</Text>
        <View>
          <TextInput placeholder="Input Number" style={style.input} />
        </View>
        <Text>*Surat pemesanan rumah</Text>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Angunan</Text>
        <View>
          <TextInput
            style={style.input}
            placeholder="Nama jalan, Nomor Rumah, Cluster"
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
              placeholder="RW"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Provinsi</Text>
        <View>
          <TextInput style={style.input} placeholder="Masukan nama provinsi" />
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kab/Kota</Text>
        <View>
          <TextInput
            style={style.input}
            placeholder="Masukan nama Kabupaten/Kota"
          />
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kecamatan</Text>
        <View>
          <TextInput style={style.input} placeholder="Masukan nama Kecamatan" />
        </View>
      </View>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kode Pos</Text>
        <View>
          <TextInput style={style.input} placeholder="Masukan Kode Pos" />
        </View>
      </View>

      <View style={style.simpanLanjut}>
        <TouchableOpacity style={style.simpanForm}>
          <Text style={style.simpanForm}>Simpan Formulir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnLanjut}
          onPress={() => navigation.navigate('DataPemohon')}>
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
  textLuas: {
    // justifyContent: 'center',
    padding: 14,
    // borderWidth: 1,
    backgroundColor: '#e3e3e3',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputLuas: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 150,
    // marginRight: 50,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});

export default DataAngunan;
