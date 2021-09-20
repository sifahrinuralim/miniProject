const router = require('express').Router()
const informasiAwalController = require('../controller/informasiAwalController')

router.post('/add_form', informasiAwalController.isNasabah)
router.get('/getOne/:id', informasiAwalController.getOne)
router.put('/update/:id',informasiAwalController.update)
router.delete('/delete/:id',informasiAwalController.delete)

module.exports = router