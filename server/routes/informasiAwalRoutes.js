const router = require('express').Router()
const informasiAwalController = require('../controller/informasiAwalController')

router.post('/add_form_informasi_awal', informasiAwalController.isNasabah)
router.get('/read_form_informasi_awal/:user', informasiAwalController.getOneIsNasabah)
router.put('/update_form_informasi_awal/:user', informasiAwalController.updateIsNasabah)
router.delete('/delete_form_informasi_awal/:user', informasiAwalController.deleteIsNasabah)

module.exports = router