import { ContextConfigDefault } from "fastify";


export interface BaseRequest<Body = {}, Params = {}> extends FastifyRequest {
    Headers:  {
        'x-api-key': string
    }
    Body
    Params?
}

export interface PublicRoute extends ContextConfigDefault {
    isPublic: true
}

export interface PrivateRoute extends ContextConfigDefault {
    isPublic?: false
}