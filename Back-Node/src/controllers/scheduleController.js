// src/controllers/scheduleController.js

// Função para obter todos os horários
const getAllSchedules = async (request, reply) => {
    try {
        const { rows } = await request.fastify.pg.query('SELECT * FROM schedules');
        reply.send(rows);
    } catch (err) {
        reply.status(500).send({ error: 'Erro ao buscar horários' });
    }
};

// Função para criar um novo horário
const createSchedule = async (request, reply) => {
    const { employee_id, shift_start, shift_end } = request.body;

    try {
        const result = await request.fastify.pg.query(
            'INSERT INTO schedules (employee_id, shift_start, shift_end) VALUES ($1, $2, $3) RETURNING *',
            [employee_id, shift_start, shift_end]
        );
        reply.send(result.rows[0]);
    } catch (err) {
        reply.status(400).send({ error: 'Erro ao criar horário' });
    }
};

// Função para obter um horário específico por ID
const getScheduleById = async (request, reply) => {
    const { id } = request.params;

    try {
        const { rows } = await request.fastify.pg.query('SELECT * FROM schedules WHERE id = $1', [id]);
        if (rows.length === 0) {
            return reply.status(404).send({ error: 'Horário não encontrado' });
        }
        reply.send(rows[0]);
    } catch (err) {
        reply.status(500).send({ error: 'Erro ao buscar horário' });
    }
};

// Função para atualizar um horário específico por ID
const updateSchedule = async (request, reply) => {
    const { id } = request.params;
    const { employee_id, shift_start, shift_end } = request.body;

    try {
        const result = await request.fastify.pg.query(
            'UPDATE schedules SET employee_id = $1, shift_start = $2, shift_end = $3 WHERE id = $4 RETURNING *',
            [employee_id, shift_start, shift_end, id]
        );
        if (result.rows.length === 0) {
            return reply.status(404).send({ error: 'Horário não encontrado' });
        }
        reply.send(result.rows[0]);
    } catch (err) {
        reply.status(400).send({ error: 'Erro ao atualizar horário' });
    }
};

// Função para excluir um horário específico por ID
const deleteSchedule = async (request, reply) => {
    const { id } = request.params;

    try {
        const result = await request.fastify.pg.query('DELETE FROM schedules WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return reply.status(404).send({ error: 'Horário não encontrado' });
        }
        reply.send({ message: 'Horário deletado com sucesso' });
    } catch (err) {
        reply.status(500).send({ error: 'Erro ao excluir horário' });
    }
};

module.exports = {
    getAllSchedules,
    createSchedule,
    getScheduleById,
    updateSchedule,
    deleteSchedule
};
