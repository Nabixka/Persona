const pool = require("../database/db")

async function gameSeeder() {
    try {
        const games = [
            // main game
            // { name: "Revelations Persona", image: "http://localhost:3000/uploads/games/persona.jpg" },
            //{ name: "Persona 2 Innocent Sin" },
            // { name: "Persona 2 Eternal Punishment" },
            // { name: "Persona 3" },
            { name: "Persona 3 FES", image: `/uploads/games/persona_3_fes.jpg`  },
            { name: "Persona 3 Portable", image: `/uploads/games/persona_3_portable.jpg`  },
            { name: "Persona 3 Reload", image: `/uploads/games/persona_3_reload.jpg`  },
            // { name: "Persona 4" },
            { name: "Persona 4 Golden", image: `/uploads/games/persona_4_golden.jpg`  },
            // { name: "Persona 4 Revival" },
            { name: "Persona 5", image: `/uploads/games/persona_5.jpg`  },
            // { name: "Persona 5 Royal" },

            //spin off
            // { name: "Persona Q Shadow of the Labyrinth" },
            // { name: "Persona Q2 New Cinema Labyrinth" },
            { name: "Persona 4 Arena", image: `/uploads/games/persona_4_arena.jpg`  },
            // { name: "Persona 4 Arena Ultimax" },
            { name: "Persona 3 Dancing In Moonlight", image: `/uploads/games/persona_3_dancing_moonlight.jpg`  },
            // { name: "Persona 4 Dancing All Night" },
            { name: "Persona 5 Dancing In Starlight", image: `/uploads/games/persona_5_dancing.jpg`  },
            { name: "Persona 5 Striker", image: `/uploads/games/persona_5_striker.jpg`  },
            //{ name: "Persona 5 The Phantom X" },
            // { name: "Persona 5 Tactica" },
        ]

        for (let game of games) {
            await pool.query(`
            INSERT INTO game (name, image) VALUES ($1, $2)`,
                [game.name, game.image])
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