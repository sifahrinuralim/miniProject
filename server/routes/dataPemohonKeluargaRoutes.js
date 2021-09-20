const router = require('express').Router()
const DataPemohonKeluargaController = require('../controller/dataPemohonKeluargaController')

// Form Data Pemohon
router.post('/add_data_data_pemohon/:user', DataPemohonKeluargaController.addDataPemohon)
router.get('/read_data_data_pemohon/:user', DataPemohonKeluargaController.getOneDataPemohon)
router.put('/update_data_data_pemohon/:user', DataPemohonKeluargaController.updateDataPemohon)
router.delete('/delete_data_data_pemohon/:user', DataPemohonKeluargaController.deleteDataPemohon)

// Form Data Pasangan
router.post('/add_data_diri_pasangan/:user', DataPemohonKeluargaController.addDataPasangan)
router.get('/read_data_diri_pasangan/:user', DataPemohonKeluargaController.getOneDataPasangan)
router.put('/update_data_diri_pasangan/:user', DataPemohonKeluargaController.updateDataPasangan)
router.delete('/delete_data_diri_pasangan/:user', DataPemohonKeluargaController.deleteDataPasangan)

// Form Data Kerabat
router.post('/add_data_diri_kerabat/:user', DataPemohonKeluargaController.addDataDiriKerabat)
router.get('/read_data_diri_kerabat/:user', DataPemohonKeluargaController.getOneDataPemohon)
router.put('/update_data_diri_kerabat/:user', DataPemohonKeluargaController.updateDataPemohon)
router.delete('/delete_data_diri_kerabat/:user', DataPemohonKeluargaController.deleteDataPemohon)

module.exports = router