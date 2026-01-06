const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
const gameRoute = require("./routers/gameRoute")
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./swagger")

app.use(express.json())
app.use(cors())
app.use("/game", gameRoute)
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(port, () => {
    console.log("Server Berjalan di http://localhost:3000")
    console.log("Swagger Berjalan di http://localhost:3000/swagger ")
})