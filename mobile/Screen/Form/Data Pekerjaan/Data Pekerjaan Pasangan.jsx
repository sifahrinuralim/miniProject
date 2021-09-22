import {DefaultTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import React, {useState} from 'react';
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

function DataPekerjaanPasangan(props) {
  const [pertanyaan1, setPertanyaan1] = React.useState('');
  const [pertanyaan2, setPertanyaan2] = React.useState('');
  const [pertanyaan3, setPertanyaan3] = React.useState('');
  const [pertanyaan4, setPertanyaan4] = React.useState('');
  const [pertanyaan5, setPertanyaan5] = React.useState('');
  const [pertanyaan6, setPertanyaan6] = React.useState('');
  const [pertanyaan7, setPertanyaan7] = React.useState('');
  const [pertanyaan8, setPertanyaan8] = React.useState('');
  const {navigation} = props;
  return (
    <ScrollView style={style.container}>
      <View style={style.kolompertanyaan}>
        <Text style={style.judul}>Data Pekerjaan Pasangan</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Pekerjaan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={pertanyaan1}
            onValueChange={itemValue1 => setPertanyaan1(itemValue1)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
              value="" /*enabled={false}*/
            />
            <Picker.Item style={style.opsi} label="Karyawan" value="Karyawan" />
            <Picker.Item
              style={style.opsi}
              label="Profesional"
              value="Profesional"
            />
            <Picker.Item
              style={style.opsi}
              label="Wiraswasta"
              value="Wiraswasta"
            />
            <Picker.Item style={style.opsi} label="Lainnya" value="Lainnya" />
          </Picker>
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nama Perusahaan</Text>
          <TextInput placeholder="Input Text" style={style.input} />
        </View>
        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Jabatan</Text>
          <TextInput placeholder="Input Text" style={style.input} />
        </View>
        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Status Pekerjaan</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={pertanyaan1}
              onValueChange={itemValue1 => setPertanyaan1(itemValue1)}>
              <Picker.Item
                style={style.placeholder}
                label="Pilih Opsi"
                value="" /*enabled={false}*/
              />
              <Picker.Item
                style={style.opsi}
                label="Karyawan Tetap"
                value="Karyawan Tetap"
              />
              <Picker.Item
                style={style.opsi}
                label="Karyawan Kontrak"
                value="Karyawan Kontrak"
              />
            </Picker>
          </View>
        </View>
        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Kategori Instansi</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={pertanyaan1}
              onValueChange={itemValue1 => setPertanyaan1(itemValue1)}>
              <Picker.Item
                style={style.placeholder}
                label="Pilih Opsi"
                value="" /*enabled={false}*/
              />
              <Picker.Item
                style={style.opsi}
                label="Pemerintahan"
                value="Pemerintahan"
              />
              <Picker.Item style={style.opsi} label="BUMN" value="BUMN" />
              <Picker.Item
                style={style.opsi}
                label="TNI/POLRI"
                value="TNI/POLRI"
              />
              <Picker.Item
                style={style.opsi}
                label="Swasta Asing"
                value="Swasta Asing"
              />
              <Picker.Item
                style={style.opsi}
                label="Swasta Nasional"
                value="Swasta Nasional"
              />
              <Picker.Item style={style.opsi} label="Lainnya" value="Lainnya" />
            </Picker>
          </View>
        </View>
        <View style={style.container2}>
          <View style={style.container}>
            <Text style={style.pertanyaan}>Lama Bekerja</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={style.inputLama}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder="input"
              />
              <Text style={style.textLama}>Tahun</Text>
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.pertanyaan}></Text>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={style.inputLama}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder="input"
              />
              <Text style={style.textLama}>Bulan</Text>
            </View>
          </View>
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Jumlah Karyawan Pasangan</Text>
          <TextInput placeholder="Input Jumlah Karyawan" style={style.input} />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Pendapatan Perbulan Pasangan</Text>
          <TextInput placeholder="Input Rp" style={style.input} />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Pembayaran Gaji Pasangan</Text>
          <View style={style.dropdown}>
            <Picker
              selectedValue={pertanyaan1}
              onValueChange={itemValue1 => setPertanyaan1(itemValue1)}>
              <Picker.Item
                style={style.placeholder}
                label="Pilih Opsi"
                value="" /*enabled={false}*/
              />
              <Picker.Item
                style={style.opsi}
                label="Transfer Bank Muamalat"
                value="Transfer Bank Muamalat"
              />
              <Picker.Item
                style={style.opsi}
                label="Transfer Bank Lain"
                value="Transfer Bank Lain"
              />
            </Picker>
          </View>
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Alamat Kantor atau Tempat Usaha</Text>
          <TextInput placeholder="Input Alamat Kantor atau Tempat Usaha" style={style.input} />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Bidang Usaha</Text>
          <TextInput placeholder="Input Bidang Usaha" style={style.input} />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon Kantor</Text>
          <TextInput placeholder="Input Nomor Telepon Kantor" style={style.input} />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon HRD</Text>
          <TextInput placeholder="Input Nomor Telepon HRD" style={style.input} />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Alamat Email HRD</Text>
          <TextInput placeholder="Input Text" style={style.input} />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Alamat Email Atasan Langsung</Text>
          <TextInput placeholder="Input Text" style={style.input} />
        </View>

        <View style={style.kolompertanyaan}>
          <Text style={style.pertanyaan}>Nomor Telepon Atasan Langsung</Text>
          <TextInput placeholder="Input Text" style={style.input} />
        </View>


        <View style={style.simpanLanjut}>
          <TouchableOpacity style={style.simpanForm}>
            <Text style={style.simpanForm}>Simpan Formulir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnLanjut}
            onPress={() => handleNext()}>
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
  textLama: {
    // justifyContent: 'center',
    padding: 14,
    // borderWidth: 1,
    backgroundColor: '#e3e3e3',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputLama: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 120,
    // marginRight: 50,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});

export default DataPekerjaanPasangan;
