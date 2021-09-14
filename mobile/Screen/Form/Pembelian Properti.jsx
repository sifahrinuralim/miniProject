import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import React, { useState } from "react";
import {StyleSheet, View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker'

const PembelianProperti = () => {
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
            <Text style={style.pertanyaan}>Jenis Penjual</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Jenis Penjual" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Developer Rekanan" value="Penghasilan Tunggal"/>
                    <Picker.Item style={style.opsi} label="Developer Non Rekanan" value="Penghasilan Gabungan/Joint Income"/>
                    <Picker.Item style={style.opsi} label="Non Developer" value="Non Developer"/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Nama Penjual</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan2={setPertanyaan2}
                // value=""
                placeholder= 'Input Text' />
            </View>
        </View>
        
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Harga Penawaran Penjual atau Nilai SPR</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'dalam satuan RP. ex: 500000000' />
            </View>
        </View>
       
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Nomor telepon Penjual</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input No.Telepon (ex: 08xxxxxxxxx)' />
            </View>
        </View>
       
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Nama Proyek</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Text' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Kondisi Bangunan</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Kondisi Bangunan" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Siap Huni (Ready Stock)" value="Siap Huni (Ready Stock)"/>
                    <Picker.Item style={style.opsi} label="Dalam Proses Pembuatan (Indent)" value="Dalam Proses Pembuatan (Indent)"/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Alamat Properti</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Nama jalan, Nomor Rumah, Cluster' />
            </View>
        </View>

        <View style={style.container2}>
            <View style={style.container}>
                <Text style={style.pertanyaan}>RT</Text>
                <View>
                    <TextInput style={style.inputbagi2}
                    // setPertanyaan3={setPertanyaan3}
                    // value=""
                    placeholder= 'RT' />
                </View>
            </View>
            <View style={style.container}>
                <Text style={style.pertanyaan}>RW</Text>
                <View>
                    <TextInput style={style.inputbagi2}
                    // setPertanyaan3={setPertanyaan3}
                    // value=""
                    placeholder= 'RW' />
                </View>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Kab/Kota</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Kab/Kot' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Kecamatan</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Kecamatan' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Kode Post</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Kode Post' />
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

export default PembelianProperti;