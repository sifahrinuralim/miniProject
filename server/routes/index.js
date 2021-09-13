const router = require('express').Router()

const dataDiriKeluargaRoute = require('./dataDiriKeluargaRoutes')
const pengajuanRoute = require('./pengajuanRoute')
const agunanRoute = require('./agunanRoute')

router.use('/api/data_diri_keluarga/', dataDiriKeluargaRoute)
router.use('/api/pengajuan/', pengajuanRoute)
router.use('/api/agunan/', agunanRoute)

module.exports = router