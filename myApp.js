let express = require('express');
let app = express();

// challenge 1
//console.log("Hello World")

// challenge 2
app.get("/", (req, res) => {
    res.send("Hello Express")})

 module.exports = app;
