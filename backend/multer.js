const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = "uploads"

        if(req.baseUrl.includes("persona_image")){
            folder = "uploads/persona"
        }

        cb(null, folder)
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname + Date.now())
    }
})

const uploadPersona = multer({
    storage
})

module.exports = { uploadPersona }