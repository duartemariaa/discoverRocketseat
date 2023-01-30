const express = require('express');
const res = require('express/lib/response');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.render("pages/index")
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando")