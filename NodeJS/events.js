/*const { EventEmitter } = require('events')
const ev =  new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('Eu ouvi você ', message)
})

ev.emit('saySomething', "Maria")
ev.emit('saySomething', "Joao")*/

//once - executa apenas uma vez

///////////////////////////////////////////

const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', () => console.log(`Eu ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')