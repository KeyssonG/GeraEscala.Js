const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const login = async (request, reply) => {
    const { email, password } = request.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return reply.status(401).send({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expireIn: '1h' });
    return reply.send({ token });
};

const register = async (request, reply) => {
    const {email, password} = request.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        const newUser = await User.createTables({email, password: hashedPassword});
        return reply.send({message: 'Usuário registrado com sucesso!'})
    } catch (err){
        return reply.status(400).send(err);
    }
};

module.exports = {
    login,
    register,
};