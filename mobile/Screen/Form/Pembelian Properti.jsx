import { DefaultTransition } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, { useState } from 'react';
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

import axios from 'axios'

function PembelianProperti(props) {
  const [jenis_penjual_properti, setJenis_Penjual_Properti] = useState("")
  const [nama_penjual_properti, setNama_Penjual_Properti] = useState("")
  const [nilai_spr_properti, setNilai_Spr_Properti] = useState("")
  const [no_telepon_penjual_properti, setNo_Telepon_Penjual_Properti] = useState("")
  const [uang_muka_properti, setUang_Muka_Properti] = useState("")
  const [nama_proyek, setNama_Proyek] = useState("")
  const [kondisi_bangunan, setKondisi_Bangunan] = useState("")
  const [alamat_properti, setAlamat_Properti] = useState("")
  const [rt, setRt] = useState("")
  const [rw, setRw] = useState("")
  const [provinsi_properti, setProvinsi_Properti] = useState("")
  const [kab_kota_properti, setKab_Kota_Properti] = useState("")
  const [kecamatan_properti, setKecamatan_Properti] = useState("")
  const [kode_pos_properti, setKode_Pos_Properti] = useState("")

  const { navigation } = props;

  const handleNext = () => {
    const getIdUser = 14

    axios({
      url: "http://192.168.1.130:4000/api/data_pengajuan/add_form_data_pengajuan_properti/" + getIdUser,
      method: "POST",
      data: {
        jenis_penjual_properti,
        nama_penjual_properti,
        nilai_spr_properti,
        no_telepon_penjual_properti,
        uang_muka_properti,
        nama_proyek,
        kondisi_bangunan,
        alamat_properti,
        rt,
        rw,
        provinsi_properti,
        kab_kota_properti,
        kecamatan_properti,
        kode_pos_properti
      }
    })
      .then((response) => {
        navigation.navigate('DataAngunan');
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Penjual</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_penjual_properti}
            onValueChange={itemValue1 => setJenis_Penjual_Properti(itemValue1)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Jenis Penjual"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Developer Rekanan"
              value="Developer Rekanan"
            />
            <Picker.Item
              style={style.opsi}
              label="Developer Non Rekanan"
              value="Developer Non Rekanan"
            />
            <Picker.Item
              style={style.opsi}
              label="Non Developer"
              value="Non Developer"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Penjual</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_penjual_properti}
            onChangeText={itemValue2 => setNama_Penjual_Properti(itemValue2)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>
          Harga Penawaran Penjual atau Nilai SPR
        </Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nilai_spr_properti}
            onChangeText={itemValue3 => setNilai_Spr_Properti(itemValue3)}
            placeholder="dalam satuan RP. ex: 500000000"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>uang Muka</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={uang_muka_properti}
            onChangeText={itemValue99 => setUang_Muka_Properti(itemValue99)}
            placeholder="Input No.Telepon (ex: 08xxxxxxxxx)"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor telepon Penjual</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={no_telepon_penjual_properti}
            onChangeText={itemValue4 => setNo_Telepon_Penjual_Properti(itemValue4)}
            placeholder="Input No.Telepon (ex: 08xxxxxxxxx)"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Proyek</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_proyek}
            onChangeText={itemValue5 => setNama_Proyek(itemValue5)}
            placeholder="Input Text"
          />
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
              label="Pilih Kondisi Bangunan"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Siap Huni (Ready Stock)"
              value="Siap Huni (Ready Stock)"
            />
            <Picker.Item
              style={style.opsi}
              label="Dalam Proses Pembuatan (Indent)"
              value="Dalam Proses Pembuatan (Indent)"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Properti</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={alamat_properti}
            onChangeText={itemValue7 => setAlamat_Properti(itemValue7)}
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
              selectedValue={rt}
              // onChangeText={itemValue8 => (itemValue8)}
              onChangeText={itemValue8 => setRt(itemValue8)}
              placeholder="RT"
            />
          </View>
        </View>
        <View style={style.container}>
          <Text style={style.pertanyaan}>RW</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              selectedValue={rw}
              onChangeText={itemValue9 => setRw(itemValue9)}
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
            selectedValue={provinsi_properti}
            onChangeText={itemValue10 => setProvinsi_Properti(itemValue10)}
            placeholder="Input Provinsi"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kab/Kota</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kab_kota_properti}
            onChangeText={itemValue11 => setKab_Kota_Properti(itemValue11)}
            placeholder="Input Kab/Kot"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kecamatan</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kecamatan_properti}
            onChangeText={itemValue12 => setKecamatan_Properti(itemValue12)}
            placeholder="Input Kecamatan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kode Post</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kode_pos_properti}
            onChangeText={itemValue13 => setKode_Pos_Properti(itemValue13)}
            placeholder="Input Kode Post"
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

        {/* <TouchableOpacity
          style={style.btnLanjut}
          onPress={() => navigation.navigate('DataAngunan')}>
          <Text style={style.btn}>Lanjut</Text>
        </TouchableOpacity>
         */}
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

export default PembelianProperti;
