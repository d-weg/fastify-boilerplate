import { FastifyContextConfig, FastifyReply, FastifyRequest } from "fastify"
import { FastifyRouteConfig } from "fastify/types/route"
import env from "../env"

interface CustomRouteConfig {
  routeOptions: {
    config: FastifyContextConfig & FastifyRouteConfig & {
      public?: boolean
    }
  }
}

export function validateApiKey({ headers }: FastifyRequest, reply: FastifyReply, done) {
  const { "x-api-key": xApiKey } = headers

  if (xApiKey !== env.API_KEY) {
    reply.code(403)
    throw {
      message: "Invalid API KEY"
    }
  }

  done()
}

export function validateAuthToken({ headers, routeOptions }: FastifyRequest & CustomRouteConfig, reply: FastifyReply, done) {
    const { config } = routeOptions
    const { Authorization } = headers
    // if()

  // client.v

    done()
}