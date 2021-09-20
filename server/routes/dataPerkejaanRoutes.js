const router = require('express').Router()
const DataPekerjaanController = require('../controller/dataPekerjaanController')

// Form Data Pekerjaan Pemohon
router.post('/add_form_pekerjaan_pemohon/:user', DataPekerjaanController.addDataPekerjaanPemohon)
router.get('/read_form_pekerjaan_pemohon/:user', DataPekerjaanController.getOneDataPekerjaanPemohon)
router.put('/update_form_pekerjaan_pemohon/:user', DataPekerjaanController.updateDataPekerjaanPemohon)
router.delete('/delete_form_pekerjaan_pemohon/:user', DataPekerjaanController.deleteDataPekerjaanPemohon)

// Form Data Pekerjaan Pasangan
router.post('/add_form_pekerjaan_pasangan/:user', DataPekerjaanController.addDataPekerjaanPasangan)
router.get('/read_form_pekerjaan_pasangan/:user', DataPekerjaanController.getOneDataPekerjaanPasangan)
router.put('/update_form_pekerjaan_pasangan/:user', DataPekerjaanController.updateDataPekerjaanPasangan)
router.delete('/delete_form_pekerjaan_pasangan/:user', DataPekerjaanController.deleteDataPekerjaanPasangan)

module.exports = router