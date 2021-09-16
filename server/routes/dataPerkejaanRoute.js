const router = require('express').Router()
const DataPekerjaan = require('../controller/dataPekerjaanController')

router.get('/getOne/:user', DataPekerjaan.getOne)
router.get('/getAll', DataPekerjaan.getAll)

// Versi Menggunakan Method Create dan Update
router.post('/add_form_pekerjaan_pemohon/:user', DataPekerjaan.addPekerjaanPemohon)
router.post('/add_form_pekerjaan_pasangan/:user', DataPekerjaan.addPekerjaanPasangan)

module.exports = router