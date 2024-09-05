import { app } from "./app";
import env from "./env";

if (env.IS_LOCAL) {
    app.listen({ port: parseInt(env.PORT) || 3000 });
} else {
    app.addContentTypeParser('application/json', {}, (req, body, done) => {
        done(null, body['body']);
    });
}


export const handler = async (request, reply) => {
    await app.ready();
    app.server.emit('request', request, reply)
}


