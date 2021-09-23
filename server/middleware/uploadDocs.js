const express = require('express')
const multer  = require('multer')

const error= ((req, res, next) =>{
    const KTP = req.file;
    if (!KTP) {
        res.status(400).json({'message': 'picture cannot be empty'});
        return
    }
    res.send(KTP);
})

// const multerUpload = multer({storage: multerDiskStorage});




module.exports = {
     error
}