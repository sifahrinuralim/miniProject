const router = require('express').Router()
const fasilitasPembiayaanController = require('../controller/fasilitasPembiayaanController')

router.get('/getOneDataPengajuan/:user', fasilitasPembiayaanController.getOneDataPengajuan)
router.get('/getOneDataPengajuanProperti/:user', fasilitasPembiayaanController.getOneDataPengajuanProperti)

// Method Create Update
router.post('/add_form_data_pengajuan/:user', fasilitasPembiayaanController.formDataPengajuan)
router.post('/add_form_data_pengajuan_properti/:user', fasilitasPembiayaanController.formDataPengajuanProperti)

module.exports = router