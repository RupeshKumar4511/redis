import client from './client.js';

async function init() {
    await client.sadd("ip",1)
    await client.sadd("ip",2)
    const total = await client.scard("ip");
    console.log(total)
}

await init()