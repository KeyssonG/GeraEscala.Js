const bcrypt = require('bcrypt');
const jwt = require('fastify-jwt');

async function routes(fastify, options) {
    fastify.post('/register', async (request, reply) => {
        const { email, password } = request.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await fastify.pg.query(
            [email, hashedPassword]
        );

        reply.send(result.rows[0]);
    });

    fastify.post('/login', async (request, reply) => {
        const { email, password } = request.body;

        const { rows } = await fastify.pg.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = rows[0];

        if (!user) {
            return reply.code(401).send({ message: 'Email ou senha incorretos' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return reply.code(401).send({ message: 'Email ou senha incorretos' });
        }

        const token = fastify.jwt.sign({ id: user.id })
        reply.send({ token });

    });

    fastify.register(require('fastify-jwt'), {
        secret: process.env.JWT_SECRET,
    });

    fastify.decorate("authenticate", async function (request, reply) {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.send(err);
        }
    });
}

module.exports = routes;