const http = require('http');
const express = require('express');


const app = express();

app.use((req, res, next)=>{
    console.log("Middle ware working");
    next();
})

app.use((req, res, next)=>{
    console.log("Middleware 2 working");
    res.send('<h1>This is Express Document</h1>')

})

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);