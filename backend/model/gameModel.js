const pool = require("../database/db")

const getGame = async () => {
    const result = await pool.query(`
        SELECT * FROM game  
        `)

    return result.rows
}

const getGameById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM game WHERE id = $1`, 
    [id])

    return result.rows[0]
}

const createGame = async (data) => {
    const { name } = data
    const list = await pool.query(`
        INSERT INTO game (name) VALUES ($1) RETURNING id`, 
        [name])
    
    const newId = list.rows[0].id

    const result = await pool.query(`
        SELECT * FROM game WHERE id = $1`, 
        [newId])

    return result.rows[0]
}

const deleteGame = async (id) => {
    const result = await pool.query(`
        DELETE FROM game WHERE id = $1`, 
        [id])
}

const updateGame = async (id, data) => {
    const { name } = data
    const list = await pool.query(`
        UPDATE game SET name = $1 WHERE id = $2 RETURNING id`, 
        [name, id])

    const newId = list.rows[0].id

    const result = await pool.query(`
        SELECT * FROM game WHERE id = $1`, [newId])
    
    return result.rows[0]
}

module.exports = { getGame, getGameById, createGame, deleteGame, updateGame }