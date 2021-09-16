const router = require('express').Router()
const DataDiriKeluarga = require('../controller/dataDiriKeluargaController')

router.get('/getOne/:user', DataDiriKeluarga.getOne)
router.get('/getAll', DataDiriKeluarga.getAll)

// Versi Menggunakan Method Full Create
router.post('/add_data_diri_keluarga', DataDiriKeluarga.addDataDiriKeluarga)
router.post('/add_data_diri_pasangan', DataDiriKeluarga.addDataDiriPasangan)
router.post('/add_data_diri_kerabat', DataDiriKeluarga.addDataDiriKerabat)

// Versi Menggunakan Method Create dan Update
// router.post('/add_form/:Id_user', DataDiriKeluarga.addDataDiriKeluargaCreateUpdate)

module.exports = router