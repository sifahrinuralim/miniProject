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

function DataPemohon(props) {
  const [pertanyaan1, setPertanyaan1] = React.useState('');
  const [pertanyaan2, setPertanyaan2] = React.useState('');
  const [pertanyaan3, setPertanyaan3] = React.useState('');
  const [pertanyaan4, setPertanyaan4] = React.useState('');
  const [pertanyaan5, setPertanyaan5] = React.useState('');
  const [pertanyaan6, setPertanyaan6] = React.useState('');
  const [pertanyaan7, setPertanyaan7] = React.useState('');
  const [pertanyaan8, setPertanyaan8] = React.useState('');
  const [pertanyaan9, setPertanyaan9] = React.useState('');
  const [pertanyaan10, setPertanyaan10] = React.useState('');
  const [pertanyaan11, setPertanyaan11] = React.useState('');
  const [pertanyaan12, setPertanyaan12] = React.useState('');
  const [pertanyaan13, setPertanyaan13] = React.useState('');
  const [pertanyaan14, setPertanyaan14] = React.useState('');
  const [pertanyaan15, setPertanyaan15] = React.useState('');
  const [pertanyaan16, setPertanyaan16] = React.useState('');

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = useState(false);

  const {navigation} = props;

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
            // setPertanyaan2={setPertanyaan2}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nomor KTP</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
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
          {/* <DatePicker date={date} onDateChange={setDate} mode="date" /> */}
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

      {/* <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Tanggal Lahir</Text>
            <View style={style.border}>
                <DateTimePicker
                mode="date"
                value={ date }
                display='default'
                onChange={ date => this.setState({date})}
                // style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                />
            </View>
        </View> */}

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Kelamin</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={pertanyaan5}
            onValueChange={itemValue5 => setPertanyaan5(itemValue5)}>
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
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input No.HP"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Telepon Rumah</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Telepon Rumah"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Nama Gadis Ibu Kandung</Text>
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Status Perkawinan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={pertanyaan9}
            onValueChange={itemValue9 => setPertanyaan9(itemValue9)}>
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
            selectedValue={pertanyaan10}
            onValueChange={itemValue10 => setPertanyaan10(itemValue10)}>
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
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Text"
          />
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Alamat Domisili</Text>
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kota</Text>
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Status Tempat Tinggal</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={pertanyaan14}
            onValueChange={itemValue14 => setPertanyaan14(itemValue14)}>
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Lama Tinggal</Text>
        <View style={style.border}>
          <TextInput
            style={style.input}
            // setPertanyaan3={setPertanyaan3}
            // value=""
            onChangeText={() => {}}
            placeholder="Input Angka dalam satuan bulan"
          />
        </View>
      </View>

      <View style={style.simpanLanjut}>
        <TouchableOpacity style={style.simpanForm}>
          <Text style={style.simpanForm}>Simpan Formulir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btnLanjut}
          onPress={() => navigation.navigate('DataPembiayaanUtama')}>
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
