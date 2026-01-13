import client from './client.js';

async function init() {
    await client.set("msg:1","Hello from node.js");
    await client.expire("msg:1",10);
    const user1 = await client.get("user:1")
    console.log("user:1",user1)
}

await init()