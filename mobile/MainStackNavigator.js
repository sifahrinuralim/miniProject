/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Screen/Login/Login';
import Register from './Screen/Login/RegisterScreen';
import LandingPage from './Screen/Login/LandingPageScreen';

import DataAngunan from './Screen/Form/Data Angunan';
import DataKerabat from './Screen/Form/Data Kerabat';
import DataPasangan from './Screen/Form/Data Pasangan';
import DataPembiayaanForm from './Screen/Form/Data Pembiayaan Form';
import DataPembiayaanUtama from './Screen/Form/Data Pembiayaan Utama';
import DataPemohon from './Screen/Form/Data Pemohon';
import FasilitasPembayaran from './Screen/Form/Fasilitas Pembayaran';
import MenuPembelian from './Screen/Form/Menu Pembelian';
import PembelianKendaraan from './Screen/Form/Pembelian Kendaraan';
import PembelianProperti from './Screen/Form/Pembelian Properti';
import TopUp from './Screen/Form/Pembelian Top Up';
import DataPekerjaan from './Screen/Form/Data PekerjaanUtama';
import DataPekerjaanPasangan from './Screen/Form/Data Pekerjaan Pasangan';
import InformasiNasabah from './Screen/Form/Informasi_Nasabah';
import UploadDocument from './Screen/Dokumen/Upload_Document';

function MainStackNavigator(props) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          initialRouteName="Login"
          options={{title: 'Login', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          initialRouteName="Register"
          options={{title: 'Register', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          initialRouteName="LandingPage"
          options={{title: 'Home ', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DataAngunan"
          component={DataAngunan}
          initialRouteName="DataAngunan"
          options={{title: 'Data Agunan', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DataKerabat"
          component={DataKerabat}
          initialRouteName="DataKerabat"
          options={{title: 'Data Kerabat', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DataPasangan"
          component={DataPasangan}
          initialRouteName="DataPasangan"
          options={{title: 'Data Pasangan', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DataPembiayaanForm"
          component={DataPembiayaanForm}
          initialRouteName="DataPembiayaanForm"
          options={{title: 'Data Pembiayaan Form', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DataPembiayaanUtama"
          component={DataPembiayaanUtama}
          initialRouteName="DataPembiayaanUtama"
          options={{title: 'Data Pembiayaan Utama', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DataPemohon"
          component={DataPemohon}
          initialRouteName="DataPemohon"
          options={{title: 'Data Pemohon', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="FasilitasPembayaran"
          component={FasilitasPembayaran}
          initialRouteName="FasilitasPembayaran"
          options={{title: 'Fasilitas Pembayaran', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="MenuPembelian"
          component={MenuPembelian}
          initialRouteName="MenuPembelian"
          options={{title: 'Menu Pembelian', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="PembelianKendaraan"
          component={PembelianKendaraan}
          initialRouteName="PembelianKendaraan"
          options={{title: 'PembelianKendaraan', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="PembelianProperti"
          component={PembelianProperti}
          initialRouteName="PembelianProperti"
          options={{title: 'PembelianProperti', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="TopUp"
          component={TopUp}
          initialRouteName="TopUp"
          options={{title: 'Pembelian TopUp', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DataPekerjaan"
          component={DataPekerjaan}
          initialRouteName="DataPekerjaan"
          options={{title: 'Data Pekerjaan', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="DataPekerjaanPasangan"
          component={DataPekerjaanPasangan}
          initialRouteName="DataPekerjaanPasangan"
          options={{
            title: 'Data Pekerjaan Pasangan',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="InformasiNasabah"
          component={InformasiNasabah}
          initialRouteName="InformasiNasabah"
          options={{
            title: 'Informasi Nasabah',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="UploadDocument"
          component={UploadDocument}
          initialRouteName="UploadDocument"
          options={{
            title: 'Upload Document',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStackNavigator;
