const { data_pengajuan } = require('../models/index')

class pengajuanController {
    static getOne(req, res) {

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

    static getAll(req, res) {
        data_pengajuan.findAll()
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

    static addDataPengajuan(req, res) {
        const {
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan,
            jenis_penjual_kendaraan,
            nama_penjual_kendaraan,
            nilai_spr_kendaraan,
            no_telepon_penjual_kendaraan,
            uang_muka_kendaraan,
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
            kode_pos_properti,
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up
        } = req.body

        const getIdUser = req.params.user

        data_pengajuan.findOne({ where: { Id_user: getIdUser } })
            .then((data) => {
                if (!data) {
                    data_pengajuan.create({
                        Id_user: getIdUser,
                        id_form_pengajuan: 1,
                        skema_pengajuan,
                        peruntukan_pembiayaan,
                        program,
                        objek,
                        akad,
                        total_plafond,
                        waktu_pembiayaan,
                        jenis_penjual_kendaraan,
                        nama_penjual_kendaraan,
                        nilai_spr_kendaraan,
                        no_telepon_penjual_kendaraan,
                        uang_muka_kendaraan,
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
                        kode_pos_properti,
                        jenis_bank_asal,
                        nama_bank,
                        peruntukan_fasilitas_sebelumnya,
                        akad_fasilitas_sebelumnya,
                        nilai_pelunasan_take_over,
                        plafond_top_up
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
                    data_pengajuan.update({
                        Id_user: getIdUser,
                        id_form_pengajuan: 1,
                        skema_pengajuan,
                        peruntukan_pembiayaan,
                        program,
                        objek,
                        akad,
                        total_plafond,
                        waktu_pembiayaan,
                        jenis_penjual_kendaraan,
                        nama_penjual_kendaraan,
                        nilai_spr_kendaraan,
                        no_telepon_penjual_kendaraan,
                        uang_muka_kendaraan,
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
                        kode_pos_properti,
                        jenis_bank_asal,
                        nama_bank,
                        peruntukan_fasilitas_sebelumnya,
                        akad_fasilitas_sebelumnya,
                        nilai_pelunasan_take_over,
                        plafond_top_up
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

    static addPengajuan1(req, res) {

        const {
            Id_user,
            id_form_pengajuan,
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan
        } = req.body

        if (!Id_user || !id_form_pengajuan || !skema_pengajuan || !peruntukan_pembiayaan || !program || !objek
            || !akad || !total_plafond || !waktu_pembiayaan) {
            res.status(422).json({
                message: "error data could not be processed"
            })

        } else {
            const data = data_pengajuan.create({
                Id_user, id_form_pengajuan, skema_pengajuan, peruntukan_pembiayaan,
                program, objek, akad, total_plafond, waktu_pembiayaan
            })
                .then((data) => {
                    res.status(201).json({
                        message: "Pengajuan page 1 created",
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

    static addPengajuan2(req, res) {

        const { Id_user, id_form_pengajuan, jenis_penjual_kendaraan, nama_penjual_kendaraan, nilai_spr_kendaraan,
            no_telepon_penjual_kendaraan, uang_muka_kendaraan } = req.body

        if (!Id_user || !id_form_pengajuan || !jenis_penjual_kendaraan || !nama_penjual_kendaraan || !nilai_spr_kendaraan || !no_telepon_penjual_kendaraan
            || !uang_muka_kendaraan) {
            res.status(422).json({
                message: "error data could not be processed"
            })

        } else {
            const data = data_pengajuan.create({
                Id_user, id_form_pengajuan, jenis_penjual_kendaraan, nama_penjual_kendaraan, nilai_spr_kendaraan,
                no_telepon_penjual_kendaraan, uang_muka_kendaraan
            })
                .then((data) => {
                    res.status(201).json({
                        message: "Pengajuan Page 2 created",
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

    static addPengajuan3(req, res) {

        const { Id_user, id_form_pengajuan, jenis_penjual_properti, nama_penjual_properti, nilai_spr_properti, no_telepon_penjual_properti, uang_muka_properti, nama_proyek, kondisi_bangunan,
            alamat_properti, rt, rw, provinsi_properti, kab_kota_properti, kecamatan_properti, kelurahan_properti, kode_pos_properti } = req.body

        if (!Id_user || !id_form_pengajuan || !jenis_penjual_properti || !nama_penjual_properti || !nilai_spr_properti || !no_telepon_penjual_properti || !uang_muka_properti || !nama_proyek, kondisi_bangunan
            || !alamat_properti || !rt || !rw || !provinsi_properti || !kab_kota_properti || !kecamatan_properti || !kelurahan_properti || !kode_pos_properti) {
            res.status(422).json({
                message: "error data could not be processed"
            })

        } else {
            const data = data_pengajuan.create({
                Id_user, id_form_pengajuan, jenis_penjual_properti, nama_penjual_properti, nilai_spr_properti, no_telepon_penjual_properti, uang_muka_properti, nama_proyek, kondisi_bangunan,
                alamat_properti, rt, rw, provinsi_properti, kab_kota_properti, kecamatan_properti, kelurahan_properti, kode_pos_properti
            })
                .then((data) => {
                    res.status(201).json({
                        message: "Pengajuan Page 3 created",
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

    static addPengajuan4(req, res) {

        const { Id_user, id_form_pengajuan, jenis_bank_asal, nama_bank, peruntukan_fasilitas_sebelumnya, akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over, plafond_top_up } = req.body

        if (!Id_user || !id_form_pengajuan || !jenis_bank_asal || !nama_bank || !peruntukan_fasilitas_sebelumnya || !akad_fasilitas_sebelumnya
            || !nilai_pelunasan_take_over || !plafond_top_up) {
            res.status(422).json({
                message: "error data could not be processed"
            })

        } else {
            const data = data_pengajuan.create({
                Id_user, id_form_pengajuan, jenis_bank_asal, nama_bank, peruntukan_fasilitas_sebelumnya, akad_fasilitas_sebelumnya,
                nilai_pelunasan_take_over, plafond_top_up
            })
                .then((data) => {
                    res.status(201).json({
                        message: "Pengajuan Page 4 created",
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

module.exports = pengajuanController