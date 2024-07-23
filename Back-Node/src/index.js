require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const dbConnector = require('./plugins/db');
// Sessão onde será configurado as rotas

fastify.register(dbConnector);

// Sessão onde será feito o registro de rotas

const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`Servidor rodando em ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();