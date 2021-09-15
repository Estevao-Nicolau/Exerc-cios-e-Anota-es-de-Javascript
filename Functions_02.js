// function expression
// function anonymous

// parametros (parameters)
const sum = function(number1, number2){
    console.log(number1 + number2)
    let total = number1 + number2
    return total
}

let number11 = 34
let number22 = 26
sum(2, 3) // arguments - argumentos 

console.log(`o numero 1 é ${number11}`)
console.log(`o numero 2 é ${number22}`)
console.log(`A soma é  1 é ${sum(number11, number22)}`)
console.log(total)

// Funçao é um liquidificador

 function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo) 

// function scope

let subject = 'Create video'

function createThink(subject) {   // Se nao tiver parametro ja muda o caso 
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))


// function hoisting

sayMyName()

function sayMyName() {
    console.log('Nicolau')
}


// Arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Isadora')

// callback function

function sayMyName(name) {
    console.log('Antes de executar a funcao callback')

    name()

    console.log('Depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

/* 
    Function() constructon

     * expressão new
     * criar um novo objeto
     * this Keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const nico = new Person('nico')
const Isa = new Person('Isa')
console.log(nico.walk())
console.log(Isa.walk())

/* 
    Prototype
        * Prototype-based language
        * Prototype chain
        * __proto__
*/


