import React, {useState} from 'react';
import {
  Card,
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
  Image,
  borderWidth,
  Dimensions,
  LayoutAnimation,
} from 'react-native';

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

function RingkasanDokumen(props) {
  return (
    <View style={lpstyles.container}>
      <ScrollView>
        <View style={lpstyles.cardCont}>
          <View style={lpstyles.cardHeaderCont}>
            <Text style={lpstyles.textHeader}>Ringkasan Pengajuan KPR</Text>
          </View>

          <View style={lpstyles.cardBody}>
            <View>
              <Text style={lpstyles.textBody}>
                Mohon lakukan pengecekan sebelum menekan tombol “Ajukan KPR”
                untuk pengajuan kredit kepemilikan properti Anda secara seksama,
                informasi yang telah Anda isi akan kami gunakan untuk menindak
                lanjuti pengajuan Anda.{' '}
              </Text>
            </View>
          </View>
        </View>

        <View style={lpstyles.kolompertanyaan}>
          <Text style={lpstyles.pertanyaan}>Nama Pemohon</Text>
          <View style={lpstyles.border}>
            <TextInput
              style={lpstyles.input}
              // setPertanyaan2={setPertanyaan2}
              // value=""
              // onChangeText={() => {}}
              placeholder="Nama Pemohon"
            />
          </View>
        </View>

        <Text>{`
Hi
this is a test message.
ccc
cc
`}</Text>

        <View style={lpstyles.container2}>
          <View style={lpstyles.container3}>
            <Text style={lpstyles.pertanyaan}>Nomor Handphone</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={lpstyles.textLuas}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder="+62"
              />
              <Text style={lpstyles.inputLuas}>8115121993</Text>
            </View>
          </View>
        </View>

        <View style={lpstyles.kolompertanyaan}>
          <Text style={lpstyles.pertanyaan}>Tujuan Kredit</Text>
          <View style={lpstyles.border}>
            <TextInput
              style={lpstyles.input}
              // setPertanyaan2={setPertanyaan2}
              // value=""
              // onChangeText={() => {}}
              placeholder="Beli Rumah"
            />
          </View>
        </View>

        <View style={lpstyles.kolompertanyaan}>
          <Text style={lpstyles.pertanyaan}>Jumlah Pinjaman</Text>
          <View style={lpstyles.border}>
            <TextInput
              style={lpstyles.input}
              // setPertanyaan2={setPertanyaan2}
              // value=""
              // onChangeText={() => {}}
              placeholder="Rp. 500.000.000"
            />
          </View>
        </View>

        <View style={lpstyles.kolompertanyaan}>
          <Text style={lpstyles.pertanyaan}>Jumlah Pinjaman</Text>
          <View style={lpstyles.border}>
            <TextInput
              style={lpstyles.input}
              // setPertanyaan2={setPertanyaan2}
              // value=""
              // onChangeText={() => {}}
              placeholder="24 Bulan"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const lpstyles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  container2: {
    flexDirection: 'row',
    marginBottom: 10,
    // backgroundColor: '#E5E5E5'
  },
  container3: {
    //   paddingLeft: 16,
    //   paddingRight: 16,
  },
  lpIklan: {
    // position: 'absolute',
    // flex: 1,
    height: 400,
    width: null,
    // top: 91,
  },
  cardCont: {
    //   borderRadius: 5,
    height: 150,
    flex: 1,
    borderWidth: 0.34,
    borderColor: 'grey',
    // paddingBottom: 20,
  },
  cardHeaderCont: {
    //   height: 33,
  },
  textHeader: {
    fontSize: 25,
    //   color: '#500878',
    marginTop: 4,
    marginLeft: 11,
    fontWeight: 'bold',
  },
  textBody: {
    fontSize: 15,
    marginLeft: 11,
    color: '#999999',
    // marginBottom: 12,
  },
  cardBody: {
    flexDirection: 'row',
    marginTop: 15,
  },
  imgCard: {
    width: 49,
    height: 49,
    marginTop: 12,
    marginLeft: 11,
    marginRight: 22,
  },
  btnCard: {
    paddingTop: 5,
    paddingLeft: 20,
    color: '#ffffff',
  },
  cardkedua: {
    height: 33,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
  },
  cardketiga: {
    height: 368,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
  },
  imgCard3: {
    height: 300,
    width: null,
  },
  kolompertanyaan: {
    marginBottom: 10,
  },
  pertanyaan: {
    fontSize: 20,
    color: 'grey',
    marginTop: 10,
    marginBottom: 10,
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
    fontSize: 17,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
  },
  textLuas: {
    // justifyContent: 'center',
    padding: 14,
    fontSize: 17,
    // borderWidth: 1,
    backgroundColor: '#B3B3B3',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  inputLuas: {
    paddingTop: 17,
    paddingBottom: 12,
    paddingRight: 500,
    // marginRight: 50,
    paddingLeft: 16,
    fontSize: 17,
    backgroundColor: '#E5E5E5',
    color: 'grey',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  item: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 10,
    marginBottom: 5,
  },
  subItem: {
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RingkasanDokumen;
