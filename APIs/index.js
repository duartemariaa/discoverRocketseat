const express = require('express')

const app = express()

app.listen('3000')

/*
app.route('/').get((req,res) => res.send("hello"))
app.route('/sobre').get((req,res) => res.send("hello sobre"))*/



/*app.use(express.json()) //middleware
app.route('/').post((req, res) => res.send(req.body))*/



/*app.use(express.json())

let author = "Maria"

app.route('/').get((req,res) => res.send(author)) //verificando a mudança - get no insomnia

app.route('/').put((req,res) => {
    author = req.body
    res.send(author)
})*/



app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})