const router = require('express').Router()
const isnasabahController = require('../controller/isnasabahController')

router.post('/add_form', isnasabahController.isNasabah)

module.exports = router