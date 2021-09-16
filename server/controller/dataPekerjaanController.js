require('dotenv').config
const { data_pekerjaan_pemohon } = require('../models/index')
const { data_pekerjaan_pasangan } = require('../models/index')

class DataPekerjaan {

    // Get One berdasarkan Id User
    static getOne(req, res) {

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

    static getAll(req, res) {
        data_pekerjaan_pemohon.findAll()
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

    static addPekerjaanPemohon(req, res) {

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
                res.status(500).json({
                    message: "Error Create",
                    log: err
                })
            })
    }

    static addPekerjaanPasangan(req, res) {

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
}

module.exports = DataPekerjaan