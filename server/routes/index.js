const router = require('express').Router()

const fasilitasPembiayaanRoutes = require('./fasilitasPembiayaanRoutes')
const dataAgunanRoutes = require('./dataAgunanRoutes')
const dataPemohonKeluargaRoutes = require('./dataPemohonKeluargaRoutes')
const dataPerkejaanRoutes = require('./dataPerkejaanRoutes')
const dataPembiayaanRoutes = require('./dataPembiayaanRoutes')
const userRoutes = require('./userRoutes')
const informasiAwalRoutes = require('./informasiAwalRoutes')

router.use('/api/data_pengajuan/', fasilitasPembiayaanRoutes)
router.use('/api/data_agunan/', dataAgunanRoutes)
router.use('/api/data_diri_keluarga/', dataPemohonKeluargaRoutes)
router.use('/api/data_pekerjaan/', dataPerkejaanRoutes)
router.use('/api/data_pembiayaan/', dataPembiayaanRoutes)

router.use('/api/user/', userRoutes)
router.use('/api/isNasabah/', informasiAwalRoutes )

module.exports = router