import axios from "axios";

export default async function () {
    const {data} = await axios.get(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson`, {
        headers: {
            'Content-Type': ['application/json', 'charset=utf-8'],
        },
    });


    if (!data?.features?.results) {
        return []
    }

    if (!(data.features.results instanceof Array)) {
        return []
    }

    if (data.features.results)

    return data.features.results.map((results) => ({
            place: results.properties.place,
            time: results.properties.time,
            tz: results.properties.tz,
            url: results.properties.url,
            detail: results.properties.detail,
            felt: results.properties.felt,
            cdi: results.properties.cdi,
            alert: results.properties.alert,
            status: results.properties.status,
            tsunami: results.properties.tsunami,
            sig: results.properties.sig,
            net: results.properties.net,
            code: results.properties.code,
            sources: results.properties.sources,
            nst: results.properties.nst,
            dmin: results.properties.dmin,
            rms: results.properties.rms,
            mag: results.properties.mag,
            magType: results.properties.magType,
            type: results.properties.type,
            longitude: results.geometry.coordinates[0],
            latitude: results.geometry.coordinates[1],
            depth: results.geometry.coordinates[2],
        })
    );
}
