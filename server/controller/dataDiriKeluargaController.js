require('dotenv').config
const { data_diri_keluarga } = require('../models/index')

class DataDiriKeluarga {

    static getOne(req, res) {
        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_diri_keluarga.findAll({ where: { Id_user: req.params.user } })
                .then((data) => {
                    res.status(404).json({
                        message: "fetch data Success",
                        data: data
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "Internal Server Error",
                        log: err
                    })
                })
        }
    }

    static getAll(req, res) {
        data_diri_keluarga.findAll()
            .then((data) => {
                res.status(200).json({
                    message: "fetch all user success",
                    data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
    }

    static addDataDiriKeluarga1(req, res) {
        const {
            Id_user,
            id_form_data_diri_keluarga,
            nama_pemohon,
            tempat_lahir_pemohon,
            tanggal_lahir_pemohon,
            nik_pemohon,
            npwp_pemohon,
            nama_ibu_kandung_pemohon,
            status_kawin_pemohon,
            jumlah_tanggungan_anak,
            pendidikan_terakhir,
            status_tempat_tinggal,
            alamat_ktp_domisili,
            rt_domisili,
            rw_domisili,
            provinsi_domisili,
            kab_kota_domisili,
            kecamatan_domisili,
            kelurahan_domisili,
            kode_pos_domisili,
            alamat_ktp_saat_ini,
            rt_saat_ini,
            rw_saat_ini,
            provinsi_saat_ini,
            kab_kota_saat_ini,
            kecamatan_saat_ini,
            kelurahan_saat_ini,
            kode_pos_saat_ini,
            lama_tinggal,
            alamat_surat,
            nomor_handphone_1,
            nomor_handphone_2,
            nomor_rumah,
            email,
        } = req.body

        data_diri_keluarga.create({
            Id_user,
            id_form_data_diri_keluarga,
            nama_pemohon,
            tempat_lahir_pemohon,
            tanggal_lahir_pemohon,
            nik_pemohon,
            npwp_pemohon,
            nama_ibu_kandung_pemohon,
            status_kawin_pemohon,
            jumlah_tanggungan_anak,
            pendidikan_terakhir,
            status_tempat_tinggal,
            alamat_ktp_domisili,
            rt_domisili,
            rw_domisili,
            provinsi_domisili,
            kab_kota_domisili,
            kecamatan_domisili,
            kelurahan_domisili,
            kode_pos_domisili,
            alamat_ktp_saat_ini,
            rt_saat_ini,
            rw_saat_ini,
            provinsi_saat_ini,
            kab_kota_saat_ini,
            kecamatan_saat_ini,
            kelurahan_saat_ini,
            kode_pos_saat_ini,
            lama_tinggal,
            alamat_surat,
            nomor_handphone_1,
            nomor_handphone_2,
            nomor_rumah,
            email
        })
            .then((data) => {
                res.status(201).json({
                    message: "Add Form Data Diri keluarga Success",
                    result: data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Server Error",
                    log: err
                })
            })
    }

    static addDataDiriKeluarga2(req, res) {
        const {
            Id_user,
            id_form_data_diri_keluarga,
            nama_pasangan,
            tempat_lahir_pasangan,
            tanggal_lahir_pasangan,
            nik_pasangan,
            npwp_pasangan,
            pekerjaan_pasangan,
            no_telepon_pasangan,
            nama_kerabat,
            alamat_kerabat,
            rt_kerabat,
            rw_kerabat,
            provinsi_kerabat,
            kab_kota_kerabat,
            kecamatan_kerabat,
            kelurahan_kerabat,
            kode_pos_kerabat,
            no_telepon_rumah_kerabat,
            no_handphone_kerabat,
            hubungan_nasabah_kerabat
        } = req.body

        data_diri_keluarga.create({
            Id_user,
            id_form_data_diri_keluarga,
            nama_pasangan,
            tempat_lahir_pasangan,
            tanggal_lahir_pasangan,
            nik_pasangan,
            npwp_pasangan,
            pekerjaan_pasangan,
            no_telepon_pasangan,
            nama_kerabat,
            alamat_kerabat,
            rt_kerabat,
            rw_kerabat,
            provinsi_kerabat,
            kab_kota_kerabat,
            kecamatan_kerabat,
            kelurahan_kerabat,
            kode_pos_kerabat,
            no_telepon_rumah_kerabat,
            no_handphone_kerabat,
            hubungan_nasabah_kerabat
        })
            .then((data) => {
                res.status(201).json({
                    message: "Add Form Data Diri keluarga Success",
                    result: data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Server Error",
                    log: err
                })
            })
    }

    static addDataDiriKeluarga3(req, res) {
        const {
            Id_user,
            id_form_data_diri_keluarga,
            nama_kerabat,
            alamat_kerabat,
            rt_kerabat,
            rw_kerabat,
            provinsi_kerabat,
            kab_kota_kerabat,
            kecamatan_kerabat,
            kelurahan_kerabat,
            kode_pos_kerabat,
            no_telepon_rumah_kerabat,
            no_handphone_kerabat,
            hubungan_nasabah_kerabat
        } = req.body

        data_diri_keluarga.create({
            Id_user,
            id_form_data_diri_keluarga,
            nama_kerabat,
            alamat_kerabat,
            rt_kerabat,
            rw_kerabat,
            provinsi_kerabat,
            kab_kota_kerabat,
            kecamatan_kerabat,
            kelurahan_kerabat,
            kode_pos_kerabat,
            no_telepon_rumah_kerabat,
            no_handphone_kerabat,
            hubungan_nasabah_kerabat
        })
            .then((data) => {
                res.status(201).json({
                    message: "Add Form Data Diri keluarga Success",
                    result: data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Server Error",
                    log: err
                })
            })
    }
}

module.exports = DataDiriKeluarga