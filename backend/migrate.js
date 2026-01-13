const pool = require("./database/db")

async function persona() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS game(
            id SERIAL PRIMARY KEY,
            name VARCHAR
            image TEXT
            )
        `)
        
        await pool.query(`
            CREATE TABLE IF NOT EXISTS affinities(
            id SERIAL PRIMARY KEY,
            name VARCHAR
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS persona(
            id SERIAL PRIMARY KEY,
            name VARCHAR
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS affinities_type(
            id SERIAL PRIMARY KEY,
            name VARCHAR
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS persona_affinitites(
            id SERIAL PRIMARY KEY,
            persona INT,
            affinities INT,
            affinities_type INT,
            game INT,

            FOREIGN KEY (persona) REFERENCES persona(id),
            FOREIGN KEY (affinities) REFERENCES affinities(id),
            FOREIGN KEY (affinities_type) REFERENCES affinities_type(id),
            FOREIGN KEY (game) REFERENCES game(id)
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS skill(
            id SERIAL PRIMARY KEY,
            name VARCHAR,
            percentage INT,
            accuracy INT,
            scalling VARCHAR,
            description TEXT,
            affinities INT,
            game INT,

            FOREIGN KEY (affinities) REFERENCES affinities(id),
            FOREIGN KEY (game) REFERENCES game(id)
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS persona_skill(
            id SERIAL PRIMARY KEY,
            persona INT,
            skill INT,
            
            FOREIGN KEY (persona) REFERENCES persona(id),
            FOREIGN KEY (skill) REFERENCES skill(id)
             )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS persona_image(
            id SERIAL PRIMARY KEY,
            image TEXT,
            persona INT,
            game INT,
            
            FOREIGN KEY (persona) REFERENCES persona(id),
            FOREIGN KEY (game) REFERENCES game(id)
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS persona_description(
            id SERIAL PRIMARY KEY,
            description TEXT,
            persona INT,
            game INT,
            
            FOREIGN KEY (persona) REFERENCES persona(id),
            FOREIGN KEY (game) REFERENCES game(id)
            )
        `)

        console.log("Berhasil Membuat Table")
    }
    catch (err) {
        console.log("Gagal, Error: ", err.message)
    }
    finally {
        process.exit(0)
    }
}

persona()