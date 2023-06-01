// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Item Name"><input type="text" name="number" placeholder="Item Quantity"><button type="submit">Submit</button></form>')

});

app.post('/product',(req, res)=>{
    console.log(req.body);
    res.redirect('/add-product');
});

app.use('/',(req, res, next)=>{
    // console.log("Middleware 2 working");
    res.send('<h1>This is Express Document</h1>')

});

// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);