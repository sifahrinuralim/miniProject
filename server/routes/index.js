const router = require('express').Router()

const dataDiriKeluargaUpdateRoute = require('./')
const dataDiriKeluargaRoute = require('./dataDiriKeluargaRoutes')
const pengajuanRoute = require('./pengajuanRoute')
const agunanRoute = require('./agunanRoute')
const userRoute = require('./userRoute')

router.use('/api/data_diri_keluarga/', dataDiriKeluargaRoute)
router.use('/api/pengajuan/', pengajuanRoute)
router.use('/api/agunan/', agunanRoute)
router.use('/api/user/', userRoute)

module.exports = router