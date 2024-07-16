const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
    return { teste: 'teste, ok!' }
});

fastify.listen(3000, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});