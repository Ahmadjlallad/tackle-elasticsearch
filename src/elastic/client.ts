import {Client, ClientOptions} from "@elastic/elasticsearch";
import fp from 'fastify-plugin'
import {FastifyPluginAsync} from 'fastify'

export type Elastic = Client;

const esClient: FastifyPluginAsync<ClientOptions> = async (fastify, option) => {
    fastify.decorate('elastic', new Client(option))
}


export default fp(esClient);
