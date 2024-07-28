// src/plugins/auth.js
async function authenticate(request, reply) {
    try {
        // Supondo que você esteja usando JWT
        await request.jwtVerify();
    } catch (err) {
        reply.send(err);
    }
}

module.exports = async function (fastify, options) {
    fastify.decorate('authenticate', authenticate);
};
