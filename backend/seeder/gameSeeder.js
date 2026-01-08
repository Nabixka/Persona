const pool = require("../database/db")

async function gameSeeder() {
    try {
        const games = [
            // main game
            { name: "Revelations Persona" },
            { name: "Persona 2 Innocent Sin" },
            { name: "Persona 2 Eternal Punishment" },
            { name: "Persona 3" },
            { name: "Persona 3 FES" },
            { name: "Persona 3 Portable" },
            { name: "Persona 3 Reload" },
            { name: "Persona 4" },
            { name: "Persona 4 Golden" },
            { name: "Persona 4 Revival" },
            { name: "Persona 5" },
            { name: "Persona 5 Royal" },

            //spin off
            { name: "Persona Q Shadow of the Labyrinth" },
            { name: "Persona Q2 New Cinema Labyrinth" },
            { name: "Persona 4 Arena" },
            { name: "Persona 4 Arena Ultimax" },
            { name: "Persona 3 Dancing In Moonlight" },
            { name: "Persona 4 Dancing All Night" },
            { name: "Persona 5 Dancing In Starlight" },
            { name: "Persona 5 Striker" },
            { name: "Persona 5 The Phantom X" },
            { name: "Persona 5 Tactica" },
        ]

        for (let game of games) {
            await pool.query(`
            INSERT INTO game (name) VALUES ($1)`,
                [game.name])
        }

        console.log("Berhasil Membuat Game")
    }
    catch (err) {
        console.log("Gagal Membuat Game, Error: ", err.message)
    }
    finally {
        process.exit(0)
    }
}

module.exports = gameSeeder