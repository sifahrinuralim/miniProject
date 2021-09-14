const { data_agunan } = require('../models/index')

class agunanController {

    // Get One berdasarkan Id User
    static getOne(req, res) {

        const getIdUser = req.params.user

        if (!getIdUser) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_agunan.findOne({ where: { Id_user: getIdUser } })
                .then((data) => {
                    if (!data) {
                        res.status(404).json({
                            message: "Data Not Found",
                            data: data
                        })
                    } else {
                        res.status(201).json({
                            message: "Fetch Get One Agunan Success",
                            data: data
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

    static getAll(req, res) {
        data_agunan.findAll()
            .then((data) => {
                res.status(200).json({
                    message: "fetch all user success",
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

    static addAgunan(req, res) {

        const getIdUser = req.params.user

        const {
            jenis_agunan,
            luas_tanah,
            luas_bangunan,
            kondisi_bangunan,
            status_kepemilikan,
            status_agunan,
            nama_sertifikat,
            nomor_sertifikat,
            masa_berlaku_sertifikat,
            nomor_spr,
            alamat_agunan,
            rt,
            rw,
            provinsi_agunan,
            kab_kota_agunan,
            kecamatan_agunan,
            kelurahan_agunan,
            kode_pos_agunan,
        } = req.body

        if (!jenis_agunan || !luas_tanah || !luas_bangunan || !kondisi_bangunan
            || !status_kepemilikan || !status_agunan || !nama_sertifikat || !nomor_sertifikat || !masa_berlaku_sertifikat
            || !nomor_spr || !alamat_agunan || !rt || !rw || !provinsi_agunan || !kab_kota_agunan || !kecamatan_agunan || !kelurahan_agunan || !kode_pos_agunan) {
            res.status(422).json({
                message: "error data could not be processed"
            })

        } else {
            data_agunan.findOne({ where: { Id_user: getIdUser } })
                .then((data) => {
                    if (!data) {
                        data_agunan.create({
                            Id_user: getIdUser,
                            id_form_agunan: 2,
                            jenis_agunan,
                            luas_tanah,
                            luas_bangunan,
                            kondisi_bangunan,
                            status_kepemilikan,
                            status_agunan,
                            nama_sertifikat,
                            nomor_sertifikat,
                            masa_berlaku_sertifikat,
                            nomor_spr,
                            alamat_agunan,
                            rt,
                            rw,
                            provinsi_agunan,
                            kab_kota_agunan,
                            kecamatan_agunan,
                            kelurahan_agunan,
                            kode_pos_agunan
                        })
                            .then((data) => {
                                res.status(201).json({
                                    message: "Data Agunan Method Created",
                                    data: data
                                })
                            })
                            .catch((err) => {
                                res.status(500).json({
                                    message: "internal server error",
                                    log: err
                                })
                            })
                    } else {
                        data_agunan.update({
                            Id_user: getIdUser,
                            id_form_agunan: 2,
                            jenis_agunan,
                            luas_tanah,
                            luas_bangunan,
                            kondisi_bangunan,
                            status_kepemilikan,
                            status_agunan,
                            nama_sertifikat,
                            nomor_sertifikat,
                            masa_berlaku_sertifikat,
                            nomor_spr,
                            alamat_agunan,
                            rt,
                            rw,
                            provinsi_agunan,
                            kab_kota_agunan,
                            kecamatan_agunan,
                            kelurahan_agunan,
                            kode_pos_agunan
                        })
                            .then((updated) => {
                                res.status(200).json({
                                    message: "Add Data Agunan Method Success",
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
}

module.exports = agunanController