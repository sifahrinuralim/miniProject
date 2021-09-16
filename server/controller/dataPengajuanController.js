const { data_pengajuan } = require('../models/index')
const { data_pengajuan_properti } = require('../models/index')

class pengajuanController {
    static getOneDataPengajuan(req, res) {

        const getIdUser = req.params.user

        if (!getIdUser) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_pengajuan.findOne({ where: { Id_user: getIdUser } })
                .then((data) => {
                    if (!data) {
                        res.status(404).json({
                            message: "Data Not Found",
                            data
                        })
                    } else {
                        res.status(201).json({
                            message: "Fetch Data Success",
                            data
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

    static getOneDataPengajuanProperti(req, res) {

        const getIdUser = req.params.user

        if (!getIdUser) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_pengajuan_properti.findOne({ where: { Id_user: getIdUser } })
                .then((data) => {
                    if (!data) {
                        res.status(404).json({
                            message: "Data Not Found",
                            data
                        })
                    } else {
                        res.status(201).json({
                            message: "Fetch Data Success",
                            data
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

    static formDataPengajuan(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan,
        } = req.body

        data_pengajuan.create({
            Id_user: getIdUser,
            id_form_pengajuan: 1,
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan
        })
            .then((data) => {
                console.log(data);
                res.status(200).json({
                    message: "Add Data Pengajuan",
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

    static formDataPengajuanProperti(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_penjual_properti,
            nama_penjual_properti,
            nilai_spr_properti,
            no_telepon_penjual_properti,
            uang_muka_properti,
            nama_proyek,
            kondisi_bangunan,
            alamat_properti,
            rt,
            rw,
            provinsi_properti,
            kab_kota_properti,
            kecamatan_properti,
            kelurahan_properti,
            kode_pos_properti
        } = req.body

        data_pengajuan_properti.create({
            Id_user: getIdUser,
            id_form_pengajuan: 1,
            jenis_penjual_properti,
            nama_penjual_properti,
            nilai_spr_properti,
            no_telepon_penjual_properti,
            uang_muka_properti,
            nama_proyek,
            kondisi_bangunan,
            alamat_properti,
            rt,
            rw,
            provinsi_properti,
            kab_kota_properti,
            kecamatan_properti,
            kelurahan_properti,
            kode_pos_properti
        })
            .then((data) => {
                console.log(data);
                res.status(201).json({
                    message: "Add Data Pengajuan Properti",
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

module.exports = pengajuanController