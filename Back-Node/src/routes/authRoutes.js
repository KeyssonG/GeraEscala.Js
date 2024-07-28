// src/routes/authRoutes.js
const authController = require('../controllers/authController');

async function routes(fastify, options) {
    fastify.post('/register', authController.registerUser);
}

module.exports = routes;
