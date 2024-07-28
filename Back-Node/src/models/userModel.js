// src/models/userModel.js
const pool = require('../plugins/db');

const createUser = async (email, password) => {
    try {
        const result = await pool.query(
            'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *',
            [email, password]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao registrar o usuário:', error.message);
        console.error('Detalhes do erro:', error);
        throw new Error('Erro ao registrar o usuário.');
    }
};

module.exports = {
    createUser,
};
