import {Elastic} from "../client";

export default async function (client: Elastic) {
    return client.ingest.putPipeline({
        body: {
            processors: [
                {
                    remove: {
                        field: [
                            'updated',
                            'tz',
                            'detail',
                            'felt',
                            'cdi',
                            'mmi',
                            'alert',
                            'status',
                            'tsunami',
                            'net',
                            'code',
                            'ids',
                            'sources',
                            'types',
                            'nst',
                            'dmin',
                            'rms',
                            'gap',
                            'magType',
                            'title',
                        ],
                        ignore_missing: true
                    },
                },
                {
                    "date": {
                        "field": "time",
                        "formats": ["UNIX_MS"],
                    }
                },
                {
                    remove: {
                        field: ['time']
                    }
                },
                {
                    "rename": {
                        "field": "latitude",
                        "target_field": "coordinates.lat"
                    }
                },
                {
                    "rename": {
                        "field": "longitude",
                        "target_field": "coordinates.lon"
                    }
                },
            ]
        },
        id: 'earthquake_pipeline',
    });
}
