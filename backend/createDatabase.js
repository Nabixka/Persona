const pool = require("./database/postgres")

async function database(){
    try{
        await pool.query(`
            CREATE DATABASE persona     
        `)
        console.log("Berhasil Membuat Database Persona")
    }
    catch(err){
        console.log("Gagal, Error: ", err.message)
    }
    finally{
        process.exit(0)
    }
}

database()