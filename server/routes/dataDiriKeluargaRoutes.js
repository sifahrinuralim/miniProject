const router = require('express').Router()
const DataDiriKeluarga = require('../controller/dataDiriKeluargaController')

router.get('/getOne/:user', DataDiriKeluarga.getOne)
router.get('/getAll', DataDiriKeluarga.getAll)
router.post('/add_form_page_1', DataDiriKeluarga.addDataDiriKeluarga1)
router.post('/add_form_page_2', DataDiriKeluarga.addDataDiriKeluarga2)
router.post('/add_form_page_3', DataDiriKeluarga.addDataDiriKeluarga3)

module.exports = router