const pool = require("./database/postgres")

async function drop(){
    try{
        await pool.query(`
            DROP DATABASE persona
        `)

        console.log("Berhasil Menghapus Database Persona")
    }
    catch(err){
        console.log("Gagal Menghapus")
    }
}

drop()