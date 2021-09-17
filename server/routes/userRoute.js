const router = require('express').Router()
const userController = require('../controller/userController')
const validator = require('../middleware/userValidator')
const auth = require('../middleware/auth')


router.post('/daftar', validator.daftar, userController.daftar)
router.post('/masuk', validator.masuk, userController.masuk)
router.get('/getAll',  auth, userController.getAll)                         //ngebug
router.get('/getOne/:id',  auth, validator.checkId, userController.getOne) //ngebug
router.put('/update/:id',  auth,validator.checkId, userController.update) //ngebug
router.delete('/delete/:id', auth,validator.checkId, userController.delete) //ngebug


module.exports = router