import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import React, { useState } from "react";
import {StyleSheet, View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker'

const PembelianTopUp = () => {
    const [pertanyaan1, setPertanyaan1] = React.useState("Pilih Opsi")
    const [pertanyaan2, setPertanyaan2] = React.useState("Pilih Opsi")
    const [pertanyaan3, setPertanyaan3] = React.useState("Pilih Opsi")
    const [pertanyaan4, setPertanyaan4] = React.useState("Pilih Opsi")
    const [pertanyaan5, setPertanyaan5] = React.useState("Pilih Opsi")
    const [pertanyaan6, setPertanyaan6] = React.useState(null)
    const [pertanyaan7, setPertanyaan7] = React.useState("Pilih Opsi")
    const [pertanyaan8, setPertanyaan8] = React.useState("Pilih Opsi")

    return (
      <ScrollView style={style.container}>

        <View style={style.kolompertanyaan}>
            <Text style={style.judul}>Pembiayaan Kendaraan</Text>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Jenis Bank Asal</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Jenis Bank Asal" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Bank Syariah" value="Bank Syariah"/>
                    <Picker.Item style={style.opsi} label="Bank Konvensional" value="Bank Konvensional"/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Nama Bank</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan2={setPertanyaan2}
                // value=""
                placeholder= 'Input Nama Bank' />
            </View>
        </View>
        
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Peruntukan Fasilitas di Bank Sebelumnya</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Jenis Penjual" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Pembelian Properti" value="Pembelian Properti"/>
                    <Picker.Item style={style.opsi} label="Renovasi/Pembangunan" value="Renovasi/Pembangunan"/>
                    <Picker.Item style={style.opsi} label="Refinancing. Konsumsi Beragun Properti" value="Refinancing. Konsumsi Beragun Properti"/>
                </Picker>
            </View>
        </View>
        
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Akad Fasilitas di Bank Sebelumnya</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Murabahah" value="Murabahah"/>
                    <Picker.Item style={style.opsi} label="MMQ (Musyarakah Mutanagishah)" value="MMQ"/>
                    <Picker.Item style={style.opsi} label="IMBT" value="IMBT"/>
                    <Picker.Item style={style.opsi} label="lainnya" value="lainnya"/>
                </Picker>
            </View>
        </View>
       
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Perkiraan Nilai Pelunasan Take Over</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Angka dengan satuan Rp. (ex: 500000000)' />
            </View>
        </View>
        
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Plafond Top Up</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Angka dengan satuan Rp. (ex: 500000000)' />
            </View>
        </View>
       

        <View style={style.simpanLanjut}>
            <TouchableOpacity style={style.simpanForm}>
                <Text style={style.simpanForm}>Simpan Formulir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnLanjut}>
                <Text style={style.btn}>Lanjut</Text>
            </TouchableOpacity>
        
        </View>

      </ScrollView>
    );
};

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
        flexDirection: "column",
        // alignItems: 'center'
    },
    kolompertanyaan: {
        marginBottom: 40
    },
    judul: {
        fontSize: 30,
        marginBottom: 20
    },
    pertanyaan: {
        fontSize: 20,
        color: 'grey',
        marginBottom: 20
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
        borderRadius: 9
    },
    placeholder: {
        color: 'grey'
    },
    opsi: {
        color: 'black'
    },
    border: {
        borderWidth: .1,
        borderColor: 'black',
        borderRadius: 8
    },
    input: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 16,
        paddingLeft: 16,
        fontSize: 15,
        backgroundColor: '#E5E5E5',
        borderRadius: 8
    },
    inputbagi2: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 150,
        marginRight: 50,
        paddingLeft: 16,
        fontSize: 15,
        backgroundColor: '#E5E5E5',
        borderRadius: 5
    },
    container2: {
        flexDirection: "row",
        marginBottom: 30,
        
        // backgroundColor: '#E5E5E5'    
    },
    simpanLanjut: {
        flexDirection: "row",
        marginBottom: 40,      
    },
    simpanForm: {
        // alignItems: "flex-end",
        // alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        flex: .5,
        // marginRight: 0,
        color: '#500878'
    },
    btnLanjut: {
        // paddingLeft: 50
        borderRadius: 9,
        padding: 10,
        flex: .2,
        alignItems: "center",
        backgroundColor: "#500878",
        justifyContent: 'center',
        marginRight: -200,
       
    },
    btn: {
        fontSize: 25,
        flexDirection: "row-reverse",
        alignItems: "flex-end",
        color: 'white'
    }
});

export default PembelianTopUp;