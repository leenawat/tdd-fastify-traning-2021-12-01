
import fastify from 'fastify'

import routers from './router'

const app = fastify({
    logger: {
        level: 'info'
    },
    ajv: {
        customOptions: {
            allErrors: true
        },
    }
})

app.register(require('fastify-swagger'), {
    routePrefix: '/swagger',
    swagger: {
        info: {
            title: 'Test swagger',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        //   host: 'localhost',
        //   schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            { name: 'user', description: 'User related end-points' },
            { name: 'code', description: 'Code related end-points' }
        ],
    },
    uiConfig: {
        deepLinking: false
    },
    exposeRoute: true
})

app.register(routers)

export default app