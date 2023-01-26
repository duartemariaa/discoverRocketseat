//setTimeout rodar uma função depois de X milissegundos
/*const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('Mostrar')*/


//clearTimeout cancelar um timeOut
/*const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)

clearTimeout(timer)*/


//setInterval irá rodar uma função N vezes depois de X milissegundos
/*const timeOut = 1000
const checking = () => console.log('checking!')

setInterval(checking, timeOut)*/


//clearInterval irá cancelar um setInterval registrado
const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 3000)
