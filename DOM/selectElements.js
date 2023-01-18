//getElementById() Element
//console.log(document.getElementById('blog-title'))

const element = document.getElementById('blog-title')
console.log(element)

//getElementsByClassName() HTMLCollection
const element2 = document.getElementsByClassName('one')
console.log(element2)

//getElementsByTagName() HTMLCollection
const element3 = document.getElementsByTagName('meta')
console.log(element3)

//querySelector() Element
//const element4 = document.querySelector('meta')
//console.log(element4)

//const element4 = document.querySelector('.one')
//console.log(element4)

const element4 = document.querySelector('[src]')
console.log(element4)

//querySelectorAll() NodeList
const elements = document.querySelectorAll('.one')
console.log(elements)

elements.forEach(el => console.log(el))