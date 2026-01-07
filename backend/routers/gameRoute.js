const gameController = require("../controllers/gameController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Game
 *   description: All Documentation For Game
 */

/**
 * @swagger
 * /game:
 *   get:
 *     summary: Get All Game
 *     tags: [Game]
 *     responses:
 *       200:
 *         description: Berhasil mengambil
 */
router.get("/", gameController.getGame);

/**
 * @swagger
 * /game/{id}:
 *   get:
 *     summary: Get Game By Id
 *     tags: [Game]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID game
 *     responses:
 *       200:
 *         description: Berhasil Mendapatkan Game
 *       404:
 *         description: Tidak Dapat Menemukan Game
 */
router.get("/:id", gameController.getGameById);

/**
 * @swagger
 * /game:
 *   post:
 *     summary: Create New Game
 *     tags: [Game]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - genre
 *             properties:
 *               name:
 *                 type: string
 *                 example: Persona 3 FES
 *     responses:
 *       201:
 *         message: Berhasil Membuat Game
 *
 */
router.post("/", gameController.createGame);

/**
 * @swagger
 * /game/{id}:
 *   put:
 *     summary: Update Game
 *     tags: [Game]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Persona 5 Royal
 *
 *     responses:
 *       200:
 *         description: Berhasil Mengubah Game
 *       404:
 *         description: Tidak Dapat Menemukan Game
 *       400:
 *         description: Isi Yang Benar Wok
 */
router.put("/:id", gameController.updateGame);

/**
 * @swagger
 * /game/{id}:
 *   delete:
 *     summary: Delete game
 *     tags: [Game]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID game
 *     responses:
 *       200:
 *         description: Game berhasil dihapus
 *       404:
 *         description: Game tidak ditemukan
 */
router.delete("/:id", gameController.deleteGame);

module.exports = router;
