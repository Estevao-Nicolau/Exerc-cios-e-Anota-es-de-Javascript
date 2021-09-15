/*  
    Type converion (typecasting) vs Type coersion
    * Alteração de um tipo de dado para outro tipo
*/

// Ex: 
 console.log(Number('9' + 5)) 

/* 
    -Mnipulando Strings e Números
*/

// -Transformar String em Número e Número em String
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number)) 

// -Contar quantos carcteres tem uma palavra e quantos digitos tem um número

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(string(number).length) 

// -Trasnformar um número quebrado com 2 casas decimais e trocar ponto por virgula

let number = 456.123456645
console.log(number.toFixed(2).replace(".", ","))

// -Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

let word = "Programar é vida"
console.log(word.toUpperCase()) // Caixa alta
console.log(word.toLowerCase()) // Caixa baixa 

// - Separe um texto que contem espaços, em um novo array onde cada texto é uma posição dop array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver programando!!"
let myArray = phrase.split(",")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())
 
// -Verificar se o texto contém a palavra Amor

let phrase = "Eu estudo Python e JavaScript!" 
console.log(phrase.includes("Python"))  // Verifica se a letra e Caixa alto ou baixa, para achar a palavra.

// -Criar Array com construtor
let myArray = new Array('a', 'b', 'c', 'd')
console.log(myArray)

// -Contar elemetos de um array
console.log([
    "a",
    {type: "array"},
    function() { return "ola"},
].length)  // Se quiser acessar um elemento usa [].


// -Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))


let techs = ["html", "css", "js"]

// -adicionar um item no fim
techs.push("nodejs")
// -adicionar no começo
techs.unshift("sql") 
// -remover do fim
techs.pop()
// - remover do começo
techs.shift()
// -pegar somente alguns elementos do array
console.log(techs.slice())
// -remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2)
// -encontrar a posição de um elemento no array
let positio = techs.indexOf('js')
techs.splice(positio, 1)

console.log(techs)
