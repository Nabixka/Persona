const { Pool } = require("pg")

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "your_password",
    database: "postgres",
    port: 5432
})

module.exports = pool