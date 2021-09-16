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

function FasilitasPembayaran(props) {
  const [skema_pengajuan, setSkema_Pengajuan] = useState("")
  const [peruntukan_pembiayaan, setPeruntukan_Pembiayaan] = useState("")
  const [program, setProgram] = useState("")
  const [objek, setObjek] = useState("")
  const [akad, setAkad] = useState("")
  const [total_plafond, setTotal_Plafond] = useState("")
  const [waktu_pembiayaan, setWaktu_Pembiayaan] = useState("")

  const { navigation } = props;

  const handleNext = () => {
    const getIdUser = 14

    axios({
      url: "http://192.168.1.130:4000/api/data_pengajuan/add_form_data_pengajuan/" + getIdUser,
      method: "POST",
      data: {
        skema_pengajuan,
        peruntukan_pembiayaan,
        program,
        objek,
        akad,
        total_plafond,
        waktu_pembiayaan
      }
    })
      .then((response) => {
        // console.log(response);
        if (peruntukan_pembiayaan === 'Pembelian Properti') {
          navigation.navigate('PembelianProperti');
        } else if (peruntukan_pembiayaan === 'Top Up') {
          navigation.navigate('TopUp');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Skema Pengajuan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={skema_pengajuan}
            onValueChange={itemValue1 => setSkema_Pengajuan(itemValue1)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Penghasilan Tunggal"
              value="Penghasilan Tunggal"
            />
            <Picker.Item
              style={style.opsi}
              label="Penghasilan Gabungan/Joint Income (Suami/Istri)"
              value="Penghasilan Gabungan/Joint Income"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Peruntukan Pembiayaan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={peruntukan_pembiayaan}
            onValueChange={itemValue2 => setPeruntukan_Pembiayaan(itemValue2)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Pembelian Properti"
              value="Pembelian Properti"
            />
            <Picker.Item style={style.opsi} label="Top Up" value="Top Up" />
            <Picker.Item
              style={style.opsi}
              label="Take Over"
              value="Take Over"
            />
            <Picker.Item
              style={style.opsi}
              label="Take Over + Top Up"
              value="Take Over + Top Up"
            />
            <Picker.Item
              style={style.opsi}
              label="Pembiayaan Konsumsi Berangun Properti"
              value="Pembiayaan Konsumsi Berangun Properti"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Program</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={program}
            onValueChange={itemValue3 => setProgram(itemValue3)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Program"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Fix & Fix"
              value="Fix & Fix"
            />
            <Picker.Item
              style={style.opsi}
              label="Angsuran Super Ringan (ASR)"
              value="Angsuran Super Ringan (ASR)"
            />
            <Picker.Item
              style={style.opsi}
              label="Special MMQ"
              value="Special MMQ"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Objek yang dibiayai</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={objek}
            onValueChange={itemValue4 => setObjek(itemValue4)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item style={style.opsi} label="Properti" value="Properti" />
            <Picker.Item
              style={style.opsi}
              label="Renovasi/ Pembangunan"
              value="Renovasi/ Pembangunan"
            />
            <Picker.Item
              style={style.opsi}
              label="Kendaraan"
              value="Kendaraan"
            />
            <Picker.Item
              style={style.opsi}
              label="Furniture"
              value="Furniture"
            />
            <Picker.Item
              style={style.opsi}
              label="Jasa Konsumtif"
              value="Jasa Konsumtif"
            />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Akad Fasilitas yang diajukan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={akad}
            onValueChange={itemValue5 => setAkad(itemValue5)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item
              style={style.opsi}
              label="Murahbahah"
              value="Murahbahah"
            />
            <Picker.Item
              style={style.opsi}
              label="MMQ (Musyarakah Mutanagishah"
              value="MMQ (Musyarakah Mutanagishah"
            />
            <Picker.Item style={style.opsi} label="Istishna" value="Istishna" />
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Total Plafond yang diajukan</Text>
        <View style={style.border}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, borderRadius: 5 }}>
              <Text>Rp</Text>
            </View>
            <TextInput
              style={style.input}
              // value=""
              // setPertanyaan6={setPertanyaan6}
              selectedValue={total_plafond}
              onChangeText={itemValue6 => setTotal_Plafond(itemValue6)}
              // onChangeText={() => { }}
              placeholder="Input Plafond"
            />
          </View>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jangka Waktu Pembiayaan(Bulan)</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            keyboardType="numeric"
            // maxLength={7}
            selectedValue={waktu_pembiayaan}
            onChangeText={itemValue7 => setWaktu_Pembiayaan(itemValue7)}
            // onChangeText={() => { }}
            placeholder="Input Tenor"
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
    borderRadius: 5,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    flex: 3,
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

export default FasilitasPembayaran;
