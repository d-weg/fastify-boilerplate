import { FastifyPluginCallback } from "fastify";
import { SampleRequest, sampleBody } from "./sample.schema";
import { PublicRoute } from "../../types";


const plugin: FastifyPluginCallback = (app, opts, next) => {
    app.post<SampleRequest, PublicRoute>("/", {
        config: {
            isPublic: true
        },
        schema: { body: sampleBody.schema }
    }, async (req, res) => {


        return {
        }

    })
    app.post<SampleRequest>("/a", {
        schema: { body: sampleBody.schema }
    }, async (req, res) => {


        return {
        }

    })

    next();
};

export const sampleRouter = {
    config: { prefix: "/sample" },
    plugin,
};
