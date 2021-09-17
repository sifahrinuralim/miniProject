const router = require('express').Router()
const userController = require('../controller/userController')
const validator = require('../middleware/userValidator')
const auth = require('../middleware/auth')


router.post('/daftar', validator.daftar, userController.daftar)
router.post('/masuk', validator.masuk, userController.masuk)
router.get('/getAll',  auth, userController.getAll)                         //alhamdulilaaaaah bisaa cek lewat headers Authorization
router.get('/getOne/:id',  auth, validator.checkId, userController.getOne) //bisaa cek lewat headers Authorization
router.put('/update/:id',  auth,validator.checkId, userController.update) //bisaa cek lewat headers Authorization
router.delete('/delete/:id', auth,validator.checkId, userController.delete) //bisaa cek lewat headers Authorization


module.exports = router