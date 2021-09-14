const router = require('express').Router()
const DataPembiayaan = require('../controller/dataPembiayaanController')

router.get('/getOne/:user', DataPembiayaan.getOne)
router.get('/getAll', DataPembiayaan.getAll)

// Versi Menggunakan Method Create dan Update
router.post('/add_form/:Id_user', DataPembiayaan.addDataPembiayaan)

module.exports = router