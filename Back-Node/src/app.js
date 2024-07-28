// src/app.js
const Fastify = require('fastify');
const app = Fastify();
require('dotenv').config();

const dbPlugin = require('./plugins/db');
const jwtPlugin = require('./plugins/jwt');
const authPlugin = require('./plugins/auth');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

// Registrar plugins
app.register(dbPlugin);
app.register(jwtPlugin);
app.register(authPlugin); // Registre o plugin de autenticação

// Registrar rotas
app.register(authRoutes);
app.register(employeeRoutes);
app.register(scheduleRoutes);

// Iniciar o servidor
app.listen({ port: 3000 }, err => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Server listening on http://localhost:3000');
});
