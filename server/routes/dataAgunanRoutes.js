const router = require('express').Router()
const DataAgunanController = require('../controller/dataAgunanController')

router.get('/getOneDataAgunan/:user', DataAgunanController.getOneDataAgunan)
router.get('/getAllAgunan', DataAgunanController.getAll)
router.post('/add_form_data_agunan/:user', DataAgunanController.addAgunan)

module.exports = router