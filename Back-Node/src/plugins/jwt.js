const fastifyPlugin = require('fastify-plugin');
const jwt = require('@fastify/jwt');

async function jwtPlugin(fastify, options) {
    // Verifique o valor da variável de ambiente JWT_SECRET
    console.log('JWT Secret:', process.env.JWT_SECRET);

    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET environment variable is not defined');
    }

    fastify.register(jwt, {
        secret: process.env.JWT_SECRET,
        sign: {
            expiresIn: '1h' // Ajuste conforme necessário
        }
    });
}

module.exports = fastifyPlugin(jwtPlugin);