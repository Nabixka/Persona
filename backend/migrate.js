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
            description TEXT,
            
            FOREIGN KEY (game) REFERENCES game(id))
            `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS affinities(
            id SERIAL PRIMARY KEY,
            name VARCHAR,
            image TEXT)
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS move(
            id SERIAL PRIMARY KEY,
            name VARCHAR,
            SP INT,
            percentage INT,
            element INT,
            
            FOREIGN KEY (element) REFERENCES affinities(id)
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS type(
            id SERIAL PRIMARY KEY,
            name VARCHAR
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS items(
            id SERIAL PRIMARY KEY,
            name VARCHAR,
            description TEXT,
            type INT,

            FOREIGN KEY (type) REFERENCES type(id)

            )
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