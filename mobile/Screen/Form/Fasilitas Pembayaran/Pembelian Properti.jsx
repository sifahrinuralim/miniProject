import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import axios from 'axios';

function PembelianProperti(props) {
  const [jenis_penjual, setJenis_Penjual] = useState('');
  const [nama_penjual, setNama_Penjual] = useState('');
  const [nilai_spr, setNilai_Spr] = useState('');
  const [no_telepon_penjual, setNo_Telepon_Penjual] = useState('');
  const [uang_muka, setUang_Muka] = useState('');
  const [nama_proyek, setNama_Proyek] = useState('');
  const [kondisi_bangunan, setKondisi_Bangunan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [rt, setRt] = useState('');
  const [rw, setRw] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kab_kota, setKab_Kota] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kode_pos, setKode_Pos] = useState('');

  const {navigation} = props;

  const handleNext = () => {
    const getIdUser = 11;

    if (
      jenis_penjual === '' ||
      nama_penjual === '' ||
      nilai_spr === '' ||
      no_telepon_penjual === '' ||
      uang_muka === '' ||
      nama_proyek === '' ||
      kondisi_bangunan === '' ||
      alamat === '' ||
      rt === '' ||
      rw === '' ||
      provinsi === '' ||
      kab_kota === '' ||
      kecamatan === '' ||
      kelurahan === ''
    ) {
      Alert.alert('Proses Gagal', 'Data anda belum lengkap', [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      axios({
        url:
          'http://192.168.100.63:4000/api/fasilitas_pembiayaan/add_form_data_pembiayaan_properti/' +
          getIdUser,
        method: 'POST',
        data: {
          jenis_penjual,
          nama_penjual,
          nilai_spr,
          no_telepon_penjual,
          uang_muka,
          nama_proyek,
          kondisi_bangunan,
          alamat,
          rt,
          rw,
          provinsi,
          kab_kota,
          kecamatan,
          kelurahan,
          kode_pos,
        },
      })
        .then(response => {
          console.log(response);
          navigation.navigate('DataAngunan');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Penjual</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_penjual}
            onValueChange={itemValue1 => setJenis_Penjual(itemValue1)}>
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
            selectedValue={nama_penjual}
            onChangeText={itemValue2 => setNama_Penjual(itemValue2)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>
          Harga Penawaran Penjual atau Nilai SPR
        </Text>
        <View style={style.border}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3, borderRadius: 8}}>
              <Text
                style={{
                  // alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  paddingTop: 13,
                  paddingBottom: 12,
                  // paddingRight: 16,
                  // paddingLeft: 16,
                  flex: 1,
                  fontSize: 15,
                  color: 'grey',

                  backgroundColor: '#cccccc',
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}>
                Rp
              </Text>
            </View>
            <TextInput
              style={style.input}
              keyboardType="numeric"
              selectedValue={nilai_spr}
              onChangeText={itemValue3 => setNilai_Spr(itemValue3)}
              placeholder="Input Harga Penawaran"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Uang Muka</Text>
        <View style={style.border}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3, borderRadius: 8}}>
              <Text
                style={{
                  // alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  paddingTop: 13,
                  paddingBottom: 12,
                  // paddingRight: 16,
                  // paddingLeft: 16,
                  flex: 1,
                  fontSize: 15,
                  color: 'grey',

                  backgroundColor: '#cccccc',
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}>
                Rp
              </Text>
            </View>
            <TextInput
              style={style.input}
              selectedValue={uang_muka}
              onChangeText={itemValue99 => setUang_Muka(itemValue99)}
              placeholder="Input Uang Muka"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor telepon Penjual</Text>
        <View style={style.border}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.3, borderRadius: 8}}>
              <Text
                style={{
                  // alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  paddingTop: 13,
                  paddingBottom: 12,
                  // paddingRight: 16,
                  // paddingLeft: 16,
                  flex: 1,
                  fontSize: 15,
                  color: 'grey',
                  backgroundColor: '#cccccc',
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                }}>
                +62
              </Text>
            </View>
            <TextInput
              style={style.input}
              selectedValue={no_telepon_penjual}
              onChangeText={itemValue4 => setNo_Telepon_Penjual(itemValue4)}
              placeholder="Input No.Telepon (ex: 08xxxxxxxxx)"
            />
          </View>
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
            selectedValue={alamat}
            onChangeText={itemValue7 => setAlamat(itemValue7)}
            placeholder="Nama jalan, Nomor Rumah, Cluster"
          />
        </View>
      </View>

      <View style={style.container2}>
        <View>
          {/* // style={style.container}> */}
          <Text style={style.pertanyaan}>RT</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              selectedValue={rt}
              onChangeText={itemValue8 => setRt(itemValue8)}
              placeholder="RT"
            />
          </View>
        </View>
        <View>
          {/* // style={style.container}> */}
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
            selectedValue={provinsi}
            onChangeText={itemValue10 => setProvinsi(itemValue10)}
            placeholder="Input Provinsi"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kab/Kota</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kab_kota}
            onChangeText={itemValue11 => setKab_Kota(itemValue11)}
            placeholder="Input Kab/Kot"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kecamatan</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kecamatan}
            onChangeText={itemValue12 => setKecamatan(itemValue12)}
            placeholder="Input Kecamatan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kelurahan</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kelurahan}
            onChangeText={itemValue14 => setKelurahan(itemValue14)}
            placeholder="Input Kelurahan"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kode Pos</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kode_pos}
            onChangeText={itemValue13 => setKode_Pos(itemValue13)}
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
    // borderWidth: 1,
    borderRadius: 9,
    backgroundColor: '#e5e5e5',
  },
  placeholder: {
    color: 'grey',
  },
  opsi: {
    color: 'black',
  },
  border: {
    // borderWidth: 0.1,
    backgroundColor: '#e5e5e5',
    borderRadius: 8,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
    // backgroundColor: '#E5E5E5',
    borderRadius: 8,
    flex: 3,
  },
  inputbagi2: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 220,
    marginRight: 50,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
  },
  container2: {
    flexDirection: 'row',
    marginBottom: 30,
    alignContent: 'space-between',

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
