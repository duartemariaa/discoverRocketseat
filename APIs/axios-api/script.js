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
getUsers()



//POST
function addNewUser() {
    axios.post(url, {
        name: "Olivia Zars",
        avatar: "htttp://lorempixel.com/400/200",
        city: "Rio de Janeiro"
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}
addNewUser()
