import { DefaultTransition } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
// import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState, Component } from "react";
import {StyleSheet, View, Text, TextInput, ScrollView, Button, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker'


const DataPemohon = () => {
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
            <Text style={style.judul}>Data Pemohon</Text>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Nama Lengkap Sesuai KTP</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan2={setPertanyaan2}
                // value=""
                placeholder= 'Input Text' />
            </View>
        </View>
        
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Nomor KTP</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Nomor KTP' />
            </View>
        </View>
       
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Tempat Lahir</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Tempat Lahir' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Tanggal Lahir</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Tanggal Lahir' />
            </View>
        </View>
       
        {/* <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Tanggal Lahir</Text>
            <View style={style.border}>
                <DateTimePicker
                mode="date"
                value={ date }
                display='default'
                onChange={ date => this.setState({date})}
                // style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                />
            </View>
        </View> */}

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Jenis Kelamin</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Opsi" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Laki-laki" value="Laki-laki"/>
                    <Picker.Item style={style.opsi} label="Perempuan" value="Perempuan"/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Nomor Handphone</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input No.HP' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Telepon Rumah</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Telepon Rumah' />
            </View>
        </View>
        
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Nama Gadis Ibu Kandung</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Text' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Status Perkawinan</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Opsi" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Belum Menikah" value="Belum Menikah"/>
                    <Picker.Item style={style.opsi} label="Menikah" value="Menikah"/>
                    <Picker.Item style={style.opsi} label="Janda" value="Janda"/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Pendidikan Terakhir</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Opsi" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="SD/MI" value="SD/MI"/>
                    <Picker.Item style={style.opsi} label="SMP/MTS" value="SMP/MTS"/>
                    <Picker.Item style={style.opsi} label="SMA/MA" value="SMA/MA"/>
                    <Picker.Item style={style.opsi} label="Diploma I-IV" value="Diploma I-IV"/>
                    <Picker.Item style={style.opsi} label="S1" value="Sarjana"/>
                    <Picker.Item style={style.opsi} label="S2" value="Magister"/>
                    <Picker.Item style={style.opsi} label="S3" value="Doktor"/>
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Alamat KTP</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Text' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Alamat Domisili</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Text' />
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Kota</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Text' />
            </View>
        </View>
        
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Status Tempat Tinggal</Text>
            <View style={style.dropdown}>
                <Picker /*pertanyaan1={pertanyaan1}*/
                    // onValueChange={(itemValue, itemIndex) => setPertanyaan1(itemValue)}
                    >
                    <Picker.Item style={style.placeholder} label="Pilih Opsi" value="" /*enabled={false}*//>
                    <Picker.Item style={style.opsi} label="Milik Sendiri" value="Milik Sendiri"/>
                    <Picker.Item style={style.opsi} label="Keluarga" value="Keluarga"/>
                    <Picker.Item style={style.opsi} label="Kontrak/Kost" value="Kontrak/Kost"/>
                    {/* <Picker.Text label='Lainnya'/>
                    <Picker.TextInput placeholder= 'lainnya'/> */}
                </Picker>
            </View>
        </View>

        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Alamat Tempat Tinggal Saat ini</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Text' />
            </View>
        </View>
        
        <View style={style.kolompertanyaan}>
            <Text style={style.pertanyaan}>Lama Tinggal</Text>
            <View style={style.border}>
                <TextInput style={style.input}
                // setPertanyaan3={setPertanyaan3}
                // value=""
                placeholder= 'Input Angka dalam satuan bulan' />
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

export default DataPemohon;