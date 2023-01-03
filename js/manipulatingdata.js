//prototype
//prototype-based language
//prototype chain
//__proto__

//type conversion/typecasting vs type coersion

console.log('9' + 5)
console.log(Number('9') + 5)

//strings and numbers

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))



let word = "Paralelepipedo"
console.log(word.length)
number = 1234
console.log(String(number).length)



number = 322.475536
console.log(number.toFixed(2).replace(".",","))


word = "Programar é muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

let phrase = "I'm living a love"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())


phrase = "I'm living"
console.log(phrase.includes("a love"))


myArray = new Array('a', 'b', 'c')
console.log(myArray)


console.log([
    "a",
    {type: "array"},
    function(){return "alo"}
].length)



word = "manipulating"
console.log(Array.from(word))



let techs = ["html", "css", "js"]
techs.push("nodejs")
techs.unshift("sql")
//techs.pop()
//techs.shift()
//console.log(techs.slice(1, 2))
//techs.splice(1, 2)
let index = techs.indexOf('css')
techs.splice(index, 1)

//console.log(index)
console.log(techs)


