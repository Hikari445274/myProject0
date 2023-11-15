const express = require('express')
const app = express();
const hello = require('./hello');

app.listen(3304, ()=> {
    console.log(hello.add(26,34))
})