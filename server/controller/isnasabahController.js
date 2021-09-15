const {data_informasi_nasabah} = require('../models/data_informasi_nasabah')

class isNasabahController{
    static isNasabah (req,res){

        const {isNasabah} = req.body
        // const False = new Boolean(false)
        // const True = new Boolean(True)

        if (!isNasabah){
            res.status(422).json({
                message:"error data could not be processed"
            })
        //not solved to create
        } else {
            const data = data_informasi_nasabah.create({isNasabah})
            .then((data) => {
                res.status(201).json({                    
                    message: "Status Nasabah created",
                    data:data
                })
            })
            .catch((err) => {
                res.status(500).json({
                    message:"internal server error",
                    log:err 
                })
            })
        }
    } 

}

module.exports= isNasabahController