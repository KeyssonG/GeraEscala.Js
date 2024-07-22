const createScheduleTable = `
CREATE TABLE IF NOT EXISTS schedules (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER NOT NULL REFERENCES employees(id),
    shift_start TIMESTAMP NOT NULL,
    shift_end TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;
async function createTables(fastify) {
    await fastify.pg.query(createScheduleTable);
}

module.exports = { createTables };
