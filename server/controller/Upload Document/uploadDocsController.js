const express = require('express')
require('dotenv').config()
const { GEN_UPLOAD_DOKUMEN } = require('../../models/index')


//file single KTP
class uploadDocsController {

   //------------------------------------------------File multiple
   static addPathMultiple(req, res, next) {
      console.log(req.files)

      // const {KTP,KK,SuratNikah} =req.files
      // files = req.files.KTP[0].path
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

      GEN_UPLOAD_DOKUMEN.create({
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


