var redis = require('redis')
const express = require('express')
const app = express()


const port = process.env.PORT
const service = process.env.SERVICE

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



app.get('/', function(req, res){
    console.log("service " + service + "received request")
    res.send("Hello World \n \r");
})
