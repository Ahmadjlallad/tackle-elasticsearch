import {Client} from "@elastic/elasticsearch";

const client = new Client(
    {
        node: process.env.ELASTIC_URI,
        auth: {
            username: process.env.ELASTIC_USERNAME,
            password: process.env.ELASTIC_PASSWORD
        }
    }
)
export default client;
