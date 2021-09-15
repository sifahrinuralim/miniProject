const router = require('express').Router()

const pengajuanRoute = require('./dataPengajuanRoute')
const agunanRoute = require('./dataAgunanRoute')
const dataDiriKeluargaRoute = require('./dataDiriKeluargaRoute')
const dataPekerjaanRoute = require('./dataPerkejaanRoute')
const dataPembiayaanRoute = require('./dataPembiayaanRoute')
const userRoute = require('./userRoute')
const isNasabahRoute = require('./isNasabahRoutes')

router.use('/api/data_pengajuan/', pengajuanRoute)
router.use('/api/data_agunan/', agunanRoute)
router.use('/api/data_diri_keluarga/', dataDiriKeluargaRoute)
router.use('/api/data_pekerjaan/', dataPekerjaanRoute)
router.use('/api/data_pembiayaan/', dataPembiayaanRoute)

router.use('/api/user/', userRoute)
router.use('/api/isNasabah/', isNasabahRoute )

module.exports = router