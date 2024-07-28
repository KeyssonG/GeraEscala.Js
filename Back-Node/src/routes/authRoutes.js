const authController = require('../controllers/authController');

async function authRoutes(fastify, options) {
    fastify.post('/login', authController.login);
    fastify.post('/register', authController.register);
}

module.exports = authRoutes; 