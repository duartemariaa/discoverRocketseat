const url = "http://localhost:5500/api"
//GET
function getUsers() {
    axios.get(url)
    .then(response => {
        //console.log(response.data)
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}
//getUsers()



//POST //error
function addNewUser() {
    axios.post(url, newUser)   
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}


//GET with params
function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userId.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

const newUser = {
    name: "Olivia Zars",
    avatar: "htttp://lorempixel.com/400/200",
    city: "Rio de Janeiro"
}


//PUT
function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Olivia Zars",
    avatar: "htttp://lorempixel.com/400/100",
    city: "Rio de Janeiro"
}



//DELETE
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

getUsers()
//addNewUser(newUser)
getUser(1)
//updateUser(1, userUpdated)
deleteUser(1)
