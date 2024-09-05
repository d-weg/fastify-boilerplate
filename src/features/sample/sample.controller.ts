import { FastifyPluginCallback } from "fastify";
import { BaseRequest } from "../../schemas/Request";

const plugin: FastifyPluginCallback = (app, opts, next) => {
    app.post<BaseRequest>("/", {
        config: {
            public: true
        }
    }, async (req, res) => {
      
     
        return {
        }

    })

    next();
};

export const webhookRouter = {
    config: { prefix: "/sample" },
    plugin,
};
