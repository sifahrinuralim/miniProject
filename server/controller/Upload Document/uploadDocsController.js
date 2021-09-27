const express = require('express')
require('dotenv').config()
const { GEN_UPLOAD_DOKUMEN } = require('../../models/index')


//file single KTP
class uploadDocsController {

   //------------------------------------------------File multiple
   static addPathMultiple(req, res, next) {

      console.log("DATA KE BE");

      const getIdUser = req.params.user

      const {
         KTP,
         KK,
         SuratNikah,
         NPWP,
         SlipGaji,
         KetKerja,
         MutasiRek,
         LapKeuangan,
         SertifBangunan,
         IMB,
         PBB
      } = req.files

      // console.log(KTP);

      // filesKTP = req.files.KTP[0].path
      // fileKK = req.files.KK[0].path
      // filesSuratNikah = req.files.SuratNikah[0].path
      // filesNPWP = req.files.NPWP[0].path
      // filesSlipGaji = req.files.SlipGaji[0].path
      // filesKetKerja = req.files.KetKerja[0].path
      // filesMutasiRek = req.files.MutasiRek[0].path
      // filesLapKeuangan = req.files.LapKeuangan[0].path
      // filesSertifBangunan = req.files.SertifBangunan[0].path
      // filesIMB = req.files.IMB[0].path
      // filesPBB = req.files.PBB[0].path

      // filesKTP = KTP[0].path
      // fileKK = KK[0].path
      // filesSuratNikah = SuratNikah[0].path
      // filesNPWP = NPWP[0].path
      // filesSlipGaji = SlipGaji[0].path
      // filesKetKerja = KetKerja[0].path
      // filesMutasiRek = MutasiRek[0].path
      // filesLapKeuangan = LapKeuangan[0].path
      // filesSertifBangunan = SertifBangunan[0].path
      // filesIMB = IMB[0].path
      // filesPBB = PBB[0].path

      GEN_UPLOAD_DOKUMEN.create({
         UserId: getIdUser,
         id_form_pembiayaan: 9,
         KTP,
         KK,
         SuratNikah,
         NPWP,
         SlipGaji,
         KetKerja,
         MutasiRek,
         LapKeuangan,
         SertifBangunan,
         IMB,
         PBB
      })
         .then((data) => {
            console.log(data);
            res.status(201).json({
               message: "Berhasil Ditaro ke server",
               result: data
            })
         })
         .catch((err) => {
            console.log(err);
            next({
               name: "Yahh gagal",
               log: err
            })
         })
   }

   //-------------------------------------file single KTP
   static addPathKTP(req, res, next) {
      console.log(req.file)
      const KTP = req.file.path
      // console.log(req.file.path)
      const ktp = KTP
      // console.log(KTP.path)
      GEN_UPLOAD_DOKUMEN.create({ ktp })
         .then((data) => {
            res.status(201).json({
               message: "Berhasil Ditaro ke server",
               result: data
            })
         })
         .catch((err) => {

            next({
               name: "Yahh gagal",
               log: err
            })
         })
   }
}

module.exports = uploadDocsController


