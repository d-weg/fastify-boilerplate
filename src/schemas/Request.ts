import { FastifyRequest } from "fastify"


export interface BaseRequest<T = {}, X = {}> extends FastifyRequest {
    Headers:  {
        'x-api-key': string
    }
    Body: T
    Params?:X
}