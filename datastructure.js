//arrays
const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

console.log(pilotos[0])
console.log(pilotos[3])

console.log(pilotos.length) //tamanho array

for(let piloto of pilotos) {
    console.log(piloto)
}

pilotos.push('Alonso')
console.log(pilotos)

const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna) //find a element

pilotos.splice(1,1) //delete element
console.log(pilotos)


//matriz
const students = [['Joseph', 23, 'MG'], ['Briana', 22, 'SP'], ['Priscila', 23, 'PR']]
console.log(students[0][1])


//stack
class Stack {
    constructor(){
        this.data = []
        this.top = -1
    }
    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }
    pop() {
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }
    peek() {
        return this.top >= 0? this.data[this.top] :
        undefined
    }
}

const stack = new Stack()

stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

stack.pop()
console.log(stack.pop())

console.log(stack.peek())


//Queue
class Queue {
    constructor() {
        this.data = []
    }
    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Ariel')

fila.dequeue()
fila.dequeue()
fila.dequeue()
