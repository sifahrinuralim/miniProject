const router = require('express').Router()
const agunanController = require('../controller/dataAgunanController')

router.get('/getOne/:user', agunanController.getOne)
router.get('/getAllAgunan', agunanController.getAll)
router.post('/addAgunan/:user', agunanController.addAgunan)

module.exports = router