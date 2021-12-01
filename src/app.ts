import fastify, { FastifyInstance } from 'fastify'

import routers from './router'

const app: FastifyInstance = fastify({
    logger: {
        level: 'info'
    }
})

app.register(routers)

export default app