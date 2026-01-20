const personaController = require("../controllers/personaController")
const express = require("express")
const router = express.Router()

/**
 * @swagger
 * tags:
 *  name: Persona
 *  description: All Documentation For Persona
 */

/**
 * @swagger
 *  /persona:
 *      get:
 *          summary: Get All Persona
 *          tags: [Persona]
 *          responses: 
 *              200:
 *                  Description: Berhasil Mengambil
 */
router.get("/", personaController.getPersona)

/**
 * @swagger
 * /persona/{id}:
 *      get:
 *          summary: Get Persona By id
 *          tags: [Persona]
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                description: ID Persona
 *          responses: 
 *              200: 
 *                  Description: Berhasil Mengambil
 *              404:
 *                  Description: Persona TIdak Ada
 */
router.get("/:id", personaController.getPersonaById)

/**
 * @swagger
 * /persona:
 *  post:
 *      summary: Create New Persona
 *      tags: [Persona]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - name
 *                      properties:
 *                          name: 
 *                              type: string
 *                              example: Pixie
 *      responses:
 *          201:
 *              message: Berhasil Menambahkan
 *          400:
 *              message: Isi Yang Benar Wok
 */
router.post("/", personaController.createPersona)

/**
 * @swagger
 * /persona/{id}:
 *  put:
 *      summary: Update Persona
 *      tags: [Persona]
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *              type: integer
 *            description: ID Persona
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Slime
 *      responses:
 *          200:
 *              description: Berhasil Mengubah
 *          400:
 *              description: Isi Yang Benar Wok
 *          404: 
 *              description: Persona Tidak Ada
 *                      
 */
router.put("/:id", personaController.updatePersona)

/**
 * @swagger
 * /persona/{id}:
 *  delete:
 *      summary: Delete Persona
 *      tags: [Persona]
 *      parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema: 
 *             type: integer
 *           description: ID Persona
 *      responses:
 *          200:
 *              message: Berhasil Menghapus
 *          404:    
 *              message: Persona Tidak Ada atau sudah dihapus
 */
router.delete("/:id", personaController.deletePersona)

module.exports = router