import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import React, { useState } from "react";
import {StyleSheet, View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker'

const MenuPembelian = () => {
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
            <Text style={style.pertanyaan}>Skema Pengajuan</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Opsi" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Penghasilan Tunggal" value="Penghasilan Tunggal"/>
                    <Picker.Item style={style.opsi} label="Penghasilan Gabungan/Joint Income (Suami/Istri)" value="Penghasilan Gabungan/Joint Income"/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Peruntukan Pembiayaan</Text>
            <View style={style.dropdown}>
                <Picker pertanyaan2={pertanyaan2}
                    onValueChange={(itemValue, itemIndex) => setPertanyaan2(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Opsi" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Pembelian Properti" value=""/>
                    <Picker.Item style={style.opsi} label="Top Up" value=""/>
                    <Picker.Item style={style.opsi} label="Take Over" value=""/>
                    <Picker.Item style={style.opsi} label="Take Over + Top Up" value=""/>
                    <Picker.Item style={style.opsi} label="Pembiayaan Konsumsi Berangun Properti" value=""/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Program</Text>
            <View style={style.dropdown}>
                <Picker pertanyaan3={pertanyaan3}
                    onValueChange={(itemValue, itemIndex) => setPertanyaan3(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Program" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Fix & Fix" value=""/>
                    <Picker.Item style={style.opsi} label="Angsuran Super Ringan (ASR)" value=""/>
                    <Picker.Item style={style.opsi} label="Special MMQ" value=""/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Objek yang dibiayai</Text>
            <View style={style.dropdown}>
                <Picker pertanyaan4={pertanyaan4}
                    onValueChange={(itemValue, itemIndex) => setPertanyaan4(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Opsi" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Properti" value=""/>
                    <Picker.Item style={style.opsi} label="Renovasi/ Pembangunan" value=""/>
                    <Picker.Item style={style.opsi} label="Kendaraan" value=""/>
                    <Picker.Item style={style.opsi} label="Furniture" value=""/>
                    <Picker.Item style={style.opsi} label="Jasa Konsumtif" value=""/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Akad Fasilitas yang diajukan</Text>
            <View style={style.dropdown}>
                <Picker pertanyaan5={pertanyaan5}
                    onValueChange={(itemValue, itemIndex) => setPertanyaan5(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Opsi" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Murahbahah" value=""/>
                    <Picker.Item style={style.opsi} label="MMQ (Musyarakah Mutanagishah" value=""/>
                    <Picker.Item style={style.opsi} label="Istishna" value=""/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Total Plafond yang diajukan</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan6={setPertanyaan6}
                // value=""
                placeholder= 'Input Plafond' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Jangka Waktu Pembiayaan(Bulan)</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan7={setPertanyaan7}
                keyboardType= 'numeric'
                // maxLength={7}
                // onChangeText= {(text)=> this.onChange(text)}
                // value= {this.state.pertanyaan7}
                placeholder= 'Input Tenor'/>
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

export default MenuPembelian;