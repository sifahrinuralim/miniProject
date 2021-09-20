const router = require('express').Router()
const fasilitasPembiayaanController = require('../controller/fasilitasPembiayaanController')

// Form Data Pengajuan
router.post('/add_form_data_pengajuan/:user', fasilitasPembiayaanController.formDataPengajuan)
router.get('/read_form_data_pengajuan/:user', fasilitasPembiayaanController.getOneDataPengajuan)
router.put('/update_form_data_pengajuan/:user', fasilitasPembiayaanController.updateDataPengajuan)
router.delete('/delete_form_data_pengajuan/:user', fasilitasPembiayaanController.deleteDataPengajuan)

// Form Data Pembiayaan Kendaraan
router.post('/add_form_data_pengajuan_kendaraan/:user', fasilitasPembiayaanController.formDataPengajuanKendaraan)
router.get('/read_form_data_pengajuan_kendaraan/:user', fasilitasPembiayaanController.getOneDataPengajuanKendaraan)
router.put('/update_form_data_pengajuan_kendaraan/:user', fasilitasPembiayaanController.updateDataPengajuanKendaraan)
router.delete('/delete_form_data_pengajuan_kendaraan/:user', fasilitasPembiayaanController.deleteDataPengajuanKendaraan)

// Form Data Pembiayaan Properti
router.post('/add_form_data_pengajuan_properti/:user', fasilitasPembiayaanController.formDataPengajuanProperti)
router.get('/read_form_data_pengajuan_properti/:user', fasilitasPembiayaanController.getOneDataPengajuanProperti)
router.put('/update_form_data_pengajuan_properti/:user', fasilitasPembiayaanController.updateDataPengajuanProperti)
router.delete('/delete_form_data_pengajuan_properti/:user', fasilitasPembiayaanController.deleteDataPengajuanProperti)

// Form Data Pembiayaan Take Over
router.post('/add_form_data_pengajuan_takeover/:user', fasilitasPembiayaanController.formDataPengajuanTakeover)
router.get('/read_form_data_pengajuan_takeover/:user', fasilitasPembiayaanController.getOneDataPengajuanTakeover)
router.put('/update_form_data_pengajuan_takeover/:user', fasilitasPembiayaanController.updateDataPengajuanTakeover)
router.delete('/delete_form_data_pengajuan_takeover/:user', fasilitasPembiayaanController.deleteDataPengajuanTakeover)

module.exports = router