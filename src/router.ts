import { FastifyInstance } from 'fastify'
import indexRoute from './controllers'

export default async function router(fastify: FastifyInstance) {
    // router prefix
    fastify.register(indexRoute, { prefix: '/' })
}