require('dotenv').config
const { data_diri_keluarga } = require('../models/index')
const { data_diri_pasangan } = require('../models/index')
const { data_diri_kerabat } = require('../models/index')

class DataPemohonKeluargaController {

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //CRUD Form Data Pemohon

    // Create Form Data Pemohon
    static addDataPemohon(req, res, next) {

        const getIdUser = parseInt(req.params.user)

        const {
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
            kode_pos_domisili
        } = req.body

        data_diri_keluarga.create({
            Id_user: getIdUser,
            id_form_data_diri_keluarga: 3,
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
            kode_pos_domisili
        })
            .then((data) => {
                res.status(201).json({
                    message: "Add Form Data Diri keluarga Success",
                    result: data
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Server Error",
                    log: err
                })
            })
    }

    // Read Form Data Pemohon
    static getOneDataPemohon(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_diri_keluarga.findAll({ where: { Id_user: getIdUser } })
                .then((data) => {
                    res.status(404).json({
                        message: "fGet One Id User",
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

    // Update Form Data Pemohon
    static updateDataPemohon(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
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
            kode_pos_domisili
        } = req.body

        data_diri_keluarga.update({
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
            kode_pos_domisili
        }, { where: { Id_user: getIdUser } })
            .then((updated) => {
                res.status(200).json({
                    message: "update Data success",
                    result: updated
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
    }

    // Delete Form Data Pemohon
    static deleteDataPemohon(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_diri_keluarga.destroy({ where: { Id_user: getIdUser } })
            .then((data) => {
                res.status(200).json({
                    message: "delete Data success",
                    result: data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //CRUD Form Data Pasangan

    // Create Form Data Pasangan
    static addDataPasangan(req, res, next) {
        const getIdUser = parseInt(req.params.user)

        const {
            nama_pasangan,
            tempat_lahir_pasangan,
            tanggal_lahir_pasangan,
            nik_pasangan,
            npwp_pasangan,
            pekerjaan_pasangan,
            no_telepon_pasangan,
        } = req.body

        data_diri_pasangan.create({
            Id_user: getIdUser,
            id_form_data_diri_keluarga: 3,
            nama_pasangan,
            tempat_lahir_pasangan,
            tanggal_lahir_pasangan,
            nik_pasangan,
            npwp_pasangan,
            pekerjaan_pasangan,
            no_telepon_pasangan,
        })
            .then((data) => {
                console.log(data);
                res.status(201).json({
                    message: "Add Form Data Diri Pasangan",
                    result: data
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Server Error",
                    log: err
                })
            })
    }

    // Read Form Data Pasangan
    static getOneDataPasangan(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_diri_pasangan.findAll({ where: { Id_user: getIdUser } })
                .then((data) => {
                    res.status(404).json({
                        message: "fGet One Id User",
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

    // Update Form Data Pasangan
    static updateDataPasangan(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            nama_pasangan,
            tempat_lahir_pasangan,
            tanggal_lahir_pasangan,
            nik_pasangan,
            npwp_pasangan,
            pekerjaan_pasangan,
            no_telepon_pasangan
        } = req.body

        data_diri_pasangan.update({
            nama_pasangan,
            tempat_lahir_pasangan,
            tanggal_lahir_pasangan,
            nik_pasangan,
            npwp_pasangan,
            pekerjaan_pasangan,
            no_telepon_pasangan
        }, { where: { Id_user: getIdUser } })
            .then((updated) => {
                res.status(200).json({
                    message: "update Data success",
                    result: updated
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
    }

    // Delete Form Data Pasangan
    static deleteDataPasangan(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_diri_pasangan.destroy({ where: { Id_user: getIdUser } })
            .then((data) => {
                res.status(200).json({
                    message: "delete Data success",
                    result: data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
    }

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //CRUD Form Data Kerabat

    // Create Form Data Kerabat
    static addDataDiriKerabat(req, res, next) {
        const getIdUser = parseInt(req.params.user)

        const {
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

        data_diri_kerabat.create({
            Id_user: getIdUser,
            id_form_data_diri_keluarga: 3,
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
                console.log(data);
                res.status(201).json({
                    message: "Add Form Data Diri Kerabat",
                    result: data
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Server Error",
                    log: err
                })
            })
    }

    // Read Form Data Pasangan
    static getOneDataKerabat(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_diri_kerabat.findAll({ where: { Id_user: getIdUser } })
                .then((data) => {
                    res.status(404).json({
                        message: "fGet One Id User",
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

    // Update Form Data Pasangan
    static updateDataKerabat(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
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

        data_diri_kerabat.update({
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
        }, { where: { Id_user: getIdUser } })
            .then((updated) => {
                res.status(200).json({
                    message: "update Data success",
                    result: updated
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
    }

    // Delete Form Data Pasangan
    static deleteDataKerabat(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_diri_kerabat.destroy({ where: { Id_user: getIdUser } })
            .then((data) => {
                res.status(200).json({
                    message: "delete Data success",
                    result: data
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

module.exports = DataPemohonKeluargaController