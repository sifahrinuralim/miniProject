const router = require('express').Router()
const pengajuanController = require('../controller/dataPengajuanController')

router.get('/getOneDataPengajuan/:user', pengajuanController.getOneDataPengajuan)
router.get('/getOneDataPengajuanProperti/:user', pengajuanController.getOneDataPengajuanProperti)

// Method Create Update
router.post('/add_form_data_pengajuan/:user', pengajuanController.formDataPengajuan)
router.post('/add_form_data_pengajuan_properti/:user', pengajuanController.formDataPengajuanProperti)

module.exports = router