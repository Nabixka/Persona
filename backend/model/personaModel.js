const pool = require("../database/db")

const getPersona = async () => {
    const result = await pool.query(`
        SELECT * FROM persona
    `)

    return result.rows
}

const getPersonaById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM persona WHERE id = $1    
    `, 
    [id])

    return result.rows[0]
}

module.exports = { getPersona, getPersonaById }
