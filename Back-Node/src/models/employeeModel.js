const createEmployeeTable = `
CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL, 
    position VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function createTables(fastify) {
    await fastify.pg.query(createEmployeeTable);
}

module.exports = (createTables);