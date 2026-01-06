const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
const gameRoute = require("./routers/gameRoute")

app.use(express.json())
app.use(cors())
app.use("/game", gameRoute)

app.listen(port, () => {
    console.log("Server Berjalan di ", port)
})