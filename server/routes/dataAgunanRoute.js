const router = require('express').Router()
const agunanController = require('../controller/dataAgunanController')

router.get('/getOneDataAgunan/:user', agunanController.getOneDataAgunan)
router.get('/getAllAgunan', agunanController.getAll)
router.post('/add_form_data_agunan/:user', agunanController.addAgunan)

module.exports = router