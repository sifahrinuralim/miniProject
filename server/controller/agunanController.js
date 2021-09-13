const { data_agunan } = require('../models/index')

class agunanController {
    static getOne(req, res) {
        if (!req.params.id) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_agunan.findOne({ where: { id: req.params.id } })
                .then((data) => {
                    if (!data) {
                        res.status(404).json({
                            message: "fetch data Success",
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

        const {
            Id_user,
            id_form_agunan,
            jenis_agunan,
            luas_tanah,
            luas_bangunan,
            kondisi_bangunan,
            status_kepemilikan,
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

        if (!Id_user || !id_form_agunan || !jenis_agunan || !luas_tanah || !luas_bangunan || !kondisi_bangunan
            || !status_kepemilikan || !nama_sertifikat || !nomor_sertifikat || !masa_berlaku_sertifikat
            || !nomor_spr || !alamat_agunan || !rt || !rw || !provinsi_agunan || !kab_kota_agunan || !kecamatan_agunan || !kelurahan_agunan || !kode_pos_agunan) {
            res.status(422).json({
                message: "error data could not be processed"
            })

        } else {
            const data = data_agunan.create({
                Id_user, id_form_agunan, jenis_agunan, luas_tanah, luas_bangunan, kondisi_bangunan,
                status_kepemilikan, nama_sertifikat, nomor_sertifikat, masa_berlaku_sertifikat,
                nomor_spr, alamat_agunan, rt, rw, provinsi_agunan, kab_kota_agunan, kecamatan_agunan, kelurahan_agunan, kode_pos_agunan
            })
                .then((data) => {
                    res.status(201).json({
                        message: "Data Agunan created",
                        data: data
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "internal server error",
                        log: err
                    })
                })
        }
    }
}

module.exports = agunanController