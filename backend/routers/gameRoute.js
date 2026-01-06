const gameController = require("../controllers/gameController")
const express = require("express")
const router = express.Router()

router.get("/", gameController.getGame)
router.get("/:id", gameController.getGameById)
router.post("/", gameController.createGame)
router.delete("/:id", gameController.deleteGame)
router.put("/:id", gameController.updateGame)

module.exports = router