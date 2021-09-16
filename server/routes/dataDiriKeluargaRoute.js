const router = require('express').Router()
const DataDiriKeluarga = require('../controller/dataDiriKeluargaController')

router.get('/getOne/:user', DataDiriKeluarga.getOne)
router.get('/getAll', DataDiriKeluarga.getAll)

// Versi Menggunakan Method Full Create
router.post('/add_data_diri_keluarga/:user', DataDiriKeluarga.addDataDiriKeluarga)
router.post('/add_data_diri_pasangan/:user', DataDiriKeluarga.addDataDiriPasangan)
router.post('/add_data_diri_kerabat/:user', DataDiriKeluarga.addDataDiriKerabat)

module.exports = router