// src/controllers/authController.js
const registerUser = async (req, reply) => {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        return reply.status(400).send({ message: 'E-mail, senha e confirmação de senha são obrigatórios.' });
    }

    if (password !== confirmPassword) {
        return reply.status(400).send({ message: 'As senhas não coincidem.' });
    }

    // Código para salvar o usuário no banco de dados
    try {
        // Insira o código para criar um novo usuário
    } catch (error) {
        return reply.status(500).send({ message: 'Erro ao registrar o usuário.' });
    }

    return reply.status(201).send({ message: 'Usuário registrado com sucesso!' });
};

module.exports = { registerUser };
