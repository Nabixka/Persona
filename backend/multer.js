const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = "uploads"

        if (req.baseUrl.includes("game")) {
            folder = "uploads/games"
        }

        cb(null, folder)
    },

    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname) // .png
        const name = path.basename(file.originalname, ext)

        cb(null, `${name}-${Date.now()}${ext}`)
    }
})

const uploadGames = multer({ storage })

module.exports = { uploadGames }
