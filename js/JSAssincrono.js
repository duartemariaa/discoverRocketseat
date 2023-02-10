/*Promise
- a promessa de que algo irá acontecer
- poderá dar certo ou errado, mas irá acontecer
*/

let accept = false //true

console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
    if(accept){
        return resolve('pedido aceito!')
    }
    return reject('pedido negado!')
})

console.log('aguardando')
promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizada'))


//promisse with fetch
//fetch('https://api.github.com/users/duartemariaa')
/*.then(response => {
  response.json()
  .then(data => console.log(data))
})*/

/*fetch('https://api.github.com/users/duartemariaa')
.then(response => {
  response.json()
  .then(data => {
    fetch(data.repos_url)
      .then(res => res.json()
        .then(d => console.log(d)))
  })
})*/

fetch('https://api.github.com/users/duartemariaa')
.then(response => response.json())
.then(data => fetch(data.repos_url))
.then(res => res.json())
.then(d => console.log(d))
.catch(err => console.log(err))



//biblioteca axios
/*import axios from "axios";
axios.get('https://api.github.com/users/duartemariaa')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => console.log(error))*/

/*import axios from "axios";
axios
  .get('https://api.github.com/users/duartemariaa')
  .then(response => {
    const user = response.data

    return axios.get(user.repos_url)
})
.then(repos => console.log(repos.data))
.catch(error => console.log(error))*/

import axios from "axios";
axios
  .get('https://api.github.com/users/duartemariaa')
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error))



//promise all
import axios from 'axios';

Promise.all([
  axios.get('https://api.github.com/users/duartemariaa'),
  axios.get('https://api.github.com/users/duartemariaa/repos')
])
.then (responses => {
  console.log(responses[0].data.login)
  console.log(responses[1].data.length)
})
.catch(error => console.log(error.message))


//async/await
/*const promessa = new Promise(function (resolve, reject) {
    return resolve('ok')
  })
  
  async function start(){
    try{
      const result = await promessa
      console.log(result)
    }catch(error){
      console.log(error)
    }finally {
      console.log('rodar sempre')
    }
  }
start()*/



//async/await with fetch
/*async function start() {
  try {
    const response = await fetch("https://api.github.com/users/duartemariaa");
    const user = await response.json();
    const reposResponse = await fetch(user.repos_url);
    const repos = await reposResponse.json();
    console.log(repos);
  }catch(error) {
    console.log(error)
  }
}
start()*/

async function start() {
    const user = await fetch("https://api.github.com/users/duartemariaa").then(r => r.json())
    const repos = await fetch(user.repos_url).then(r => r.json());
    console.log(repos);
}
start().catch(error => console.log(error))



//async/await with axios
import axios from "axios"

async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/duartemariaa')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  }catch(error){
    console.log(error)
  }
}

fetchRepos()
  