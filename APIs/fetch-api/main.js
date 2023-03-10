const url  = "http://localhost:5500/api"
//GET
function getUsers(){
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.log(error))
}
//GET com parâmetros
function getUser(){
    fetch(`${url}/1`)
        .then(response => response.json())
        .then(data => {
            //return renderApiResult.textContent = JSON.stringify(data.name)
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.log(error))
}


//POST //error
function addUser(newUser){
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.log(error))
}

const newUser = {
    name: "Olivia Zars",
    avatar: "htttp://lorempixel.com/400/200",
    city: "Rio do Sul"
}

//addUser(newUser)

getUsers()
getUser()



//PUT //error
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

const updatedUser = {
    name: "Marcelo Clovis",
    avatar: "htttp://lorempixel.com/400/200",
    city: "Recife"
}

updateUser(updatedUser, 1)



//DELETE
function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

//deleteUser(1)