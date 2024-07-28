// src/server.js
require('dotenv').config(); // Carregar variáveis de ambiente do .env
const fastify = require('./app');

fastify.listen({ port: 3001 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Servidor rodando na porta ${address}`);
});
