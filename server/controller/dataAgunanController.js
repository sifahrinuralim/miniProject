const { data_agunan } = require('../models/index')

class DataAgunanController {

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //CRUD Form Data Agunan

    // Create Form Data Agunan
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
            kode_pos_agunan
        } = req.body

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
                console.log(data);
                res.status(201).json({
                    message: "Add Data Agunan Success",
                    data: data
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Error Created",
                    log: err
                })
            })
    }

    // Read Form Data Agunan
    static getOneDataAgunan(req, res) {

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

    // Read Form Data Agunan
    static getAll(req, res) {
        data_agunan.findAll()
            .then((data) => {
                res.status(200).json({
                    message: "Fetch All User Success",
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

    // Update Form Data Agunan
    static updateAgunan(req, res) {
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
            kode_pos_agunan
        } = req.body

        data_agunan.update({
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

    // Delete Form Data Agunan
    static deleteAgunan(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_agunan.destroy({ where: { Id_user: getIdUser } })
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

module.exports = DataAgunanController