const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())
app.use(express.json())

let users = [{
    id: 1,
    name: "Maria Duarte",
    avatar: "https://avatars.githubusercontent.com/u/107371314?v=4",
    city: "Ponta Grossa"
}]

app.route('/api').get((req,res) => res.json({
    users
}))

app.route('/api/:id').get((req,res) => {
    const userId = req.params.id

    const user = users.find(user => Number(user.id) === Number(userId))

    if(!user){
        return res.json('User nor found!')
    }
    res.json(user)
})

app.route('/api').post((req,res) => {
    const lastId = user[users.length - 1].id
    users.push({
        id: lastId + 1,
        name: req.body.name,
        avatar: req.body.avatar,
        city: req.body.city
    })
    res.json('Saved user')
})

app.route('/api/:id').put((req,res) => {
    const userId = req.params.id

    const user = users.find(user => Number(user.id) === Number(userId))

    if(!user) {
        return res.json('User nor found!')
    }

    const updateUser = {
        ...user,
        name: req.body.name,
        avatar: req.body.avatar,
        city: req.body.city
    }

    users = users.map(user => {
        if(Number(user.id) === Number(userId)){
            user = updateUser
        }
        return user
    })
    res.json("Update user")
})

app.route('/api/:id').delete((req,res) => {
    const userId = req.params.id
    
    users = users.filter(user => Number(user.id) !== Number(userId))

    res.json('Deleted user')
})