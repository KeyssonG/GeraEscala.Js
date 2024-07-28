
// src/app.js
const Fastify = require('fastify');
const cors = require('@fastify/cors');
const authRoutes = require('./routes/authRoutes');

const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: '*' });
fastify.register(authRoutes);

module.exports = fastify;
