const affinitiesController = require("../controllers/affinitiesController")
const express = require("express")
const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Affinities
 *   description: Documentation For All Affinities
 */

/**
 * @swagger
 * /affinities:
 *   get:
 *      summary: Get All Affinities
 *      tags: [Affinities]
 *      responses: 
 *         200:
 *              description: Berhasil Mendapatkan Data Affinities
 */
router.get("/", affinitiesController.getAffinities)

/**
 * @swagger
 * /affinities/{id}:
 *  get:
 *      summary: Get Affinities By Id
 *      tags: [Affinities]
 *      parameters:
 *          - in: path
 *            name: id
 *            require: true
 *            schema:
 *              type: integer
 *            description: Affinitiy ID
 *      responses:
 *          200:
 *              description: Berhasil Mendapatkan Data Affinities
 *          404:
 *              description: Tidak Dapat Menemukan Affinities
 *          500:
 *              description: message error
 */
router.get("/:id", affinitiesController.getAffinitiesById)

/**
 * @swagger
 * /affinities:
 *  post:
 *      summary: Create Affinities
 *      tags: [Affinities]
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - name
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Fire
 *      responses:
 *          201:
 *              description: Berhasil Membuat Affinities
 *          400:
 *              description: Isi Yang Benar Wok
 *          500: 
 *              description: message error
 */
router.post("/", affinitiesController.createAffinities)

/**
 * @swagger
 * /affinities/{id}:
 *  put: 
 *      summary: Update Affinities
 *      tags: [Affinities]
 *      parameters:
 *          - in: path
 *            name: id
 *            require: true
 *            description: Affinities Id
 *            schema:
 *              type: integer
 *      requestBody:
 *          require: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required:
 *                          - name
 *                      properties:
 *                          name: 
 *                              type: string
 *                              example: Ice
 *      responses:
 *              200:
 *                  description: Berhasil Mengubah Affinities
 *              404:
 *                  description: Affinities Tidak Ada
 *              400: 
 *                  description: Isi Yang Benar Wok
 *              500:
 *                  description: message error
 */
router.put("/:id", affinitiesController.updateAffinities)

/**
 * @swagger
 * /affinities/{id}:
 *  delete:
 *      summary: Delete Affinities
 *      tags: [Affinities]
 *      parameters:
 *          - in: path
 *            require: true
 *            name: id
 *            description: Affinities Id
 *      responses:
 *          200:
 *              description: Berhasil Menghapus Affinities
 *          404: 
 *              description: Affinities Tidak Ada
 *          500: 
 *              description: message Error
 *          
 */

router.delete("/:id", affinitiesController.deleteAffinities)

module.exports = router