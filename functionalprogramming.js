//imperativo-declarativo
//imperativo: faça da seguinte forma
let number = 2
function square() {
    return number*number
}
number = square()

//declarativo: o que fazer e não como fazer
const square = n => n*n



//imutabilidade
//exemplo em JS
const cart = {
    quantity:2,
    total:200
}
cart.quantity = 3 //no
const newCart = {...cart, quantity: 3} //yes

//exemplo em reactJS
const [amount, setAmount] = useState(0)
amount = 2 //no
setAmount(2) //yes



//Stateless
//stateful function
let number2 = 2
function square() {
    return number2*number2
}
number2 = square()

//stateless function
const square = n => n*n



//Caracteristicas das Funções
//Funções independentes
const random = (number, Math) => Math.floor(Math.random() * number)
//recursive
//find the factorial of a number
const factorial = x => {
    //if number is 0
    if(x === 0){
        return 1;
    }
    return x * factorial(x-1)
}


//Funções Puras

//função impura
function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
    //está dependendo de dado externo que não foi passado como parâmetro
}

let person = {
    name:'Rafael Camarda',
    age: 'jovem'
}
function changeName(name) {
    person.name = name //está alterando um dado externo
}

//função pura
const calculateCircumference = function (pi, radius) {
    return pi * (radius + radius)
}

const calculateCircumference = (pi, radius) => pi * (radius + radius) //com arrow function

const changePersonName = (person, name) => ({...person, name})


//first-class function
const sayMyName = () => console.log('Maria')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))


//higher-order function
//exemplo com .map() JS
const numbers = [2, 4, 8, 16]
const square = n => n*n
const squaredNumber = numbers.map(square)

//exemplo de um retorno de função
//(currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)

pause(600)( () => console.log('waiting 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1s'))


//composição de funções
const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithD = people
      .filter(person => person.startsWith('D'))
      .map(dperson => dperson.toUpperCase())