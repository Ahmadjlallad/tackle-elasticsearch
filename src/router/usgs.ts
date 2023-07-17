import {FastifyPluginAsync} from "fastify";
import getData from "../usgs-earthquakes/getData";

const f: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get('/', async (request, reply) => {
        return await getData();
    })
}

export default f;
