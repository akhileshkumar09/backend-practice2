// assignment-1 : count the number of requests.
const express = require('express')
let requestCount = 0;
const app = express();

app.use((req, res, next) =>{
    requestCount++;
    console.log('Requested Count : ' , requestCount);
    next();
})

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
