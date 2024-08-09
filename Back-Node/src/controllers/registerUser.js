// src/controllers/authController.js
const bcrypt = require('bcrypt')
const { createUser } = require('../models/userModel');

const registerUser = async (request, reply) => {
    const { email, password, confirmPassword } = request.body;

    // Verifique se as senhas coincidem
    if (password !== confirmPassword) {
        return reply.code(400).send({ error: 'As senhas não coincidem.' });
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 8);

        const newUser = await createUser(email, hashedPassword);
        reply.code(201).send(newUser);
    } catch (error) {
        console.error('Erro ao registrar usuário:', error.message);
        reply.code(500).send({ error: error.message });
    }
};

module.exports = {
    registerUser,
};