const affinities = require("../model/affinitiesModel")

exports.getAffinities = async (req, res) => {
    try{
        const list = await affinities.getAffinities()

        res.status(200).json({
            status: 200,
            message: "Berhasil Mendapatkan Data Affinities",
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

exports.getAffinitiesById = async (req, res) => {
    try{
        const { id } = req.params
        const list = await affinities.getAffinitiesById(id)

        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Affinities Tidak Ada"
            })
        }
        res.status(200).json({
            status: 200,
            message: "Berhasil Mendapatkan Data Affinities",
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

exports.createAffinities = async (req, res) => {
    try{
        const { name } = req.body
        if(!name){
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar Wok"
            })
        }

        const list = await affinities.createAffinities({name})
        res.status(201).json({
            status: 201,
            message: "Berhasil Membuat Affinities",
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

exports.updateAffinities = async (req, res) => {
    try{
        const { id } = req.params
        const { name } = req.body

        const exist = await affinities.getAffinitiesById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Affinities Tidak Ada"
            })
        }

        if(!name){
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar Wok"
            })
        }

        const list = await affinities.updateAffinities(id, {name})

        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah Affinities",
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

exports.deleteAffinities = async (req, res) => {
    try{
        const { id } = req.params
        
        const exist = await affinities.getAffinitiesById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Affinities Tidak Ada"
            })
        }

        const list = await affinities.deleteAffinities(id)
        res.status(200).json({
            status: 200,
            message: "Berhasil Menghapus Affinities"
        })
    }
    catch{
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}

exports.getAffinitiesType = async (req, res) => {
    try{
        const list = await affinities.getAffinitiesType()
        res.status(200).json({
            status: 200,
            message: "Berhasil Mendapatkan",
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

exports.getAffinitiesTypeById = async (req, res) => {
    try{
        const { id } = req.params
        const list = await affinities.getAffinitiesTypeById(id)

        if(!list){
            return res.status(404).json({
                status: 404,
                message: "Tidak Ada"
            })
        }

        res.status(200).json({
            status: 200,
            message: "Berhasil Mendapatkan",
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

