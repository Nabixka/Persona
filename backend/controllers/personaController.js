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

exports.createPersona = async (req, res) => {
    try{
        const { name } = req.body

        if(!name){
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar Wok"
            })
        }

        const list = await persona.createPersona({name})

        res.status(201).json({
            status: 201,
            message: "Berhasil Menambahkan",
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


exports.deletePersona  = async (req, res) => {
    try{
        const { id } = req.params
        
        const exist = await persona.getPersonaById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Persona Tidak Ada atau sudah dihapus"
            })
        }

        const list = await persona.deletePersona(id)
        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus"
        })

    }
    catch(err){
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}

exports.updatePersona = async (req, res) => {
    try{
        const { id } = req.params
        const { name } = req.body

        const exist = await persona.getPersonaById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Persona Tidak Ada"
            })
        }

        if(!name){
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar Wok"
            })
        }

        const list = await persona.updatePersona(id, {name})
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah",
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

