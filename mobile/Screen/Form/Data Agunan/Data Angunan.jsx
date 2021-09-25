import React, { useState, Component, useEffect } from 'react';
import DatePicker from 'react-native-date-picker';
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
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

function DataAngunan(props) {
  const { navigation } = props;
  const [open, setOpen] = useState(false);

  const [provinsi, setProvinsi] = useState("")
  const [getIdProvinsi, setGetIdProvinsi] = useState("");
  const [daftarProvinsi, setDaftarProvinsi] = useState([]);

  const [kotaKab, setKotaKab] = useState("")
  const [getIdKotaKab, setGetIdKotaKab] = useState("");
  const [daftarKotaKab, setDaftarKotaKab] = useState([]);

  //hitAPIAlamat
  useEffect(() => {
    axios({
      url: "https://dev.farizdotid.com/api/daerahindonesia/provinsi",
      method: "GET",
    })
      .then((response) => {
        setDaftarProvinsi(response.data.provinsi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const pilihKotaKabupaten = (idProvinsi) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idProvinsi}`,
      method: "GET",
    })
      .then((response) => {
        setDaftarKotaKab(response.data.kota_kabupaten);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleNext = () => {
    daftarProvinsi.forEach((value, index) => {
      if (getIdProvinsi === value.id) {
        console.log(value.nama);
        console.log(value.id);
      }
    });

    daftarKotaKab.forEach((value, index) => {
      if (getIdKotaKab === value.id) {
        console.log(value.nama);
        console.log(value.id);
      }
    });

  }

  return (
    <ScrollView style={style.container}>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Provinsi</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={getIdProvinsi}
            onValueChange={itemValue3 => setGetIdProvinsi(itemValue3)}
            style={style.placeholder}
          >
            <Picker.Item
              label="Pilih Provinsi"
            />
            {
              daftarProvinsi.map((provinsi, key) => {
                return (
                  <Picker.Item
                    key={key}
                    label={provinsi.nama}
                    value={provinsi.id}
                  />
                )
              })
            }
          </Picker>
        </View>
      </View>


      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kota Kabupaten</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={getIdKotaKab}
            onValueChange={itemValue1 => setGetIdKotaKab(itemValue1)}
            style={style.placeholder}
          >
            <Picker.Item
              onPress={pilihKotaKabupaten(getIdProvinsi)}
              label="Pilih Kota Kabupaten"
            />
            {
              daftarKotaKab.map((kota, key) => {
                return (
                  <Picker.Item
                    key={key}
                    label={kota.nama}
                    value={kota.id}
                  />
                )
              })
            }
          </Picker>
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
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'column',
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
  },
  simpanLanjut: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  simpanForm: {
    justifyContent: 'center',
    fontSize: 25,
    flex: 0.5,
    color: '#500878',
  },
  btnLanjut: {
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
    padding: 14,
    backgroundColor: '#e3e3e3',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputLuas: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 150,
    paddingLeft: 16,
    fontSize: 15,
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});

export default DataAngunan;
