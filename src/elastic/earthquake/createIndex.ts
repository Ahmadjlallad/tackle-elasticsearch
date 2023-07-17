import {Elastic} from "../client";
import {RequestParams} from "@elastic/elasticsearch";

export default async function (client: Elastic) {
    const request: RequestParams.IndicesCreate = {
        index: 'earthquakes',
        body: {
            "mappings": {
                "properties": {
                    "@timestamp": {
                        "type": "date"
                    },
                    "coordinates": {
                        "type": "geo_point"
                    },
                    "depth": {
                        "type": "float"
                    },
                    "mag": {
                        "type": "float"
                    },
                    "place": {
                        "type": "text",
                        "fields": {
                            "keyword": {
                                "type": "keyword"
                            }
                        }
                    },
                    "sig": {
                        "type": "short"
                    },
                    "type": {
                        "type": "keyword"
                    },
                    "url": {
                        "enabled": false
                    }
                }
            },

        },
    }
    return client.indices.create(request);
}
