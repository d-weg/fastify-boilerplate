import fastify from "fastify";
import { sampleRouter } from "./features/sample/sample.controller";
import helmet from "@fastify/helmet";
import swagger from '@fastify/swagger'


export const app = fastify({
  requestTimeout: 3000,
  logger: true
});

const teste = async () => {
  app.register(swagger)
  app.register(require('@fastify/swagger-ui'), {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (request, reply, next) { next() },
      preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
    transformSpecificationClone: true
  })
  app.register(helmet)
  app.register(sampleRouter.plugin, sampleRouter.config);
  await app.ready()

}


teste()