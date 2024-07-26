async function routes(fastify, options) {
    fastify.get('/schedules', { preValidation: [fastify.authenticate] }, async (request, reply) => {
        const { rows } = await fastify.pg.query('SELECT * FROM schedules');
        reply.send(rows);
    });

    fastify.post('/schedules', { preValidation: [fastify.authenticate] }, async (request, reply) => {
        const { employee_id, shift_start, shift_end } = request.body;

        const result = await fastify.pg.query(
            'INSERT INTO schedules (employee_id, shift_start, shift_end) VALUES ($1, $2, $3) RETURNING *',
            [employee_id, shift_start, shift_end]
        );
        reply.send(result.rows[0]);
    });
}

module.exports = routes;