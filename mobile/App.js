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
// import {StackNavigator} from 'react-navigation';
// import Header from './Screen/Components/Header';
import DataKerabat from './Screen/Form/Data Kerabat';
import DataPasangan from './Screen/Form/Data Pasangan';
import DataPemohon from './Screen/Form/Data Pemohon';
import FasilitasPembayaran from './Screen/Form/Fasilitas Pembayaran';
import MenuPembelian from './Screen/Form/Menu Pembelian';
import PembelianProperti from './Screen/Form/Pembelian Properti';
import PembelianKendaraan from './Screen/Form/Pembelian Kendaraan';
import LandingPage from './Screen/Login/LandingPageScreen';
import DataAngunan from './Screen/Form/Data Angunan';
import Login from './Screen/Login/Login';
import Register from './Screen/Login/RegisterScreen';
// import {createStackNavigator} from 'react-navigation-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackNavigator from './MainStackNavigator';
// import DataAngunan from './Screen/Form/Data Angunan';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return <MainStackNavigator />;
}