import { FastifyRequest } from "fastify"
import { s } from "ajv-ts";

// creating a schema for strings
export const mySchema = s.object({
    Teste: s.string()
})

mySchema.schema
export interface BaseRequest<T = {}, X = {}> extends FastifyRequest {
    Headers:  {
        'x-api-key': string
    }
    Body: T
    Params?:X
}