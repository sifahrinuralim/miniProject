const router = require('express').Router()
const isnasabahController = require('../controller/isnasabahController')

router.post('/add_form', isnasabahController.isNasabah)
router.get('/getOne/:id', isnasabahController.getOne)
router.put('/update/:id',isnasabahController.update)
router.delete('/delete/:id',isnasabahController.delete)

module.exports = router