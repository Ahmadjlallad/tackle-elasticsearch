import {EnvSchemaData} from "env-schema";
import {FastifyEnvOptions} from "@fastify/env";

const schema: EnvSchemaData = {
    type: 'object',
    required: ['PORT', 'ELASTIC_USERNAME', 'ELASTIC_PASSWORD', 'ELASTIC_URI'],
    properties: {
        PORT: {
            type: 'number',
            default: 3000
        },
        ELASTIC_USERNAME: {
            type: 'string'
        },
        ELASTIC_PASSWORD: {
            type: 'string'
        },
        ELASTIC_URI: {
            type: 'string'
        }
    }
}
const options: FastifyEnvOptions = {
    schema,
    dotenv: true,
    data: process.env
}

export default options;
