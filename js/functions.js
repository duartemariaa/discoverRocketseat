function createPhrases(){
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}

createPhrases()

console.log('fim do programa')




//function expreession //function anonymous 
const sum = function(number1, number2){ 
    let total = number1+number2
    return total
}
sum(2, 3)
sum(4, 7)

//these variables are different
let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`o númerio 1 é o ${number1}`)
console.log(`o númerio 2 é o ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)


//function scope

let subject 

function createThink(){
    subject = 'study'
    return subject
}
console.log(subject)
console.log(createThink())
console.log(subject)


//function hoisting

/*sayMyName()

function sayMyName(){
    console.log('Maria')
}

//erro
sayMyName()
const sayMyName = function(){
    console.log('Maria')
}*/


//arrow function
/*const sayMyName = () => {
    console.log('Maria')
}
sayMyName()*/

/*const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Maria')*/



//callback function
function sayMyName (name){
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)


//function constuctor

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " is walking"
    }
}

const mayk = new Person("Maria")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())

let name = new String("Maria")
console.log(name)
