// Redis sorted set are like priority queue
import client from "./client.js";

async function init() {
  // await client.zadd(
  //   "test_scores",
  //   10, "Rakesh",
  //   2, "Rajesh",
  //   3, "Ramesh"
  // );

  const response = await client.zrange("test_scores", 0, -1, "WITHSCORES");
  console.log(response,"\n");
  const result = await client.zrank("test_scores","Rajesh")
  console.log(result)
}

await init();
