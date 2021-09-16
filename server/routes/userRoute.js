const router = require('express').Router()
const userController = require('../controller/userController')
const validator = require('../middleware/userValidator')


router.post('/daftar', validator.daftar,userController.daftar)
router.post('/masuk', validator.masuk,userController.masuk)
router.get('/getAll', userController.getAll)
router.get('/getOne/:id', userController.getOne)
router.put('/update/:id',userController.update)
router.delete('/delete/:id',userController.delete)


module.exports = router