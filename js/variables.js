//var & let & const
var clima = "Quente"
clima = "Frio"
console.log(clima)

//Tipos Dinâmicos

let clim = 0
console.log(typeof clim)

//Scope e var

{
    let x = 0
    console.log(x)
}

console.log('>existe x antes do bloco?', x)
{
   var x = 0 //var é global e local //hosting
}
console.log('>existe x depois do bloco?', x)

//Scope let e const


{
   let y = 0 //const e let são locais, só funcionam dentro do scope
   console.log('>existe y?', y)
}
//console.log('>existe y depois do bloco?', y)