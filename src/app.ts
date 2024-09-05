import fastify from "fastify";
import { webhookRouter } from "./features/sample/sample.controller";
import helmet from "@fastify/helmet";


export const app = fastify({
  requestTimeout: 3000,
  logger: true
});

app.register(helmet)
app.register(webhookRouter.plugin, webhookRouter.config);