/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Screen/Login/Login';
import Register from './Screen/Login/RegisterScreen';
import LandingPage from './Screen/Login/LandingPageScreen';

import DataAngunan from './Screen/Form/Data Agunan/Data Angunan';
import DataKerabat from './Screen/Form/Data Pemohon dan Keluarga/Data Kerabat';
import DataPasangan from './Screen/Form/Data Pemohon dan Keluarga/Data Pasangan';
import DataPembiayaanForm from './Screen/Form/Data Pembiayaan yang Dimiliki/Data Pembiayaan Form';
import DataPembiayaanUtama from './Screen/Form/Data Pembiayaan yang Dimiliki/Data Pembiayaan Utama';
import DataPemohon from './Screen/Form/Data Pemohon dan Keluarga/Data Pemohon';
import DataPengajuan from './Screen/Form/Fasilitas Pembayaran/Data Pengajuan';
import MenuPembelian from './Screen/Form/Menu Pembelian';
import PembiayaanKonsumsi from './Screen/Form/Fasilitas Pembayaran/PembiayaanKonsumsi';
import PembelianProperti from './Screen/Form/Fasilitas Pembayaran/Pembelian Properti';
import DataPekerjaan from './Screen/Form/Data Pekerjaan/Data PekerjaanUtama';
import DataPekerjaanPasangan from './Screen/Form/Data Pekerjaan/Data Pekerjaan Pasangan';
import InformasiNasabah from './Screen/Login/Informasi_Nasabah';
import UploadDocument from './Screen/Dokumen/Upload_Document';

import PendaftaranBerhasil from './Screen/Login/Pendaftaran_berhasil';
import PengajuanBerhasil from './Screen/Login/Pengajuan_Berhasil';

import TakeOver_TopUp from './Screen/Form/Fasilitas Pembayaran/Pembiayaan TakeOver & TopUp';
import RingkasanPernyataan from './Screen/Ringkasan/Ringkasan_Pernyataan';

function MainStackNavigator(props) {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DataKerabat">
      {/* <Stack.Navigator initialRouteName="LandingPage"> */}
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
          name="DataPengajuan"
          component={DataPengajuan}
          initialRouteName="DataPengajuan"
          options={{title: 'Data Pengajuan', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="MenuPembelian"
          component={MenuPembelian}
          initialRouteName="MenuPembelian"
          options={{title: 'Menu Pembelian', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="PembiayaanKonsumsi"
          component={PembiayaanKonsumsi}
          initialRouteName="PembiayaanKonsumsi"
          options={{title: 'PembiayaanKonsumsi', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="PembelianProperti"
          component={PembelianProperti}
          initialRouteName="PembelianProperti"
          options={{title: 'PembelianProperti', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="TakeOver_TopUp"
          component={TakeOver_TopUp}
          initialRouteName="TakeOver_TopUp"
          options={{
            title: 'Pembelian Take Over/Top Up',
            headerTitleAlign: 'center',
          }}
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
        <Stack.Screen
          name="PendaftaranBerhasil"
          component={PendaftaranBerhasil}
          initialRouteName="PendaftaranBerhasil"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PengajuanBerhasil"
          component={PengajuanBerhasil}
          initialRouteName="PengajuanBerhasil"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RingkasanPernyataan"
          component={RingkasanPernyataan}
          initialRouteName="RingkasanPernyataan"
          options={{
            title: 'Ringkasan Pernyataan',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStackNavigator;
