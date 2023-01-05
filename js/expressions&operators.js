let number = 1;
(function(){
    console.log('hello')
})()

console.log(number+1)
console.log(++number)
console.log(false? 'hello' : 'nothing')


//new
let name = new String('Maria')
name.surName = 'Duarte'
let age = new Number(22)
console.log(name, age)
console.log(name.surName, age)
let date = new Date('2020-12-01')
console.log(date.__proto__)


//typeof delete
const person = {
    name: 'Maria',
    age: 22
}
delete person.age
console.log(person)


//arithmetic operators
console.log(3.2 * 5.5)
console.log(12 / 2)
console.log(34 + 67)
console.log(34 - 23)
let remainder
remainder = 11 % 3
console.log(remainder)
let increment = 0
increment++
console.log(increment)
let decrement = 0
decrement--
console.log(--decrement)
console.log(7**7)


//grouping operator()
let total = (2+3)*5
console.log(total)

//comparison operators
let one = 1
let two = 2

/*console.log(two == 1)
console.log(one == '1')
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

//strictly equal and strictly different
console.log(one === "1")
console.log(one === 1)
console.log(two !== "2")
console.log(two !== 2)*/



console.log(one > two)
console.log(one >= 1)
console.log(two >= 1)
console.log(one < two)
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

//assigment
x = 1
x += 2 
x -= 1
x *= 2
x /= 2
x %= 2
x **=2
console.log(x)


//logical operators
let bread = true //false
let cheese = true

console.log(bread && cheese)

console.log(bread || cheese)

console.log(!bread)

//conditional operator     //or
const niceBreakfast = bread && cheese? 'Nice coffee' : 'Bad Coffee'
console.log(niceBreakfast)

age = 16
const canDrive = age >= 18? 'can drive' : "can't drive"
console.log(canDrive)

//strings operators
console.log('a' == 'a')

console.log('a' + 'a') //concatena

/*let alpha = 'alpha'
console.log(alpha + 'bet')*/

let alpha = 'alpha'
alpha += 'bet'
console.log(alpha)


//Falsy and truthy

console.log(0 ? 'true' : 'false')
console.log("" ? 'true' : 'false')
console.log(NaN? 'true' : 'false')
console.log(undefined ? 'true' : 'false')

console.log({} ? 'true' : 'false')
console.log([] ? 'true' : 'false')
console.log(1 ? 'true' : 'false')
console.log("0" ? 'true' : 'false')

//Operator precedence

//()  !  ++ -- * / ...

