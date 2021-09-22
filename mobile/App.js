/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackNavigator from './MainStackNavigator';
import RingkasanDokumen from './Screen/Ringkasan/Ringkasan_Dokumen';
// import DataAngunan from './Screen/Form/Data Angunan';
import RingkasanPernyataan from './Screen/Ringkasan/Ringkasan_Pernyataan';
import Pendaftaran_berhasil from './Screen/Login/Pendaftaran_berhasil';
import PengajuanBerhasil from './Screen/Login/Pengajuan_Berhasil';
import TakeOver_TopUp from './Screen/Form/Fasilitas Pembayaran/Pembiayaan TakeOver & TopUp';
import UploadDocument from './Screen/Dokumen/Upload_Document';
import LandingPage from './Screen/Login/LandingPageScreen';
import Abc from './Screen/Components/Stepper_screen';
import Profil from './Screen/Profil/Profil';
import StepperA from './Screen/Components/Stepper_screen';
import PembelianProperti from './Screen/Form/Fasilitas Pembayaran/Pembelian Properti';

export default function App() {
  const Stack = createNativeStackNavigator();

  // Pasang kondisi IF ELSE

  // Jika punya token, tampilkan halaman 2

  // Jika tidak punya token, tampilkan halaman Login
  // return <PembelianProperti />;
  return <MainStackNavigator />;
}
