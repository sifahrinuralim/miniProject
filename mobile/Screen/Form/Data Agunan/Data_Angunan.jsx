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

function DataAngunanTesting(props) {
  const { navigation } = props;
  const [open, setOpen] = useState(false);

  const [provinsi, setProvinsi] = useState("")
  const [getIdProvinsi, setGetIdProvinsi] = useState("");
  const [daftarProvinsi, setDaftarProvinsi] = useState([]);

  const [kotaKab, setKotaKab] = useState("")
  const [getIdKotaKab, setGetIdKotaKab] = useState("");
  const [daftarKotaKab, setDaftarKotaKab] = useState([]);

  const [kecamatan, setKecamatan] = useState("")
  const [getIdKecamatan, setGetIdKecamatan] = useState("");
  const [daftarKecamatan, setDaftarKecamatan] = useState([]);

  const [kelurahan, setKelurahan] = useState("")
  const [getIdKelurahan, setGetIdKelurahan] = useState("");
  const [daftarKelurahan, setDaftarKelurahan] = useState([]);

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

  const pilihKecamatan = (idKabKot) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${idKabKot}`,
      method: "GET",
    })
      .then((response) => {
        setDaftarKecamatan(response.data.kecamatan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const pilihKelurahan = (idKecamatan) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${idKecamatan}`,
      method: "GET",
    })
      .then((response) => {
        setDaftarKelurahan(response.data.kelurahan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleNext = () => {
    daftarProvinsi.forEach((value, index) => {
      if (getIdProvinsi === value.id) {
        setProvinsi(value)
        // console.log(value.nama);
        console.log(value.id);
        console.log(provinsi);
        console.log(value);
      }
    });

    daftarKotaKab.forEach((value, index) => {
      if (getIdKotaKab === value.id) {
        console.log(value.nama);
        console.log(value.id);
      }
    });

    daftarKecamatan.forEach((value, index) => {
      if (getIdKecamatan === value.id) {
        console.log(value.nama);
        console.log(value.id);
      }
    });

    daftarKelurahan.forEach((value, index) => {
      if (getIdKelurahan === value.id) {
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
            onValueChange={itemValue1 => setGetIdProvinsi(itemValue1)}
          >
            <Picker.Item
              style={style.placeholder}
              label="Pilih Provinsi"
            />
            {
              daftarProvinsi.map((provinsi, key) => {
                return (
                  <Picker.Item
                    style={style.opsi}
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
            onValueChange={itemValue2 => setGetIdKotaKab(itemValue2)}
          >
            <Picker.Item
              style={style.placeholder}
              onPress={pilihKotaKabupaten(getIdProvinsi)}
              label="Pilih Kota Kabupaten"
            />
            {
              daftarKotaKab.map((kota, key) => {
                return (
                  <Picker.Item
                    style={style.opsi}
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kecamatan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={getIdKecamatan}
            onValueChange={itemValue3 => setGetIdKecamatan(itemValue3)}
          >
            <Picker.Item
              style={style.placeholder}
              onPress={pilihKecamatan(getIdKotaKab)}
              label="Pilih Kecamatan"
            />
            {
              daftarKecamatan.map((kecamatan, key) => {
                return (
                  <Picker.Item
                    style={style.opsi}
                    key={key}
                    label={kecamatan.nama}
                    value={kecamatan.id}
                  />
                )
              })
            }
          </Picker>
        </View>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kelurahan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={getIdKelurahan}
            onValueChange={itemValue4 => setGetIdKelurahan(itemValue4)}
          >
            <Picker.Item
              style={style.placeholder}
              onPress={pilihKelurahan(getIdKecamatan)}
              label="Pilih Kelurahan"
            />
            {
              daftarKelurahan.map((kelurahan, key) => {
                return (
                  <Picker.Item
                    style={style.opsi}
                    key={key}
                    label={kelurahan.nama}
                    value={kelurahan.id}
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

export default DataAngunanTesting;
