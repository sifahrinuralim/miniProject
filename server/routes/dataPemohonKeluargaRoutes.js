const router = require('express').Router()
const DataPemohonKeluargaController = require('../controller/dataPemohonKeluargaController')

router.get('/getOne/:user', DataPemohonKeluargaController.getOne)
router.get('/getAll', DataPemohonKeluargaController.getAll)

// Versi Menggunakan Method Full Create
router.post('/add_data_diri_keluarga/:user', DataPemohonKeluargaController.addDataDiriKeluarga)
router.post('/add_data_diri_pasangan/:user', DataPemohonKeluargaController.addDataDiriPasangan)
router.post('/add_data_diri_kerabat/:user', DataPemohonKeluargaController.addDataDiriKerabat)

module.exports = router