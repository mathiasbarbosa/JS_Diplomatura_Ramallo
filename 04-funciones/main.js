// Declarar una funcion

function saludar() {
    // el cuerpo de la funcion o las instrucciones que va a realizar
    console.log('Hola, cuidado con los mics');
}

// llamar a la funcion  - invocar a la funcion 
// saludar()
// saludar()

// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');
// console.log('Hola, cuidado con los mics');

// for (inicializacion, condicion, incremento){

// }

// for(let incremento = 0; incremento <= 10; incremento++ ){
//     console.log('Hola, cuidado con los mics ' + incremento);
// }

// for(let incremento = 0; incremento <= 10; incremento++ ){
//     console.log('Hola, cuidado con los mics ' + incremento);
// }

// for(let incremento = 0; incremento <= 10; incremento++ ){
//     console.log('Hola, cuidado con los mics ' + incremento);
// }

// for(let incremento = 0; incremento <= 10; incremento++ ){
//     console.log('Hola, cuidado con los mics ' + incremento);
// }



function tablaDelUno(){
    for(let incremento = 1; incremento <= 10; incremento++ ){
        console.log('Hola, cuidado con los mics ' + (incremento * 1));
    }
}

// tablaDelUno()
// tablaDelUno()
// tablaDelUno()



// function multiplicar_hasta(hasta, tabla) {
//     for(let incremento = 1; incremento <= hasta; incremento++ ){
//         console.log('Hola, cuidado con los mics ' + (incremento * tabla));
//     }
// }

// multiplicar_hasta(40,2)
// multiplicar_hasta(15)
// multiplicar_hasta('sdasdas') // se rompe

// let resultado = 0
// * Devolver dato de una funcion
console.log(suma(5, 10));

function suma(a, b){
    let resultado =  a + b
    // console.log(`El resultado es ${resultado}`);
    return resultado
    alert('Esto no se va a ejecutar')
}

console.log(suma(5,6));
let resultado_suma = suma(4,10)
console.log(resultado_suma);
suma(5,6)


// * funcion anonima
// sumar(10,5)

const sumar = function (a, b){
    let resultado =  a + b
    // console.log(`El resultado es ${resultado}`);
    return resultado
    alert('Esto no se va a ejecutar')
}

console.log(sumar(10,20));

// funciones flechas
// () => {

// }

const multiplicar = (a,b) =>  a * b ;

// const restar = a => a - 10

// saludo()

const saludo = (texto,nombre='cosa' ) => {
    // let nombre = 'Juan'
    let mail = 'juan@example.com'
    let saludo = 'Hola ' + nombre + texto

    return saludo
}


console.log(multiplicar(5,2));

console.log(saludo());
console.log(saludo('Juan'));

function es_par(callback, callbackError){
    let num1 = Number(prompt('Ingressa un numero'))  
    if(num1 % 2 == 0){
        callback()
    }else{
        callbackError()
    }
}

function b(){
    console.log('hola, soy un callback')
}

function caso_exitoso() {
    alert('el numero es par')
}

function caso_fail() {
    alert('el numero es impar')
}


// es_par(caso_exitoso, caso_fail)
// es_par(function(){
//     alert('el numero es par')
// }, function(){
//     alert('el numero es impar')
// })
// es_par( () => console.log('el numero es par'), () => console.log('el numero es impar'))