const router = require('express').Router()
const DataDiriKeluarga = require('../controller/dataDiriKeluargaController')

router.get('/getOne/:user', DataDiriKeluarga.getOne)
router.get('/getAll', DataDiriKeluarga.getAll)

// Versi Menggunakan Method Full Create
router.post('/add_form_page_1', DataDiriKeluarga.addDataDiriKeluarga1)
router.post('/add_form_page_2', DataDiriKeluarga.addDataDiriKeluarga2)
router.post('/add_form_page_3', DataDiriKeluarga.addDataDiriKeluarga3)

// Versi Menggunakan Method Create dan Update
router.post('/add_form_versi_update/:Id_user', DataDiriKeluarga.addDataDiriKeluargaCreateUpdate)

module.exports = router