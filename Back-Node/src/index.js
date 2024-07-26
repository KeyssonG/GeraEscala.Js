require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const dbConnector = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const scheduleRoutes = require('./routes//scheduleRoutes');

fastify.register(dbConnector);

fastify.register(authRoutes);
fastify.register(employeeRoutes);
fastify.register(scheduleRoutes);

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