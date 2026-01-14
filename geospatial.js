// Redis geospatial is used to store location in the form of longitude and latitude.

import client from "./client.js";

async function init() {
    await client.geoadd("bikes:rentable",-122.27652,37.805186,'section:1')
    const res = await client.geosearch(
    "bikes:rentable",
    "FROMLONLAT", -122.27652, 37.805186,
    "BYRADIUS", 5, "km",
    "WITHDIST"
    );

console.log(res);



}

await init();
