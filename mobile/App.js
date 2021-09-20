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
import Tes from './Screen/Login/tes';

export default function App() {
  const Stack = createNativeStackNavigator();

  // Pasang kondisi IF ELSE

  // Jika punya token, tampilkan halaman 2

  // Jika tidak punya token, tampilkan halaman Login
  // return <RingkasanPernyataan />;
  return <MainStackNavigator />;
}
