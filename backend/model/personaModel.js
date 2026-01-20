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

const createPersona = async (data) => {
    const { name } = data
    const create = await pool.query(`
        INSERT INTO persona (name) VALUES ($1) RETURNING id`,
    [name])

    const newId = create.rows[0].id
    const result = await pool.query(`
        SELECT * FROM persona WHERE id = $1`,
    [newId])

    return result.rows[0]
}

const deletePersona = async (id) => {
    const result = await pool.query(`
        DELETE FROM persona WHERE id = $1`,
    [id])
}

const updatePersona = async (id, data) => {
    const { name } = data
    const update = await pool.query(`
        UPDATE persona SET name = $1 WHERE id = $2 RETURNING id`,
    [name, id])

    const newId = update.rows[0].id
    const result = await pool.query(`
        SELECT * FROM persona WHERE id = $1`,
    [newId])

    return result.rows[0]
}

module.exports = { getPersona, getPersonaById, createPersona, updatePersona, deletePersona }
