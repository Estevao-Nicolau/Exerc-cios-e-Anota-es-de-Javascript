// Control flow

// if....else

let temperatura = 36.5

if (temperatura >= 37) {
    console.log('Febre')
} else if (temperatura < 37.5 && temperatura >= 37) {
    console.log('Temperatura moderada')
}else {
    console.log('Temperatura Normal')
} 

// --->>> Ou fazer Assim <<<---\\

let temperatura = 36.5
let highTemperatura = temperatura >= 37
let mediumTemperaura = temperatura < 37.5 && temperatura >= 37

if (highTemperatura) {
    console.log('Febre')
} else if (mediumTemperaura) {
    console.log('Temperatura moderada')
}else {
    console.log('Temperatura Normal')
} 

// switvh

switch (expression) {
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b': 
        // codigo para expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}  

// Calculadora
 
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break;
    }

    return result
}

console.log(calculate(4, '*', 8))

// throw

function sayMyName(name = '') {
    if (name === ''){
        throw 'Nome é obrigatorio'
    }
    console.log(name)
} 

// try...catch     Capitura erros 
try {
    sayMyName('Nicolau')

} catch(e) {
    console.log(e)
}

console.log(' Apos ao try/catch') 

// Estrutura de repetição
// for
// break - para a execução do loop
// continue = a execução do momento


for(let i = 0; i < 10; i ++) {
    console.log(i)
} 

for(let i = 100; i > 0; i --) {
    console.log(i)
}

for(let i = 10; i > 0; i--) {
    if(i === 5) {
        break;
    }
    console.log(i)
}

 for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }
    console.log(i)
} 


// Estrutura de repetição
// while 


let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}


// for...of

let name = 'Nico'
let names = ['Joao', 'Paulo', 'Pedro']

for(let char of name) {
    console.log(char)

}

for(let name of names) {
    console.log(name)

} 


// for...in

let person = {
    name:'Nicolau',
    age: 30,
    weight: 88.5,
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}  


/* 
    Vamos fortalecer e aplicar os conhecimentos,
    além de aprender truques e dicas para resolver
    os desafios e avançar para o proximo nivel
*/

