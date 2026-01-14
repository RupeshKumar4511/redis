import express from 'express';
import fetch from 'node-fetch';
import client from './client.js';


const app = express()
app.get('/',async(req,res)=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos',{
        method:'GET',
        headers:{'Content-Type':"application/json"}
    });
    const response = await data.json()
    const cachedValue = await client.get("todos");
    if(cachedValue){
        console.log("from cached value")
         return res.send(cachedValue);

    }else{
        console.log("hi");
        await client.set("todos",JSON.stringify(response));
        await client.expire("todos",60*5)
        return res.json(response);
    }
    
    

    
})

app.listen(3000)