import options from "./env-options";
import fastifyEnv from "@fastify/env";
import server from "./src/server";
import client, {Elastic} from "./src/elastic/client";

declare module 'fastify' {
    export interface FastifyInstance {
        elastic: Elastic;
    }
}



const start = async () => {
    try {
        await server.register(
            fastifyEnv,
            options
        );

        await server.register(
            client,
            {
                node: process.env.ELASTIC_URL,
                auth: {
                    username: process.env.ELASTIC_USERNAME,
                    password: process.env.ELASTIC_PASSWORD
                }
            }
        );

        await server.ready()
        await server.listen({port: process.env.PORT})
    } catch (error) {
        server.log.error(error)
        process.exit(1)
    }
}
start();
