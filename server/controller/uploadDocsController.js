const express = require('express')
const multer  = require('multer')


class uploadDocsController{ 

    static uploadKTP(req, res, next) {
        console.log('KTP')
         

        // //versi3
        // const KTP = req.file
        // // const upload = multer({ dest: 'uploads/' })        
        // const multerUpload = multer({destination: 'uploads/' })
        // multerUpload.single({KTP})
        // .then((file)=>{
        //     res.status(201).json({
        //         messsage: "berhasil upload",
        //         result: data
        //     })
        // })
        // .catch((err)=>{
        //     res.status(201).json({
        //         messsage: "gagal",
        //         result: data
        //     })
        // })





       //versi2
        // const multerUpload = multer({storage:multerDiskStorage})

        // multerUpload((req, res) =>{
        //     
        //     const KTP = req.file;
        //     multerUpload.single('KTP')
        //     // console.log(req.files)
        //     if (!KTP){
        //         res.status(400).json({message:'Ouch file nya ga kebaca hehe'}) //picture cannot be empty
        //         return
                
        //     }else {res.send(KTP)}

        // })



        // versi1
        
        const multerDiskStorage = multer.diskStorage({
            destination: function(req, file, cb){
                cb(null,'uploads/');
            },
            filename: function(req,file,cb){
                const originalName = file.originalname //opsional
                const nameArr = originalName.split('.') //opsional
                var extension='';
                if(nameArr.length>1){
                    extension = nameArr[nameArr.length-1]
                }
                cb(null, file.fieldname +'-'+Date.now()+'.'+extension)
                // ktp-21092021.jpg
            }
        })
        const multerUpload = multer({storage:multerDiskStorage})
        multerUpload(req, res, (err) => {
            
            // const KTP = req.file
            // console.log(req.file)
            // if (!KTP){
            //     res.status(400).json({message:'Ouch file nya ga kebaca hehe'}) //picture cannot be empty
            //     return
                
            // }else {res.send(KTP)}
            
            if (err) {
                console.log(err)
            }    
        })

        
        
        // const KTP = req.file;
        // console.log(KTP)  
        // multerUpload.single('KTP')                         
                
        // if (!KTP){
        //     res.status(400).json({message:'Ouch file nya ga kebaca hehe'}) //picture cannot be empty
        //     return
            
        // }else {res.send(KTP)}
    }
}
module.exports = uploadDocsController


