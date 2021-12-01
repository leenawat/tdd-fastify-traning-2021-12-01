import { FastifyInstance } from 'fastify'
import { Static, Type } from '@sinclair/typebox'

const UserSchema = Type.Object({
    first_name: Type.String(),
    last_name: Type.String(),
    mail: Type.Optional(Type.String({ format: "email" })),
});

type UserDto = Static<typeof UserSchema>;
interface IUser {
    first_name: string;
    last_name: string;
    email: string;
}

const DefaultUserSchema = {
    type: 'object',
    properties: {
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        mail: { type: 'string' },
    },
    required: ['first_name', 'last_name', 'mail'],
}

export default async function index(fastify: FastifyInstance) {

    fastify.post<{ Body: IUser, Reply: IUser }>('/default', {
        schema: {
            body: DefaultUserSchema
        },
    }, async (request, reply) => {
        const user: IUser = request.body;
        reply.status(200).send(user);
    })


    fastify.post<{ Body: UserDto; Reply: UserDto }>("/typebox", {
        schema: {
            body: UserSchema,
            response: { 200: UserSchema, },
        },
    }, (request, reply) => {
        const user: UserDto = request.body;
        reply.status(200).send(user);
    })
}