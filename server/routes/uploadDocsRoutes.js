const router = require('express').Router()

const uploadDocs = require('../middleware/uploadDocs')
const multer = require('multer')


const multerKTP = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/KTP');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadKTP = multer({ storage: multerKTP });


const multerKK = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/KK');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadKK = multer({ storage: multerKK });


const multerSuratNikah = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/SuratNikah');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadSuratNikah = multer({ storage: multerSuratNikah });

const multerNPWP = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/NPWP');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadNPWP = multer({ storage: multerNPWP });

const multerSlipGaji = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/SlipGaji');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadSlipGaji = multer({ storage: multerSlipGaji });


const multerKetKerja = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/KetKerja');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadKetKerja = multer({ storage: multerKetKerja });


const multerMutasiRek = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/MutasiRek');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadMutasiRek = multer({ storage: multerMutasiRek });

const multerLapKeuangan = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/KTP');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadLapKeuangan = multer({ storage: multerLapKeuangan });


const multerSertif = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/SertifBangunan');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadSertifBangunan = multer({ storage: multerSertif });


const multerIMB = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/IMB');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadIMB = multer({ storage: multerIMB });


const multerPBB = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/PBB');
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const nameArr = originalName.split('.');
        var extension = '';
        if (nameArr.length > 1) {
            extension = nameArr[nameArr.length - 1];
        }
        // // ktp-21092021.jpg
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const uploadPBB = multer({ storage: multerPBB });

//lokasi+namafile+file ekstensionnya

//KTP
router.post('/uploadKTP', uploadKTP.single('KTP'), uploadDocs.error)
// router.get('/uploadKTP', (req,res)=> {res.send("ok")})
//KK
router.post('/uploadKK', uploadKK.single('KK'), uploadDocs.error)
//Surat Nikah
router.post('/uploadSuratNikah', uploadSuratNikah.single('SuratNikah'), uploadDocs.error)
//NPWP
router.post('/uploadNPWP', uploadNPWP.single('NPWP'), uploadDocs.error)
//Slip Gaji Asli
router.post('/uploadSlipGaji', uploadSlipGaji.single('SlipGaji'), uploadDocs.error)
//Keterangan Kerja
router.post('/uploadKetKerja', uploadKetKerja.single('KetKerja'), uploadDocs.error)
//mutasi rekening
router.post('/uploadMutasiRek', uploadMutasiRek.single('MutasiRek'), uploadDocs.error)
//Laporan Keuangan atau Usaha
router.post('/uploadLapKeuangan', uploadLapKeuangan.single('LapKeuangan'), uploadDocs.error)
//Sertifikat bangunan
router.post('/uploadSertif', uploadSertifBangunan.single('SertifBangunan'), uploadDocs.error)
//IMB
router.post('/uploadIMB', uploadIMB.single('IMB'), uploadDocs.error)
//PBB
router.post('/uploadPBB', uploadPBB.single('PBB'), uploadDocs.error)


module.exports = router