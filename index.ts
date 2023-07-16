import options from "./env-options";
import fastifyEnv from "@fastify/env";
import server from "./src/server";

server.register(
    fastifyEnv,
    options
);

(async () => {
    try {
        let port = 5454;
        if (process.env.PORT) {
            port = process.env.PORT
        }
        await server.ready()
        await server.listen({port})
    } catch (error) {
        server.log.error(error)
        process.exit(1)
    }
})()
