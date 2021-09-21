const { data_informasi_nasabah } = require('../models/index')

// Controller Informasi Awal

class InformasiAwalController {

   static isNasabah(req, res) {

      const { isNasabah } = req.body

      if (!isNasabah) {
         console.log(isNasabah);
         res.status(422).json({
            message: "error data could not be processed"
         })
      } else {
         const data = data_informasi_nasabah.create({ isNasabah })
            .then((data) => {
               console.log(data);
               res.status(201).json({
                  message: "Status Nasabah created",
                  result: data
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

   static getOneIsNasabah(req, res, next) {
      const isNasabahid = req.params.id

      data_informasi_nasabah.findOne({
         where: {
            id: isNasabahid
         }
      })
         .then((data) => {
            res.status(200).json({
               message: "get Data success",
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

   static updateIsNasabah(req, res, next) {

      const { isNasabah } = req.body
      const isNasabahid = req.params.id
      if (!isNasabahid) {
         res.status(422).json({
            message: "error data could not be processed"
         })
      } else {
         const data = data_informasi_nasabah.update({ isNasabah }, { where: { id: isNasabahid } })
            .then((data) => {
               res.status(200).json({
                  message: "update Data success",
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

   static deleteIsNasabah(req, res, next) {
      const isNasabahid = req.params.id

      data_informasi_nasabah.destroy({ where: { id: isNasabahid } })
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

module.exports = InformasiAwalController