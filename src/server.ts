import fastify from "fastify";
import ingestPipeline from "./elastic/earthquake/ingestPipeline";
import createIndex from "./elastic/earthquake/createIndex";
import USAGSEarthquakes from './router/usgs';

const server = fastify({logger: true});

server.get('/ping', async (request, reply) => {
    return 'pong\n'
});

server.get('/create-ingest', async (request, reply) => {
    return ingestPipeline(server.elastic);
})

server.get('/create-index', async (request, reply) => {
    return createIndex(server.elastic)
})

server.register(USAGSEarthquakes, {prefix: 'usags-earthquakes'})

export default server;
