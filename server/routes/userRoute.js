const router = require('express').Router()
const userController = require('../controller/userController')

router.post('/daftar', userController.daftar)
router.post('/masuk', userController.masuk)
router.get('/getAll', userController.getAll)
router.get('/getOne/:id', userController.getOne)
router.put('/update',userController.update)
router.delete('/delete/:id',userController.delete)


module.exports = router