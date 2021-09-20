const router = require('express').Router()
const DataAgunanController = require('../controller/dataAgunanController')

router.post('/add_form_data_agunan/:user', DataAgunanController.addAgunan)
router.get('/getOneDataAgunan/:user', DataAgunanController.getOneDataAgunan)
router.get('/getAllAgunan', DataAgunanController.getAll)
router.put('/update_form_data_agunan/:user', DataAgunanController.updateAgunan)
router.delete('/delete_form_data_agunan/:user', DataAgunanController.deleteAgunan)

module.exports = router