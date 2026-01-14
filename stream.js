// stream are append in data structure
import client from "./client.js";

async function init() {
//   await client.xadd("race:france","*","rider","Akash","speed","30.2","position","2")
    // await client.xadd("race:france","*","rider","Aman","speed","30.2","position","2")
  const res = await client.xrange("race:france",'-','+')
  await client.xdel("race:france",res[0][0]);
  const res2 = await client.xrange("race:france",'-','+')
  console.log(res2) // returns 2d array

  
}

await init();
