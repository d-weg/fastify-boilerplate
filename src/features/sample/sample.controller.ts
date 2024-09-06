import { FastifyPluginCallback } from "fastify";
import { mySchema } from "../../schemas/Request";


export interface ContextConfigDefault {
    customProperty: any
}


const plugin: FastifyPluginCallback = (app, opts, next) => {
    app.post<never, ContextConfigDefault>("/", {
        config: {
            customProperty: true
        },
        schema: { body: mySchema.schema }
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
