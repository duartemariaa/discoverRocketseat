//selecionando Elementos

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



//Manipulando Elementos
//textContent
const element5 = document.querySelector('h1')
//element5.textContent = "Hello Devs"
//element5.textContent += " Hello Devs"
//console.log(element5)

//innerText
const element6 = document.querySelector('h1')
element6.innerText = " Hello Devs"
console.log(element6)

//innerHTML
const element7 = document.querySelector('h1')
element6.innerHTML = "Hello Devs <smal> !! </smal>"

//value
const element8 = document.querySelector('input')
console.log(element8.value)
element8.value = "outro valor"

//Atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.removeAttribute('class', 'bg header')

//Alterando estilos
const element9 = document.querySelector('body')

element9.style.backgroundColor = "#f9f3D2"
console.log(element9.style.backgroundColor)

//classList
const element10 = document.querySelector('body')

element10.classList.add('active')
console.log(element10.classList)
//element10.classList.remove('active')
element10.classList.toggle('active')


//////////////////////////////////////////////////////////
//Navegando pelos elementos
//parentNode parentElement

const body = document.querySelector('body')
console.log(body.parentNode)
console.log(body.parentElement)

//childNodes children
const el = document.querySelector('body')

console.log(el.childNodes)
console.log(el.children)

//firstChild firstElementChild
console.log(el.firstChild)
console.log(el.firstElementChild)

//lastChild lastElementChild
console.log(el.lastChild)
console.log(el.lastElementChild)

//nextSibling  nextElementSibling
var el2 = document.querySelector('header')
console.log(el2.nextSibling)
console.log(el2.nextElementSibling)

//previousSibling previousElementSibling
el2 = document.querySelector('body script')
console.log(el2.previousSibling)
console.log(el2.previousElementSibling)



//////////////////////////////////////////////////////////
//Criando e adicionando elementos
//createElement
const div = document.createElement('div');
div.innerText = "Hello Devs!"

//append & prepend
const body2 = document.querySelector('body')

//body2.append(div)
//body2.prepend(div)


//Adicionando elementos
//insertBefore
//const body3 = document.querySelector('body')
//const script = body3.querySelector('script')
//body3.insertBefore(div, script)

//after ??
const body4 = document.querySelector('body')
const header2 = body4.querySelector('header')
body4.insertBefore(div, header2.nextSibling)



//////////////////////////////////////////////////////////
//Eventos
function print() {
    console.log('print')
}

//Eventos de teclado
const input = document.querySelector('input')
    //onkeyup - onkeypress 
input.onkeydown = function() {
    console.log('rodei')
}

//Eventos via JS
const h1 = document.querySelector('h1')

h1.addEventListener('mouseover', print)
                            //call function print

//argumento event
input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}













