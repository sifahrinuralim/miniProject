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

function DataPemohon(props) {
  const [nama_pemohon, setNama_Pemohon] = useState('');
  const [nik_pemohon, setNik_Pemohon] = useState('');
  const [tempat_lahir_pemohon, setTempat_Lahir_Pemohon] = useState('');
  const [tanggal_lahir_pemohon, setDate] = React.useState(new Date());
  const [jenis_kelamin, setJenis_Kelamin] = useState('');
  const [nomor_handphone, setNomor_Handphone] = useState('');
  const [telepon_rumah, setTelepon_Rumah] = useState('');
  const [nama_ibu_kandung_pemohon, setNama_Ibu_Kandung_Pemohon] = useState('');
  const [status_kawin_pemohon, setStatus_Kawin_Pemohon] = useState('');
  const [pendidikan_terakhir, setPendidikan_Terakhir] = useState('');
  const [alamat_ktp, setAlamat_Ktp] = useState('');
  const [alamat_domisili, setAlamat_Domisili] = useState('');
  const [kab_kota_domisili, setKab_Kota_Domisili] = useState('');
  const [status_tempat_tinggal, setStatus_Tempat_Tinggal] = useState('');
  const [lama_tinggal, setLama_Tinggal] = useState('');

  const [open, setOpen] = useState(false);

  const {navigation} = props;

  const handleNext = () => {
    const getIdUser = 14;

    axios({
      url:
        'http://10.80.247.65:4000/api/data_diri_keluarga/add_data_pemohon/' +
        getIdUser,
      method: 'POST',
      data: {
        nama_pemohon,
        nik_pemohon,
        tempat_lahir_pemohon,
        tanggal_lahir_pemohon,
        jenis_kelamin,
        nomor_handphone,
        telepon_rumah,
        nama_ibu_kandung_pemohon,
        status_kawin_pemohon,
        pendidikan_terakhir,
        alamat_ktp,
        alamat_domisili,
        kab_kota_domisili,
        status_tempat_tinggal,
        lama_tinggal,
      },
    })
      .then(response => {
        console.log(response);

        if (status_kawin_pemohon === 'Menikah') {
          navigation.navigate('DataPasangan');
        } else {
          navigation.navigate('DataKerabat');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Data Pemohon</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Lengkap Sesuai KTP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_pemohon}
            onChangeText={itemValue1 => setNama_Pemohon(itemValue1)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor KTP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nik_pemohon}
            onChangeText={itemValue2 => setNik_Pemohon(itemValue2)}
            placeholder="Input Nomor KTP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Tempat Lahir</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={tempat_lahir_pemohon}
            onChangeText={itemValue3 => setTempat_Lahir_Pemohon(itemValue3)}
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
            date={tanggal_lahir_pemohon}
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Kelamin</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_kelamin}
            onValueChange={itemValue5 => setJenis_Kelamin(itemValue5)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Laki-laki"
              value="Laki-laki"
            />
            <Picker.Item
              style={style.opsi}
              label="Perempuan"
              value="Perempuan"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor Handphone</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nomor_handphone}
            onChangeText={itemValue6 => setNomor_Handphone(itemValue6)}
            placeholder="Input No.HP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Telepon Rumah</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={telepon_rumah}
            onChangeText={itemValue7 => setTelepon_Rumah(itemValue7)}
            placeholder="Input Telepon Rumah"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Gadis Ibu Kandung</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={nama_ibu_kandung_pemohon}
            onChangeText={itemValue8 => setNama_Ibu_Kandung_Pemohon(itemValue8)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Status Perkawinan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={status_kawin_pemohon}
            onValueChange={itemValue9 => setStatus_Kawin_Pemohon(itemValue9)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Belum Menikah"
              value="Belum Menikah"
            />
            <Picker.Item style={style.opsi} label="Menikah" value="Menikah" />
            <Picker.Item style={style.opsi} label="Janda" value="Janda" />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Pendidikan Terakhir</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={pendidikan_terakhir}
            onValueChange={itemValue10 => setPendidikan_Terakhir(itemValue10)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item style={style.opsi} label="SD/MI" value="SD/MI" />
            <Picker.Item style={style.opsi} label="SMP/MTS" value="SMP/MTS" />
            <Picker.Item style={style.opsi} label="SMA/MA" value="SMA/MA" />
            <Picker.Item
              style={style.opsi}
              label="Diploma I-IV"
              value="Diploma I-IV"
            />
            <Picker.Item style={style.opsi} label="S1" value="Sarjana" />
            <Picker.Item style={style.opsi} label="S2" value="Magister" />
            <Picker.Item style={style.opsi} label="S3" value="Doktor" />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat KTP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={alamat_ktp}
            onChangeText={itemValue11 => setAlamat_Ktp(itemValue11)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Domisili</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={alamat_domisili}
            onChangeText={itemValue12 => setAlamat_Domisili(itemValue12)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kota</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={kab_kota_domisili}
            onChangeText={itemValue13 => setKab_Kota_Domisili(itemValue13)}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Status Tempat Tinggal</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={status_tempat_tinggal}
            onValueChange={itemValue14 =>
              setStatus_Tempat_Tinggal(itemValue14)
            }>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Milik Sendiri"
              value="Milik Sendiri"
            />
            <Picker.Item style={style.opsi} label="Keluarga" value="Keluarga" />
            <Picker.Item
              style={style.opsi}
              label="Kontrak/Kost"
              value="Kontrak/Kost"
            />
            {/* <Picker.Text label='Lainnya'/>
                    <Picker.TextInput placeholder= 'lainnya'/> */}
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Lama Tinggal</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            selectedValue={lama_tinggal}
            onChangeText={itemValue15 => setLama_Tinggal(itemValue15)}
            placeholder="Input Angka dalam satuan bulan"
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

export default DataPemohon;
