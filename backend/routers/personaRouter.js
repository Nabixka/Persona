const personaController = require("../controllers/personaController")
const express = require("express")
const router = express.Router()
const uploadPersona = require("../multer")

router.get("/", personaController.getPersona)
router.get("/:id", personaController.getPersonaById)
router.post("/", personaController.createPersona)
router.put("/:id", personaController.updatePersona)
router.delete("/:id", personaController.deletePersona)

module.exports = router