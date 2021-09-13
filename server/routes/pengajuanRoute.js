const router = require('express').Router()
const pengajuanController = require('../controller/pengajuanController')

router.get('/getOne/:id', pengajuanController.getOne)
router.get('/getAllpengajuan', pengajuanController.getAll)
router.post('/addpengajuan1', pengajuanController.addPengajuan1)
router.post('/addpengajuan2', pengajuanController.addPengajuan2)
router.post('/addpengajuan3', pengajuanController.addPengajuan3)
router.post('/addpengajuan4', pengajuanController.addPengajuan4)

module.exports = router