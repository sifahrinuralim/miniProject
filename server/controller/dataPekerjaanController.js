require('dotenv').config
const { data_pekerjaan_pemohon } = require('../models/index')
const { data_pekerjaan_pasangan } = require('../models/index')

class DataPekerjaanController {

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //CRUD Form Data Pemohon

    // Create Form Data Pekerjaan Pemohon
    static addDataPekerjaanPemohon(req, res, next) {

        const getIdUser = req.params.user

        const {
            jenis_pekerjaan,
            nama_perusahaan,
            jabatan,
            kategori_instansi,
            lama_bekerja_tahun,
            lama_bekerja_bulan,
            jumlah_karyawan,
            pendapatan,
            status_pekerjaan,
            pembayaran_gaji,
            alamat_perusahaan,
            bidang_usaha,
            nomor_kantor,
            nomor_hrd,
            email_hrd,
            nomor_atasan,
            email_atasan
        } = req.body

        data_pekerjaan_pemohon.create({
            Id_user: getIdUser,
            id_form_pekerjaan: 4,
            jenis_pekerjaan,
            nama_perusahaan,
            jabatan,
            kategori_instansi,
            lama_bekerja_tahun,
            lama_bekerja_bulan,
            jumlah_karyawan,
            pendapatan,
            status_pekerjaan,
            pembayaran_gaji,
            alamat_perusahaan,
            bidang_usaha,
            nomor_kantor,
            nomor_hrd,
            email_hrd,
            nomor_atasan,
            email_atasan
        })
            .then((data) => {
                console.log(data);
                res.status(200).json({
                    message: "Data Perkejaan Pemohon Add Success",
                    result: data
                })
            })
            .catch((err) => {
                console.log(err);
                next({
                    name: "failed to add data pekerjaan pemohon",
                    log: err
                })
            })
    }

    // Read Form Data Pekerjaan Pemohon
    static getOneDataPekerjaanPemohon(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_pekerjaan_pemohon.findAll({ where: { Id_user: getIdUser } })
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

    // Update Form Data Pekerjaan Pemohon
    static updateDataPekerjaanPemohon(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_pekerjaan,
            nama_perusahaan,
            jabatan,
            kategori_instansi,
            lama_bekerja_tahun,
            lama_bekerja_bulan,
            jumlah_karyawan,
            pendapatan,
            status_pekerjaan,
            pembayaran_gaji,
            alamat_perusahaan,
            bidang_usaha,
            nomor_kantor,
            nomor_hrd,
            email_hrd,
            nomor_atasan,
            email_atasan
        } = req.body

        data_pekerjaan_pemohon.update({
            jenis_pekerjaan,
            nama_perusahaan,
            jabatan,
            kategori_instansi,
            lama_bekerja_tahun,
            lama_bekerja_bulan,
            jumlah_karyawan,
            pendapatan,
            status_pekerjaan,
            pembayaran_gaji,
            alamat_perusahaan,
            bidang_usaha,
            nomor_kantor,
            nomor_hrd,
            email_hrd,
            nomor_atasan,
            email_atasan
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

    // Delete Form Data Pekerjaan Pemohon
    static deleteDataPekerjaanPemohon(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_pekerjaan_pemohon.destroy({ where: { Id_user: getIdUser } })
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
    //CRUD Form Data Pekerjaan Pasangan

    // Create Form Data Pekerjaan Pasangan
    static addDataPekerjaanPasangan(req, res, next) {

        const getIdUser = req.params.user

        const {
            jenis_pekerjaan_pasangan,
            nama_perusahaan_pasangan,
            jabatan_pasangan,
            kategori_instansi_pasangan,
            lama_bekerja_pasangan,
            jumlah_karyawan_pasangan,
            pendapatan_pasangan,
            status_pasangan,
            pembayaran_gaji_pasangan,
            alamat_perusahaan_pasangan,
            bidang_usaha_pasangan,
            nomor_kantor_pasangan,
            nomor_hrd_pasangan,
            email_hrd_pasangan,
            nomor_atasan_pasangan,
            email_atasan_pasangan
        } = req.body

        data_pekerjaan_pasangan.create({
            Id_user: getIdUser,
            id_form_pekerjaan: 4,
            jenis_pekerjaan_pasangan,
            nama_perusahaan_pasangan,
            jabatan_pasangan,
            kategori_instansi_pasangan,
            lama_bekerja_pasangan,
            jumlah_karyawan_pasangan,
            pendapatan_pasangan,
            status_pasangan,
            pembayaran_gaji_pasangan,
            alamat_perusahaan_pasangan,
            bidang_usaha_pasangan,
            nomor_kantor_pasangan,
            nomor_hrd_pasangan,
            email_hrd_pasangan,
            nomor_atasan_pasangan,
            email_atasan_pasangan
        })
            .then((data) => {
                console.log(data);
                res.status(200).json({
                    message: "Add Data Method Create",
                    result: data
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Error Create",
                    log: err
                })
            })
    }

    // Read Form Data Pekerjaan Pemohon
    static getOneDataPekerjaanPasangan(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_pekerjaan_pasangan.findAll({ where: { Id_user: getIdUser } })
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

    // Update Form Data Pekerjaan Pemohon
    static updateDataPekerjaanPasangan(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_pekerjaan_pasangan,
            nama_perusahaan_pasangan,
            jabatan_pasangan,
            kategori_instansi_pasangan,
            lama_bekerja_pasangan,
            jumlah_karyawan_pasangan,
            pendapatan_pasangan,
            status_pasangan,
            pembayaran_gaji_pasangan,
            alamat_perusahaan_pasangan,
            bidang_usaha_pasangan,
            nomor_kantor_pasangan,
            nomor_hrd_pasangan,
            email_hrd_pasangan,
            nomor_atasan_pasangan,
            email_atasan_pasangan
        } = req.body

        data_pekerjaan_pasangan.update({
            jenis_pekerjaan_pasangan,
            nama_perusahaan_pasangan,
            jabatan_pasangan,
            kategori_instansi_pasangan,
            lama_bekerja_pasangan,
            jumlah_karyawan_pasangan,
            pendapatan_pasangan,
            status_pasangan,
            pembayaran_gaji_pasangan,
            alamat_perusahaan_pasangan,
            bidang_usaha_pasangan,
            nomor_kantor_pasangan,
            nomor_hrd_pasangan,
            email_hrd_pasangan,
            nomor_atasan_pasangan,
            email_atasan_pasangan
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

    // Delete Form Data Pekerjaan Pemohon
    static deleteDataPekerjaanPasangan(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_pekerjaan_pasangan.destroy({ where: { Id_user: getIdUser } })
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

module.exports = DataPekerjaanController