// estructuras de control que permiten ejecutar repetidamente un bloque de código 
const frutas = ['🍎','🍏','🍇','🍓','🍒']

// for (let i = 0; i <= 10; i++ ) {
//     console.log(`Hola usuario numero ${i}`);
// }

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element);
    
}

// let numero = Number(prompt('Adivina el numero'))
// let numero_random = 7


// while( numero !== numero_random){
//     alert('no adivinaste el numero')
//     numero = Number(prompt('Adivina el numero'))
// }
// console.log('continua la ejecucion');

let agregar_fruta = confirm('queres agregar alguna fruta')

while ( agregar_fruta === true) {
    let fruta = prompt('Que fruta te gustaria agregar')
    if (fruta !== '') {
        frutas.push(fruta)
        console.log(frutas);
    }
    agregar_fruta = confirm('queres agregar alguna fruta')
}

console.log('continua la ejecucion');


// Pide al usuario que ingrese su nombre utilizando un ciclo do-while. Continúa pidiendo el nombre hasta que el usuario ingrese un nombre válido (no vacío).

// let nombre;

// do{
//     nombre = prompt('decime tu nombre')
// }while(nombre === '')


let numero = 0

// while (numero < 10) {
//     console.log(numero);
//     if (numero === 5) {
//         break
//     }
//     // numero = numero + 1
//     numero++
// }

