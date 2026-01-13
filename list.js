import client from './client.js';

async function init() {
    // await client.lpush("messages",4)
    // await client.rpush("messages","end")
    const result = await client.lrange("messages",0,-1);
    console.log(result) // return list
}

await init()