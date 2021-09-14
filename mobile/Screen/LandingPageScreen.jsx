import {isTSConstructSignatureDeclaration} from '@babel/types';
import React from 'react';
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
} from 'react-native';

const vw = Dimensions.get('window').width / 100;
const vh = Dimensions.get('window').height / 100;

const LandingPage = () => {
  return (
    <View style={lpstyles.container}>
      <ScrollView>
        <Image
          style={lpstyles.lpIklan}
          source={require('../Image/lp3.png')}
          resizeMode="contain"></Image>
        <View style={lpstyles.cardCont}>
          <View style={lpstyles.cardHeaderCont}>
            <Text style={lpstyles.textHeader}>Status Pengajuan KPR</Text>
          </View>
          <View style={lpstyles.cardBody}>
            <Image
              source={require('../Image/iconCard.png')}
              style={lpstyles.imgCard}
            />
            <View>
              <Text style={lpstyles.textBody}>Kamu belum mengajukan KPR.</Text>
              <Text style={lpstyles.textBody}>
                Yuk, Wujudkan rumah idamanmu bersama Bank Muamalat.
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                alignItems: 'flex-end',
                paddingTop: 130,
                paddingRight: 12,
                borderRadius: 9,
                // justifyContent: 'flex-end',
              }}>
              <Button
                color="#500878"
                style={lpstyles.btnCard}
                title="Ajukan Sekarang"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={lpstyles.cardkedua}>
          <Text style={lpstyles.textHeader}>Formulir Tersimpan</Text>
        </View>
        <View style={lpstyles.cardketiga}>
          <View>
            <Text style={lpstyles.textHeader}>Keuntungan</Text>
          </View>
          <Image
            source={require('../Image/infocard3.png')}
            style={lpstyles.imgCard3}
            resizeMode="contain"
          />
        </View>
        <View>
          <View>
            <Text>Proses KPR iB Syariah </Text>
            <Text>Bank Muamalat</Text>
          </View>
          <View>
            <Text>
              isi formulir KPR secara online melalui Aplikasi MDin dan Official
              Website Bank Muamalat
            </Text>
            <Text>Upload Dokumen Syarat KPR</Text>
            <Text>Proses penilaian calon debitur, agunan </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const lpstyles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  lpIklan: {
    // position: 'absolute',
    // flex: 1,
    height: 400,
    width: null,
    // top: 91,
  },
  cardCont: {
    borderRadius: 5,
    height: 328,
    flex: 1,
    borderWidth: 1,
    // paddingBottom: 20,
  },
  cardHeaderCont: {
    height: 33,
    borderBottomWidth: 1,
  },
  textHeader: {
    fontSize: 16,
    color: '#500878',
    marginTop: 4,
    marginLeft: 11,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textBody: {
    fontSize: 15,
    marginTop: 12,
    // marginBottom: 12,
  },
  cardBody: {
    flexDirection: 'row',
    marginTop: 12,
  },
  imgCard: {
    width: 49,
    height: 49,
    marginTop: 12,
    marginLeft: 11,
    marginRight: 22,
  },
  btnCard: {
    paddingTop: 18,
    paddingLeft: 12,
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
});

export default LandingPage;
