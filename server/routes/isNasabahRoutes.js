const router = require('express').Router()
const isnasabahController = require('../controller/isnasabahController')

router.post('/isNasabah', isnasabahController.isNasabah)

module.exports = router