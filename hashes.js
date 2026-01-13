import client from './client.js';

// redis hashes are like hashmap data structure
async function init() {
    await client.hset('bikes',{
        'model':"model1",
        "type":"hero bike",
        "price":50000
    })

    // const result = await client.hget("bikes","price")
    const results = await client.hgetall("bikes");
    console.log(results); // returns object
}

await init()