const router = require('express').Router()
const DataPembiayaanController = require('../controller/dataPembiayaanController')
const validator = require('../middleware/dataPembiayaanValidator')

// Form Data Pembiayaan Yang Dimiliki
// router.post('/add_form_data_pembiayaan/:user', validator.checkDataPembiayaan, DataPembiayaanController.addDataPembiayaan)
router.post('/add_form_data_pembiayaan/:user', DataPembiayaanController.addDataPembiayaan)
router.get('/read_form_data_pembiayaan/:user', DataPembiayaanController.getOneDataPembiayaan)
router.put('/update_form_data_pembiayaan/:user', DataPembiayaanController.updateDataPembiayaan)
router.delete('/delete_form_data_pembiayaan/:user', DataPembiayaanController.deleteDataPembiayaan)

module.exports = router