const router = require('express').Router()
const DataPembiayaanController = require('../controller/dataPembiayaanController')

router.get('/getOne/:user', DataPembiayaanController.getOne)
router.get('/getAll', DataPembiayaanController.getAll)

// Versi Menggunakan Method Create dan Update
router.post('/add_form/:Id_user', DataPembiayaanController.addDataPembiayaan)

module.exports = router