const game = require("../model/gameModel")

exports.getGame = async (req, res) => {
    try {
        const list = await game.getGame()

        res.status(200).json({
            status: 200,
            message: "Berhasil mengambil",
            data: list
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}

exports.getGameById = async (req, res) => {
    try {
        const { id } = req.params
        const list = await game.getGameById(id)

        if (!list) {
            return res.status(404).json({
                status: 404,
                message: "TIdak Dapat Menemukan Game"
            })
        }

        res.status(200).json({
            status: 200,
            message: "Berhasil Mendapatkan Game",
            data: list
        })
    }
    catch (err) {
        res.status(500).json({
            status: 500,
            message: err.message
        })
    }
}

exports.createGame = async (req, res) => {
    try{
        const {name} = req.body

        if(!name){
            return res.status(400).json({
                status: 400, 
                message: "Isi Yang Benar Wok"
            })
        }

        const list = await game.createGame({name})
        res.status(201).json({
            status: 201,
            message: "Berhasil Membuat Game",
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

exports.deleteGame = async (req, res) => {
    try{
        const { id } = req.params

        const exist = await game.getGameById(id)
        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Tidak Ada Game"
            })
        }

        const list = await game.deleteGame(id)
        

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

exports.updateGame = async (req, res) => {
    try{
        const { id } = req.params
        const { name } = req.body

        if(!name){
            return res.status(400).json({
                status: 400,
                message: "Isi Yang Benar Wok"
            })
        }

        const exist = await game.getGameById(id)

        if(!exist){
            return res.status(404).json({
                status: 404,
                message: "Tidak Dapat Menemukan Game"
            })
        }

        const list = await game.updateGame(id, {name})
        res.status(200).json({
            status: 200,
            message: "Berhasil Mengubah Game",
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