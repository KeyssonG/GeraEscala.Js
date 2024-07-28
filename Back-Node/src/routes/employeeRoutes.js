// src/routes/employeeRoutes.js
async function routes(fastify, options) {
    fastify.get('/employees', { preValidation: [fastify.authenticate] }, async (request, reply) => {
        const { rows } = await fastify.pg.query('SELECT * FROM employees');
        reply.send(rows);
    });

    fastify.post('/employees', { preValidation: [fastify.authenticate] }, async (request, reply) => {
        const { first_name, last_name, position } = request.body;

        const result = await fastify.pg.query(
            'INSERT INTO employees (first_name, last_name, position) VALUES ($1, $2, $3) RETURNING *',
            [first_name, last_name, position]
        );
        reply.send(result.rows[0]);
    });
}

module.exports = routes;
