/* 
    *Expressões e Operadores

    -Expressions
    -Operators
        Binary
        Unary
        Ternary
*/

let number = 1

console.log(number + 1)

/* 
    New

    * left-hand-side expression
    * Criar um novo objeto
    
*/

let name = new String('Nicolau')
name.surName = "Brito"
let age = new Number(23)
console.log(name.surName, age) 

let date = new Date('2021-09-15')
console.log(date)


/* 
    Operdores unarios
    typeof
    delete
*/

const person = {
    name: 'Nicolau',
    age: 30
}
delete person.age

console.log(person)

// Operadores Aritimeticos
// multiplicaçao

console.log(3.5 * 5.12)

// divisao

console.log(10 / 100)

// soma

console.log(10 + 10)

// subtraçao

console.log(20 - 20)

// resto da divisao

let remainder
remainder = 11 % 3
console.log(remainder)

// incremento

let increment = 0
increment ++
console.log(increment)
console.log(++increment)

// decremento

let decremt = 0
decremt --
console.log(decremt)
console.log(--decremt)

// exponencial 

console.log(3 ** 2)


// Grouping operator

let total = (2 + 3) *5
console.log(total)

let total2 = "Alo alo" + "Nicolau"
console.log(total2)
 

// Operadores de comparação

// Irá comprarar valores e retornar um Boolean como resposta a comparação 

let one = 1
let two = 2 

// ==       igual a 

console.log( two == 1)
console.log( one == "1")

/* !=       diferente de 
console.log(one != two)
console.log(one != 1)
console.log(one != "1") */

// ===      estritamente igual a 

console.log(one === "1")
console.log(one === 1)

// !==      estritamente igual a 

console.log(two !== "2")
console.log(two !== 2)
 

// >    Maior que 
console.log(one > two)

// >=   Maior igual a 

console.log(one >= 1)
console.log(two >= 1)

// <        menor que 

console.log(one < two)

// <=       Menor igual a 

console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0) 

// Operadores de atribuiçao (Assignment)
let x


// assignment
x = 1

// addition assignment

x += 2

// subtraction assignment

x *= 2

//  division assignment

x /= 2

// remainder, exponetiation

x %= 2 
x **= 2 


// Operadores logicos (logical operators)

// -2 valores booleanos, quando verificados
// resultara em verdadeiro ou falso

let pao = true
let queijo = false 


// and &&

console.log(pao && queijo)

// or ||

console.log(pao || queijo)

// Not ! 

console.log(!pao)  // faz a troca de verdadeiro para falso e falso para verdadeiro

// Operador Condicional (Ternario)

// Condiçao entao valor 1 se nao valor 2
// condition ? value1 : value2

// Exeplos 
// Cafe da manha top

let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Cafe da manha top' : 'Cafe da manha lixo'

console.log(niceBreakfast) 

// maior de 18

let age = 16

const canDrive = age >= 18 ? 'can drive' : "can't drive"

console.log(canDrive)

// Operador de String (String operator)

// comparison (comparaçao)

console.log('a' == 'a')

// concatenation (concatenaçao)


// Retorna a uniao de duas Stings
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')

// Type conversion (typecasting) vs Type coersion

console.log(Number('9') + 5)

/* 
    #Falsy
    -Quanto um valor é considerado false em contextos onde booleano é obrigatorio ( condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    Nan
*/

console.log(0 ? 'vedadeiro' : 'falso')  // coloquei o 0 como exemplo, para que o javascrept tranforme em false.

/* 
    #TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatori ( condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log("0" ? 'vedadeiro' : 'falso') // coloquei o 0 na String como exemplo, para que o javascrept tranfotme em verdadeiro

/* 
    Operator precedence
        Precendecia de operadores

    * grouping                   ()
    * negaçao e incremento       ! ++ --
    * multiplicação e dicisao    * /
    * adiçao e subtraçao         + -
    * relacional                 < <= > >=c
    * igualdade                  == != === !==
    * and                        &&
    * or                         ||
    * condicional                ?:
    * assignment (atribuiçao)    = += -= *= %=
    
*/

console.log()
