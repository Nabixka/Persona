const pool = require("./postgres")

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
}

database()