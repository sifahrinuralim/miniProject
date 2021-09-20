const router = require('express').Router()
const DataPekerjaanController = require('../controller/dataPekerjaanController')

router.get('/getOne/:user', DataPekerjaanController.getOne)
router.get('/getAll', DataPekerjaanController.getAll)

// Versi Menggunakan Method Create dan Update
router.post('/add_form_pekerjaan_pemohon/:user', DataPekerjaanController.addPekerjaanPemohon)
router.post('/add_form_pekerjaan_pasangan/:user', DataPekerjaanController.addPekerjaanPasangan)

module.exports = router