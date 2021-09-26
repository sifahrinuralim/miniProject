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
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import axios from 'axios';

function DataAngunan(props) {
  const [jenis_agunan, setJenis_Agunan] = useState("")
  const [luas_tanah, setLuas_Tanah] = useState("")
  const [luas_bangunan, setLuas_Bangunan] = useState("")
  const [kondisi_bangunan, setKondisi_Bangunan] = useState("")
  const [status_kepemilikan, setStatus_Kepemilikan] = useState("")
  const [status_agunan, setStatus_Agunan] = useState("")
  const [nama_sertifikat, setNama_Sertifikat] = useState("")
  const [nomor_sertifikat, setNomor_Sertifikat] = useState("")
  const [masa_berlaku_sertifikat, setDate] = React.useState(new Date());
  const [nomor_spr, setNomor_Spr] = useState("")
  const [alamat_agunan, setAlamat_Agunan] = useState("")
  const [rt, setRt] = useState("")
  const [rw, setRw] = useState("")
  const [provinsi_agunan, setProvinsi_Agunan] = useState("")
  const [kab_kota_agunan, setKab_Kota_Agunan] = useState("")
  const [kecamatan_agunan, setKecamatan_Agunan] = useState("")
  const [kelurahan_agunan, setKelurahan_Agunan] = useState("")
  const [kode_pos_agunan, setKode_Pos_Agunan] = useState("")

  const { navigation } = props;
  const [open, setOpen] = useState(false);

  //Provinsi
  const [getIdProvinsi, setGetIdProvinsi] = useState("");
  const [daftarProvinsi, setDaftarProvinsi] = useState([]);

  //Kabupaten Kota
  const [getIdKotaKab, setGetIdKotaKab] = useState("");
  const [daftarKotaKab, setDaftarKotaKab] = useState([]);

  //Kecamatan
  const [getIdKecamatan, setGetIdKecamatan] = useState("");
  const [daftarKecamatan, setDaftarKecamatan] = useState([]);

  //Kelurahan
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

  const testButton = () => {
    console.log("Masuk Button");
  }

  const pilihKotaKabupaten = () => {
    console.log("masuk ID Provinsi: ", getIdProvinsi);

    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${getIdProvinsi}`,
      method: "GET",
    })
      .then((response) => {
        setDaftarKotaKab(response.data.kota_kabupaten);
      })
      .catch((err) => {
        console.log("error", err);
      });

  };

  const pilihKecamatan = () => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${getIdKotaKab}`,
      method: "GET",
    })
      .then((response) => {
        setDaftarKecamatan(response.data.kecamatan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const pilihKelurahan = () => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${getIdKecamatan}`,
      method: "GET",
    })
      .then((response) => {
        setDaftarKelurahan(response.data.kelurahan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const consoleDaerah = () => {
    daftarProvinsi.forEach((value, index) => {
      if (getIdProvinsi === value.id) {
        setProvinsi_Agunan(value.nama)
      }
    });

    daftarKotaKab.forEach((value, index) => {
      if (getIdKotaKab === value.id) {
        setKab_Kota_Agunan(value.nama)
      }
    });

    daftarKecamatan.forEach((value, index) => {
      if (getIdKecamatan === value.id) {
        setKecamatan_Agunan(value.nama)
      }
    });

    daftarKelurahan.forEach((value, index) => {
      if (getIdKelurahan === value.id) {
        setKelurahan_Agunan(value.nama)
      }
    });
  }

  // const handleNext = () => {
  //   const getIdUser = 11;

  //   if (jenis_agunan === '' ||
  //     luas_tanah === '' ||
  //     luas_bangunan === '' ||
  //     kondisi_bangunan === '' ||
  //     status_kepemilikan === '' ||
  //     status_agunan === '' ||
  //     nama_sertifikat === '' ||
  //     nomor_sertifikat === '' ||
  //     masa_berlaku_sertifikat === '' ||
  //     nomor_spr === '' ||
  //     alamat_agunan === '' ||
  //     rt === '' ||
  //     rw === '' ||
  //     provinsi_agunan === '' ||
  //     kab_kota_agunan === '' ||
  //     kecamatan_agunan === '' ||
  //     kelurahan_agunan === '' ||
  //     kode_pos_agunan === '') {
  //     Alert.alert(
  //       "Proses Gagal",
  //       "Data anda belum lengkap",
  //       [
  //         // {
  //         //   text: "Cancel",
  //         //   onPress: () => console.log("Cancel Pressed"),
  //         //   style: "cancel"
  //         // },
  //         { text: "OK", onPress: () => console.log("OK Pressed") }
  //       ]
  //     );
  //   }
  //   else {
  //     axios({
  //       url:
  //         'http://192.168.1.6:4000/api/data_agunan/add_form_data_agunan/' +
  //         getIdUser,
  //       method: 'POST',
  //       data: {
  //         jenis_agunan,
  //         luas_tanah,
  //         luas_bangunan,
  //         kondisi_bangunan,
  //         status_kepemilikan,
  //         status_agunan,
  //         nama_sertifikat,
  //         nomor_sertifikat,
  //         masa_berlaku_sertifikat,
  //         nomor_spr,
  //         alamat_agunan,
  //         rt,
  //         rw,
  //         provinsi_agunan,
  //         kab_kota_agunan,
  //         kecamatan_agunan,
  //         kelurahan_agunan,
  //         kode_pos_agunan,
  //       },
  //     })
  //       .then(response => {
  //         console.log(response);
  //         navigation.navigate('DataPemohon');
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  // }

  return (

    <ScrollView style={style.container}>
      {/* 
      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Jenis Angunan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={jenis_agunan}
            onValueChange={itemValue1 => setJenis_Agunan(itemValue1)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Jenis Angunan"
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

      <View style={style.container2}>
        <View style={style.container}>
          <Text style={style.pertanyaan}>Luas Tanah</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={style.inputLuas}
              selectedValue={luas_tanah}
              onChangeText={itemValue2 => setLuas_Tanah(itemValue2)}
              placeholder="0"
            />
            <Text style={style.textLuas}>m2</Text>
          </View>
        </View>

        <View style={style.container}>
          <Text style={style.pertanyaan}>Luas Bangunan</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={style.inputLuas}
              selectedValue={luas_bangunan}
              onChangeText={itemValue3 => setLuas_Bangunan(itemValue3)}
              placeholder="0"
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
            onValueChange={itemValue4 => setKondisi_Bangunan(itemValue4)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Opsi"
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
        <Text style={style.pertanyaan}>Status Kepemilikan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={status_kepemilikan}
            onValueChange={itemValue5 => setStatus_Kepemilikan(itemValue5)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Status Kepemilikan"
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
        <Text style={style.pertanyaan}>Status Agunan</Text>
        <View style={style.dropdown}>
          <Picker
            selectedValue={status_agunan}
            onValueChange={itemValue6 => setStatus_Agunan(itemValue6)}>
            <Picker.Item
              style={style.placeholder}
              label="Pilih Status Agunan"
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>
          Atas Nama Sertifikat (Eksisting / Balik nama jual beli)
        </Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={nama_sertifikat}
            onChangeText={itemValue7 => setNama_Sertifikat(itemValue7)}
            placeholder="Masukkan Atas Nama Sertifikat"
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
            placeholder="Masukkan Nomor Sertifikat"
          />
        </View>
        <Text>*Minimum Number</Text>
      </View>

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Masa Berlaku Sertifikat</Text>
        <View >
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>No. SPR* Developer</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={nomor_spr}
            onChangeText={itemValue9 => setNomor_Spr(itemValue9)}
            placeholder="Masukkan Nomor SPR Developer"
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
            placeholder="Masukkan Alamat Angunan"
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
              onChangeText={itemValue11 => setRt(itemValue11)}
              placeholder="001"
            />
          </View>
        </View>
        <View style={style.container}>
          <Text style={style.pertanyaan}>RW</Text>
          <View>
            <TextInput
              style={style.inputbagi2}
              selectedValue={rw}
              onChangeText={itemValue12 => setRw(itemValue12)}
              placeholder="001"
            />
          </View>
        </View>
      </View> */}

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan} >Provinsi</Text>
        <View style={style.dropdown} >
          <Picker
            selectedValue={getIdProvinsi}
            onValueChange={itemValue13 => setGetIdProvinsi(itemValue13)}
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
        <Text style={style.pertanyaan} >Kota Kabupaten</Text>
        <View style={style.dropdown} >
          <Picker
            selectedValue={getIdKotaKab}
            onValueChange={itemValue14 => setGetIdKotaKab(itemValue14)}
            onPress={() => pilihKotaKabupaten()}
           >
            <Picker.Item
              style={style.placeholder}
              label="Pilih Kabupaten / Kota"  
              
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
            onValueChange={itemValue15 => setGetIdKecamatan(itemValue15)}
            onStartShouldSetResponder={() => pilihKecamatan()}
          >
            <Picker.Item
              style={style.placeholder}
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
            onValueChange={itemValue16 => setGetIdKelurahan(itemValue16)}
            onTouchStart={() => pilihKelurahan()}
          >
            <Picker.Item
              style={style.placeholder}
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

      <View style={style.kolompertanyaan}>
        <Text style={style.pertanyaan}>Kode Pos</Text>
        <View>
          <TextInput
            style={style.input}
            selectedValue={kode_pos_agunan}
            onChangeText={itemValue17 => setKode_Pos_Agunan(itemValue17)}
            placeholder="Masukan Kode Pos"
          />
        </View>
      </View>

      <View style={style.simpanLanjut}>
        <TouchableOpacity style={style.simpanForm} onPress={() => testButton()}>
          <Text style={style.simpanForm}>Simpan Formulir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnLanjut} onPress={() => handleNext()}>
          <Text style={style.btn}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </ScrollView >
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