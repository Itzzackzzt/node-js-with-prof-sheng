var express = require("express");
const path =  require("path");

var app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.get("/zack", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'zack.html'));
});


app.listen(3000, () => {
    console.log("Poop in my butt")
    
});