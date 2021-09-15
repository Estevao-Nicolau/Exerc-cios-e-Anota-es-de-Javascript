console.log('Bem vindo a o javascript')
console.log('Isadora')
console.log(` Nico ${1 + 1}`) // a Espressao $ da para colocar valores na Str.
console.log(1 + 1) // assim faz direto int
console.log(12.5 / 10) // Faz direto no flot
console.log(true) // faz no Booll
console.log(null) // o null Não tem nada dentro dele mais existe.
/*
* Object
* Proproedades / Atributos
* Funcionalidades / Métodos

Ex: { propriedade: "Valor"}

*/

// Estrutura dos dados do Object
console.log({
    nome: "Nico",
    idade: 30,
    andar: function(){
        console.log('andar')
    }
})

/* 
* Array  Parece muito com dicionario do Python
    * Uma lista
    * Agrupamento de dado
    
    ["Nico", 30]

*/

console.log(["Nico", 30])

/* Tipos de dados

Conforme o ECMAScript standard temos 9 tipos de dados:

* Data types
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

* Primitivos
    * String
    * Number
    * Boolean
    * undefined
    * Symbol
    * BigInt

* Estruturais
    * Object
    * Array
    * Map
    * Set
    * Date
    * ...
* Function

** Primitivo Estrutural / Structural Root Primitive
    * null
*/

// Variáveis/ Nomes simbólicos para receber algum valor.
// 3 palvras reservadas para criar uma variável
    // var | let | const
// Posso usar no lugar do var o let e a const. Mas a const nao pode mudar a sua aplição. Na maior parte usamos o let e const.
var clima = "Quente"
console.log(clima)
clima = "Frio"  // Trocando o nome da variavel.


/*
## para criar nomes:

* JS é case-sensitive (sensivel ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $ _ 
    * Iniciar com letras
    * Colocar acentos
    * Letras maisculas e minusculas fazem diferença
    
- Não posso:
    * Inicar com numeros
    * Colocar espaços vazios no nome

- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a variavel e ou faz
    * camelCase
    * snake_case
    * Escrever em ingles



*/



// Agrupamento de declaraçoes
  let age, isHuman

  age = 15
  isHuman = True
// multiplos argumentos na função
  console.log(nome, age, isHuman)

// escrita de texto + variaveis

// concatenado valores
console.log('o ' + nome + 'tem' + age + 'anos.')

'interpolando valores com template literals or template strings'
console.log(`o ${name} tem age anos.`)



/* ## Object - Para pegar uma propiedade de um Object é so colocar um ponto na frente e colocar o nome da propiedade EX: console.log(person.age) 
 */
    const person = {
        name: 'Nico',
        age: 30,
        weight: 88.6,
        isAdmin: true
    }

    console.log(person.name)



## Array

const animals = [
    'Lion',
    'Monkey',
    'Cat',
]
/* ## Como acessar os valores no Array// é muito parecido com dicionario do Python 
 */
console.log(animals[0]) // ## Para pegar o primeiro elemento pq começa com 0.
console.log(animals.length) // ## O length acessa o total de elementos no Array.

