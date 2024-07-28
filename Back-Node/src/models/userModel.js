const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(255) UNIQUE NOT NULL, 
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function createTables(fastify) {
    await fastify.pg.query(createUserTable);
}

module.exports = { createTables };
