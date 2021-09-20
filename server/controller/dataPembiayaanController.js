require('dotenv').config
const { data_pembiayaan_saat_ini } = require('../models/index')

class DataPembiayaanYangDimilikiController {

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //CRUD Form Data Pembiayaan Yang Dimiliki

    // Create Form Data Pembiayaan Yang Dimiliki
    static addDataPembiayaan(req, res, next) {

        const {
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur,
        } = req.body

        const getIdUser = req.params.user

        data_pembiayaan_saat_ini.create({
            Id_user: getIdUser,
            id_form_pembiayaan: 5,
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur,
        })
            .then((data) => {
                res.status(200).json({
                    message: "Add Data Method Create",
                    result: data
                })
            })
            .catch((err) => {
                next({
                    name: "failed to add data pembiayaan saat ini",
                    log: err
                })
            })
    }

    // Read Form Data Pembiayaan Yang Dimiliki
    static getOneDataPembiayaan(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_pembiayaan_saat_ini.findAll({ where: { Id_user: getIdUser } })
                .then((data) => {
                    res.status(404).json({
                        message: "Get One Id User",
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
    static updateDataPembiayaan(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur,
        } = req.body

        data_pembiayaan_saat_ini.update({
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur
        }, { where: { Id_user: getIdUser } })
            .then((data) => {
                res.status(200).json({
                    message: "update Data success",
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

    // Delete Form Data Pekerjaan Pemohon
    static deleteDataPembiayaan(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_pembiayaan_saat_ini.destroy({ where: { Id_user: getIdUser } })
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

module.exports = DataPembiayaanYangDimilikiController