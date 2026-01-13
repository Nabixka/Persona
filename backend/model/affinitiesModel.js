const pool = require("../database/db")

const getAffinities = async () => {
    const result = await pool.query(`
        SELECT * FROM affinities`)
    
    return result.rows
}

const getAffinitiesById = async (id) => {
    const result = await pool.query(`
        SELECT * FROM affinities WHERE id = $1`,
    [id])

    return result.rows[0]
}

const createAffinities = async (data) => {
    const { name } = data
    const list = await pool.query(`
        INSERT INTO affinities (name) VALUES ($1) RETURNING id`, 
    [name])

    const newId = list.rows[0].id
    const result = await pool.query(`
        SELECT * FROM affinities WHERE id = $1`,
    [newId])

    return result.rows[0]
}

const updateAffinities = async (id, data) => {
    const { name } = data
    const list = await pool.query(`
        UPDATE affinities SET name = $1 WHERE id = $2 RETURNING id`,
    [name, id])

    const newId = list.result[0].id
    const result = await pool.query(`
        SELECT * FROM affinities WHERE id = $1`
    , [newId])

    return result.rows[0]
}

const deleteAffinities = async (id) => {
    const result = await pool.query(`
        DELETE FROM affinities WHERE id = $1`, 
    [id])
}

module.exports = { getAffinities, getAffinitiesById, createAffinities, updateAffinities, deleteAffinities }