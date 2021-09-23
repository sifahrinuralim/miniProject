import React, { useState, Component } from 'react';
import DatePicker from 'react-native-date-picker';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

function DataAngunan(props) {
  const [jenis_agunan, setJenis_Agunan] = useState('');
  const [luas_tanah, setLuas_Tanah] = useState('');
  const [luas_bangunan, setLuas_Bangunan] = useState('');
  const [kondisi_bangunan, setKondisi_Bangunan] = useState('');
  const [status_kepemilikan, setStatus_Kepemilikan] = useState('');
  const [status_agunan, setStatus_Agunan] = useState('');
  const [nama_sertifikat, setNama_Sertifikat] = useState('');
  const [nomor_sertifikat, setNomor_Sertifikat] = useState('');
  // const [masa_berlaku_sertifikat, setMasa_Berlaku_Sertifikat] = useState('');
  const [nomor_spr, setNomor_Spr] = useState('');
  const [alamat_agunan, setAlamat_Agunan] = useState('');
  const [rt, setRt] = useState('');
  const [rw, setRw] = useState('');
  const [provinsi_agunan, setProvinsi_Agunan] = useState('');
  const [kab_kota_agunan, setKab_Kota_Agunan] = useState('');
  const [kecamatan_agunan, setKecamatan_Agunan] = useState('');
  const [kelurahan_agunan, setKelurahan_Agunan] = useState('');
  const [kode_pos_agunan, setKode_Pos_Agunan] = useState('');

  const { navigation } = props;

  const [masa_berlaku_sertifikat, setDate] = React.useState(new Date());
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    const getIdUser = 14;

    axios({
      url:
        'http://10.80.247.50:4000/api/data_agunan/add_form_data_agunan/' +
        getIdUser,
      method: 'POST',
      data: {
        jenis_agunan,
        luas_tanah,
        luas_bangunan,
        kondisi_bangunan,
        status_kepemilikan,
        status_agunan,
        nama_sertifikat,
        nomor_sertifikat,
        masa_berlaku_sertifikat,
        nomor_spr,
        alamat_agunan,
        rt,
        rw,
        provinsi_agunan,
        kab_kota_agunan,
        kecamatan_agunan,
        kelurahan_agunan,
        kode_pos_agunan,
      },
    })
      .then(response => {
        console.log(response);
        navigation.navigate('DataPemohon');
      })
      .catch(err => {
        console.log(err);
      });
  };


  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Angunan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_agunan}
            onValueChange={itemValue1 => setJenis_Agunan(itemValue1)}>
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
          <Picker
            selectedValue={status_kepemilikan}
            onValueChange={itemValue2 => setStatus_Kepemilikan(itemValue2)}>
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
          <Picker
            selectedValue={status_agunan}
            onValueChange={itemValue3 => setStatus_Agunan(itemValue3)}>
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
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={style.inputLuas}
              selectedValue={luas_tanah}
              onChangeText={itemValue4 => setLuas_Tanah(itemValue4)}
              placeholder="Input luas tanah"
            />
            <Text style={style.textLuas}>m2</Text>
          </View>
        </View>

        <View style={style.container}>
          <Text style={style.pertanyaan}>Luas Bangunan</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={style.inputLuas}
              // setPertanyaan3={setPertanyaan3}
              // value=""
              selectedValue={luas_bangunan}
              onChangeText={itemValue5 => setLuas_Bangunan(itemValue5)}
              placeholder="Input luas Bangunan"
            />
            <Text style={style.textLuas}>m2</Text>
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kondisi Bangunan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={kondisi_bangunan}
            onValueChange={itemValue6 => setKondisi_Bangunan(itemValue6)}>
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
          Atas Nama Sertifikat (Eksisting / Balik nama jual beli)
        </Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={nama_sertifikat}
            onChangeText={itemValue7 => setNama_Sertifikat(itemValue7)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>No. Sertifikat</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={nomor_sertifikat}
            onChangeText={itemValue8 => setNomor_Sertifikat(itemValue8)}
            placeholder="Input Number"
          />
        </View>
        <Text>*Minimum Number</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Masa Berlaku Sertifikat</Text>
        <View style={style.border}>
          <Button title="Pilih Tanggal" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={masa_berlaku_sertifikat}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>
{/* 
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Masa Berlaku Sertifikat</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={masa_berlaku_sertifikat}
            onChangeText={itemValue21 =>
              setMasa_Berlaku_Sertifikat(itemValue21)
            }
            placeholder="Input Number"
          />
        </View>
        <Text>*Minimum Number</Text>
      </View> */}

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>No. SPR* Developer</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={nomor_spr}
            onChangeText={itemValue9 => setNomor_Spr(itemValue9)}
            placeholder="Input Number"
          />
        </View>
        <Text>*Surat pemesanan rumah</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Angunan</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={alamat_agunan}
            onChangeText={itemValue10 => setAlamat_Agunan(itemValue10)}
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
              selectedValue={rt}
              onChangeText={itemValue11 => setRt(itemValue11)}
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
              selectedValue={rw}
              onChangeText={itemValue12 => setRw(itemValue12)}
              placeholder="RW"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Provinsi</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={provinsi_agunan}
            onChangeText={itemValue13 => setProvinsi_Agunan(itemValue13)}
            placeholder="Masukan nama provinsi"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kab/Kota</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={kab_kota_agunan}
            onChangeText={itemValue13 => setKab_Kota_Agunan(itemValue13)}
            placeholder="Masukan nama Kabupaten/Kota"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kecamatan</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={kecamatan_agunan}
            onChangeText={itemValue14 => setKecamatan_Agunan(itemValue14)}
            placeholder="Masukan nama Kecamatan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kelurahan</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={kelurahan_agunan}
            onChangeText={itemValue22 => setKelurahan_Agunan(itemValue22)}
            placeholder="Masukan nama Kelurahan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kode Pos</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={kode_pos_agunan}
            onChangeText={itemValue15 => setKode_Pos_Agunan(itemValue15)}
            placeholder="Masukan Kode Pos"
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
