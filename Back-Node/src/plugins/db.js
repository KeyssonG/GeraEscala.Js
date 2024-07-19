const { Pool, Query } = require('pg');
const fastifyPlugin = require('fastify-plugin');

async function dbConnector(fastify, options) {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });

    fastify.decorate('pg', {
        query: (text, params) => pool.query(text, params),
    });
}

module.exports = fastifyPlugin(dbConnector);