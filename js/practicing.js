
var name
name = "Mary"

let age, isHuman

age = 18
isHuman = true

console.log(name, age, isHuman)

console.log(' '+name+' tem '+age+' anos.')

//template literals or template strings
console.log(`${name} tem ${age} anos.`)

const person = {
    name: 'Maria',
    age: 22,
    weight: 52.3,
    isAdmin: true
}
console.log(person.name, age)
console.log(`${person.name} tem ${person.age} anos.`)

const animals = [
    'Lion', 
    'Monkey', 
    {
        name: 'Cat',
        age: 3
    }
]
console.log(animals[0])
console.log(animals.length)
console.log(animals[2].name) 

///////////////////////////////////////////////////////
let weight
console.log(typeof weight)


const student = {
    name: "Maria",
    age: 22,
    weight: 52.3,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

let students = [student]
console.log(students[0])

const john = {
    name: "John",
    age: 30,
    weight: 70.3,
    isSubscribed: true
}

//students = [student, john]
//or
students[1] = john
console.log(students)

console.log(a)
var a = 1
