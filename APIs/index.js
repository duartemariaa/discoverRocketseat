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



/*app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})*/



//Parâmetros nas requisições

//body params
//app.route('/').get((req, res) => res.send("ola"))

/*app.use(express.json())
app.route('/').post((req,res) => {
    res.send(req.body) //res.send(req.body.nome)
})*/

/*app.use(express.json())
app.route('/').post((req,res) => {
    const {nome, cidade} = req.body
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
})*/



//route params
/*app.route('/').get((req, res) => res.send("hi"))

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))

app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))*/



//query params
//app.route('/').get((req, res) => res.send(req.query))
app.route('/').get((req, res) => res.send(req.query.nome))

app.route('/about/user').get((req, res) => res.send(req.query))
