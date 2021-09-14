require('dotenv').config
const { data_pembiayaan_saat_ini } = require('../models/index')

class DataPembiayaan {

    // Get One berdasarkan Id User
    static getOne(req, res) {

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

    static getAll(req, res) {
        data_pembiayaan_saat_ini.findAll()
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

    static addDataPembiayaan(req, res) {

        const {
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur,
        } = req.body

        const getIdUser = req.params.Id_user

        data_pembiayaan_saat_ini.findOne({ where: { Id_user: getIdUser } })
            .then((data) => {
                if (!data) {
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
                            res.status(500).json({
                                message: "Error Create",
                                log: err
                            })
                        })
                } else {
                    data_pembiayaan_saat_ini.update({
                        Id_user: getIdUser,
                        id_form_pembiayaan: 5,
                        pembiayaan_bank_lain,
                        jumlah_pembiayaan,
                        angsuran,
                        jatuh_tempo,
                        jenis_pembiayaan,
                        nama_kreditur,
                    },
                        { where: { Id_user: getIdUser } })
                        .then((updated) => {
                            res.status(200).json({
                                message: "Add Data Method Update",
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
            })
            .catch((err) => {
                res.status(500).json({
                    message: "Internal Server Error",
                    log: err
                })
            })
    }
}

module.exports = DataPembiayaan