const persona = require("../model/personaModel")

exports.getPersona = async (req, res) => {
    try{
        const list = await persona.getPersona()

        res.status(200).json({
            status: 200,
            message: "Berhasil Mendapatkan Data Persona",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}

exports.getPersonaById = async (req, res) => {
    try{
        const { id } = req.params
        const list = await persona.getPersonaById(id)

        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Persona Tidak Ada"
            })
        }

        res.status(200).json({
            status: 200,
            message: "Berhasil Mendapatkan Data Persona",
            data: list
        })
    }
    catch(err){
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}