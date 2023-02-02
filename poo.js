/*
Objetos

Classes

Classes em JS
    syntactical sugar
    prototype

Herança
*/ 

//Escapsulamento
class Poligono {
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }
    get area() {
        return this.#calculaArea()
    }
    #calculaArea() {
        return this.altura * this.largura
    }
}

let poligono = new Poligono(50, 60)
console.log(poligono)
console.log(poligono.area)


//polimorfismo
class Atleta {
    peso;
    categoria;
    constructor(peso){
        this.peso = peso
    }
    definirCategoria() {
        if(this.peso <= 50){
            this.categoria = 'infantil'
        }
        else if (this.peso <= 65) {
            this.categoria = 'juvenil'
        }
        else {
            this.categoria = 'adulto'
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if(this.peso <= 54) {
            this.categoria = 'pluma'
        }
        else if (this.peso <= 60) {
            this.categoria = 'leve'
        }
        else if (this.peso <= 75) {
            this.categoria = 'meio-leve'
        }
        else {
            this.categoria = 'pesado'
        }
    }
}


//Abstração
class Parafuso {
    constructor() {
        if(this.constructor === Parafuso)
        throw new Error('Classe abstrta não pode ser instânciada')
    }
    get tipo () {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() { super() }
    get tipo(){
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() { super() }
    get tipo(){
        return 'philips'
    }
}

class Allen extends Parafuso {}
//criar e usar
//new Parafuso() //Classe abstrta não pode ser instânciada
let fenda = new Fenda() 
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo)