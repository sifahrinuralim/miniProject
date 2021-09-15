const { data_informasi_nasabah } = require('../models/index')

class isNasabahController {

    static isNasabah(req, res) {

        const { isNasabah } = req.body

        if (!isNasabah) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            const data = data_informasi_nasabah.create({ isNasabah })
                .then((data) => {
                    res.status(201).json({
                        message: "Status Nasabah created",
                        result: data
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "internal server error",
                        log: err
                    })
                })
        }
    }
}

module.exports = isNasabahController