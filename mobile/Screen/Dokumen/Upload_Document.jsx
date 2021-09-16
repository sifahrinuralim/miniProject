import React from 'react';
import {
  Linking,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableHighlight,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';

function UploadDocument(props) {
  const {navigation} = props;
  return (
    <View>
      <ScrollView style={style.container}>
        <View>
          <Text style={style.judul}>Document Wajib</Text>
        </View>
        <View style={{flexDirection: 'row', borderBottomWidth: 1}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>Kartu Keluarga</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>Surat Nikah *</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>NPWP</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>Slip Gaji Asli</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>Surat Keterangan Kerja</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>Mutasi Rekening Buku Tabungan</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>Laporan Keuangan atau Usaha</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View>
          <Text style={style.judul}>Dokumen Jaminan Untuk Pembeli</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>Sertifikat Bangunan*</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>IMB*</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={style.subjudul}>PPBB*</Text>
            </View>
            <View>
              <Text>Format file .jpeg, .jpg, .png, .pdf Maksimal 1 Mb</Text>
            </View>
          </View>
          <View style={style.viewUnggah}>
            <Text style={style.textUnggah}>Unggah</Text>
          </View>
        </View>

        <View>
          <Text>
            Data yang Anda berikan akan tersimpan dan terlindungi dengan aman
            didalam sistem Bank Muamalat.
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Text>Simpan Dokumen</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Lanjut</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
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
  subjudul: {
    fontSize: 20,
    color: '#4d4d4d',
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
  textUnggah: {
    color: '#500878',
  },
  viewUnggah: {
    right: -225,
  },
  containerText: {
    borderBottomWidth: 1,
  },
});
export default UploadDocument;
