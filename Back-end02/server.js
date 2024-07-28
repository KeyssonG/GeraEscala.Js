const Fastify = require('fastify');
const fastify = Fastify({ logger: true });
const { Pool } = require('pg');
const cors = require('@fastify/cors'); // Atualizado para @fastify/cors

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
    user: 'administrador',
    host: 'localhost',
    database: 'work_schedule_system',
    password: 'RWzIq:',
    port: 5432,
});

// Habilita CORS com @fastify/cors
fastify.register(cors, {
    origin: '*', // Ajuste conforme necessário
});

// Configuração da rota de registro
fastify.post('/register', async (request, reply) => {
    const { email, password, confirmPassword } = request.body;

    // Validação básica
    if (!email || !password || !confirmPassword) {
        return reply.status(400).send({ message: 'E-mail, senha e confirmação de senha são obrigatórios.' });
    }

    if (password !== confirmPassword) {
        return reply.status(400).send({ message: 'As senhas não coincidem.' });
    }

    try {
        // Inserir usuário no banco de dados
        const result = await pool.query(
            'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *',
            [email, password]
        );

        const newUser = result.rows[0];
        reply.status(201).send({ message: 'Usuário registrado com sucesso!', user: newUser });
    } catch (error) {
        fastify.log.error(error);
        reply.status(500).send({ message: 'Erro ao registrar o usuário.' });
    }
});

// Inicia o servidor
fastify.listen({ port: 3001 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Servidor rodando na porta ${address}`);
});
