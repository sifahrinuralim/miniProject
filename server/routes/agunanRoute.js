const router = require('express').Router()
const agunanController = require('../controller/agunanController')


router.get('/getOne/:id', agunanController.getOne)
router.get('/getAllAgunan', agunanController.getAll)
router.post('/addAgunan', agunanController.addAgunan)

module.exports = router