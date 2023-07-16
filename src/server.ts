import fastify from "fastify";
import client from "./elastic/client.ts";
const server = fastify({logger: true});
client.ping().then(res => console.log(res, 'hi'))
server.get('/ping', async (request, reply) => {
    return 'pong\n'
});

export default server
