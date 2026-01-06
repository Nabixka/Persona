const pool = require("./database/db")

async function persona() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS game(
            id SERIAL PRIMARY KEY,
            name VARCHAR
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS personas(
            id SERIAL PRIMARY KEY,
            name VARCHAR,
            image TEXT,
            game INT,
            
            FOREIGN KEY (game) REFERENCES game(id))
            `)

        console.log("Berhasil Membuat Table")
    }
    catch (err) {
        console.log("Gagal, Error: ", err.message)
    }
    finally {
        pool.end
    }
}

persona()