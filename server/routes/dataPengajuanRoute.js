const router = require('express').Router()
const pengajuanController = require('../controller/dataPengajuanController')

router.get('/getOne/:user', pengajuanController.getOne)
router.get('/getAll', pengajuanController.getAll)

// Method Create Update
router.post('/add_form/:user', pengajuanController.addDataPengajuan)

// Method Create
router.post('/addpengajuan1', pengajuanController.addPengajuan1)
router.post('/addpengajuan2', pengajuanController.addPengajuan2)
router.post('/addpengajuan3', pengajuanController.addPengajuan3)
router.post('/addpengajuan4', pengajuanController.addPengajuan4)

module.exports = router