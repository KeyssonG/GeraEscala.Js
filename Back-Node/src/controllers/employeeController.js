// src/controllers/employeeController.js

// Função para obter todos os funcionários
const getAllEmployees = async (request, reply) => {
    try {
        const { rows } = await request.fastify.pg.query('SELECT * FROM employees');
        reply.send(rows);
    } catch (err) {
        reply.status(500).send({ error: 'Erro ao buscar funcionários' });
    }
};

// Função para criar um novo funcionário
const createEmployee = async (request, reply) => {
    const { first_name, last_name, position } = request.body;

    try {
        const result = await request.fastify.pg.query(
            'INSERT INTO employees (first_name, last_name, position) VALUES ($1, $2, $3) RETURNING *',
            [first_name, last_name, position]
        );
        reply.send(result.rows[0]);
    } catch (err) {
        reply.status(400).send({ error: 'Erro ao criar funcionário' });
    }
};

// Função para obter um funcionário específico por ID
const getEmployeeById = async (request, reply) => {
    const { id } = request.params;

    try {
        const { rows } = await request.fastify.pg.query('SELECT * FROM employees WHERE id = $1', [id]);
        if (rows.length === 0) {
            return reply.status(404).send({ error: 'Funcionário não encontrado' });
        }
        reply.send(rows[0]);
    } catch (err) {
        reply.status(500).send({ error: 'Erro ao buscar funcionário' });
    }
};

// Função para atualizar um funcionário específico por ID
const updateEmployee = async (request, reply) => {
    const { id } = request.params;
    const { first_name, last_name, position } = request.body;

    try {
        const result = await request.fastify.pg.query(
            'UPDATE employees SET first_name = $1, last_name = $2, position = $3 WHERE id = $4 RETURNING *',
            [first_name, last_name, position, id]
        );
        if (result.rows.length === 0) {
            return reply.status(404).send({ error: 'Funcionário não encontrado' });
        }
        reply.send(result.rows[0]);
    } catch (err) {
        reply.status(400).send({ error: 'Erro ao atualizar funcionário' });
    }
};

// Função para excluir um funcionário específico por ID
const deleteEmployee = async (request, reply) => {
    const { id } = request.params;

    try {
        const result = await request.fastify.pg.query('DELETE FROM employees WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return reply.status(404).send({ error: 'Funcionário não encontrado' });
        }
        reply.send({ message: 'Funcionário deletado com sucesso' });
    } catch (err) {
        reply.status(500).send({ error: 'Erro ao excluir funcionário' });
    }
};

module.exports = {
    getAllEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};
