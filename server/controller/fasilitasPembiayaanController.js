const { data_pengajuan } = require('../models/index')
const { data_pengajuan_kendaraan } = require('../models/index')
const { data_pengajuan_properti } = require('../models/index')
const { data_pengajuan_take_over } = require('../models/index')

class FasilitasPembiayaanController {

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //CRUD Form Data Pengajuan

    // Create Form Data Pengajuan
    static formDataPengajuan(req, res, next) {

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
                
                res.status(200).json({
                    message: "Add Data Pengajuan",
                    result: data
                })
            })
            .catch((err) => {
                console.log(typeof total_plafond);
                // console.log(err);
                next({
                    name: "Error Create",
                    log: err
                })
            })
    }

    // Read Form Data Pengajuan
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

    // Update Data Pengajuan
    static updateDataPengajuan(req, res) {

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

        data_pengajuan.update({
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan
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

    // Delete Form Data Pengajuan
    static deleteDataPengajuan(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_pengajuan.destroy({ where: { Id_user: getIdUser } })
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
    //CRUD Form Pembiayaan Kendaraan

    // Create Form Pembiayaan Kendaraan 
    static formDataPengajuanKendaraan(req, res, next) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_penjual_kendaraan,
            nama_penjual_kendaraan,
            nilai_spr_kendaraan,
            no_telepon_penjual_kendaraan,
            uang_muka_kendaraan,
        } = req.body

        data_pengajuan_kendaraan.create({
            Id_user: getIdUser,
            id_form_pengajuan: 1,
            jenis_penjual_kendaraan,
            nama_penjual_kendaraan,
            nilai_spr_kendaraan,
            no_telepon_penjual_kendaraan,
            uang_muka_kendaraan,
        })
            .then((data) => {
                console.log(data);
                res.status(201).json({
                    message: "Add Data Pengajuan Properti",
                    result: data
                })
            })
            .catch((err) => {

                next({
                    name: "Error Create",
                    log: err
                })
            })
    }

    // Read Form Pembiayaan Kendaraan
    static getOneDataPengajuanKendaraan(req, res) {

        const getIdUser = req.params.user

        if (!getIdUser) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_pengajuan_kendaraan.findOne({ where: { Id_user: getIdUser } })
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

    // Update Form Pembiayaan Kendaraan
    static updateDataPengajuanKendaraan(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_penjual_kendaraan,
            nama_penjual_kendaraan,
            nilai_spr_kendaraan,
            no_telepon_penjual_kendaraan,
            uang_muka_kendaraan,
        } = req.body

        data_pengajuan_kendaraan.update({
            jenis_penjual_kendaraan,
            nama_penjual_kendaraan,
            nilai_spr_kendaraan,
            no_telepon_penjual_kendaraan,
            uang_muka_kendaraan,
        }, { where: { id: getIdUser } })
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

    // Delete Form Pembiayaan Kendaraan
    static deleteDataPengajuanKendaraan(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_pengajuan_kendaraan.destroy({ where: { Id_user: getIdUser } })
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
    //CRUD Form Pembiayaan Properti

    // Create Form Pembiayaan Properti 
    static formDataPengajuanProperti(req, res, next) {

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
                next({
                    name: "Error Create",
                    log: err
                })
            })
    }

    // Read Form Pembiayaan Properti
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

    // Update Form Pembiayaan Properti
    static updateDataPengajuanProperti(req, res) {

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

        data_pengajuan_properti.update({
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
        }, { where: { id: getIdUser } })
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

    // Delete Form Pembiayaan Properti
    static deleteDataPengajuanProperti(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_pengajuan_properti.destroy({ where: { Id_user: getIdUser } })
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
    //CRUD Form Pembiayaan Take Over 

    // Create Form Pembiayaan Take Over 
    static formDataPengajuanTakeover(req, res, next) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up,
        } = req.body

        data_pengajuan_take_over.create({
            Id_user: getIdUser,
            id_form_pengajuan: 1,
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up,
        })
            .then((data) => {
                console.log(data);
                res.status(201).json({
                    message: "Add Data Pengajuan Properti",
                    result: data
                })
            })
            .catch((err) => {

                next({
                    name: "Error Create",
                    log: err
                })
            })
    }

    // Read Form Pembiayaan Take Over
    static getOneDataPengajuanTakeover(req, res) {

        const getIdUser = req.params.user

        if (!getIdUser) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            data_pengajuan_take_over.findOne({ where: { Id_user: getIdUser } })
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

    // Update Form Pembiayaan Take Over
    static updateDataPengajuanTakeover(req, res, next) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up,
        } = req.body

        data_pengajuan_take_over.update({
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up,
        }, { where: { id: getIdUser } })
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

    // Delete Form Pembiayaan Take Over
    static deleteDataPengajuanTakeover(req, res) {

        const getIdUser = parseInt(req.params.user)

        data_pengajuan_take_over.destroy({ where: { Id_user: getIdUser } })
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

module.exports = FasilitasPembiayaanController