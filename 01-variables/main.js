
// javascript - comentario de una sola linea

/*Comentario multilinea */


// Interaccion 
// alert('Hola. Como estan?') // sentencia 
// console.log('Imprimir un mensaje en la consola') 
// prompt('ingrese su numbre')


// Tipos de Datos: string, number, boolean, undefined, null

// Variables 
let first_name = "Mathias" //  string
// let first_name = "enzo" //  string
first_name = 'Marcos' // string
first_name = 2 // number 

let last_name

console.log(last_name);
last_name = 'Barbosa'
console.log(last_name);
console.log(first_name);

// first_name = prompt('ingrese su numbre')
console.log("Hola, buen dia" + " " + first_name);
console.log('Hola, buen dia ' + first_name);
console.log(`Hola, buen dia ${first_name}`);

// var age = 23
// var age = 30

// console.log(age);

const fecha_nacimiento = 1900
console.log(fecha_nacimiento); 

// operadores 
// let a = '10'
// let b = '20'
let a = "10"
let b = 20



console.log(typeof a);
console.log(typeof b);
let resultado = a + b
console.log(`el resultado de ${a} + ${b} es: ${resultado}`  );


// Calculadora de edad:
// Pregunta al usuario su año de nacimiento y muestra su edad actual utilizando la función prompt.
// let anio_nacimiento = parseInt( prompt('ingresar el año de nacimiento') )
// console.log(typeof anio_nacimiento);
// const anio_actual = 2023
// let resultadoFechas =  anio_actual - anio_nacimiento // asdasdas NaN  
// console.log(`Actualmente tenes ${resultadoFechas}`);200


// metodos para los datos primitivos
let str = `Hola`;

console.log(str.length );
// el primer carácter
// alert( str[0] ); // H
// alert( str[str.length - 1] ); // a
// alert( str.at(0) ); // H


let texto = 'Que lindo es JavaScript';

alert(texto.indexOf('javascript')); // 0, ya que 'Widget' es encontrado al comienzo
alert(texto.indexOf('widget')); // -1, no es encontrado, la búsqueda toma en cuenta minúsculas y mayúsculas.

alert(texto.indexOf('id')); // 1, "id" es encontrado en la posición 1 (..idget con id)

alert(texto.includes('Widget')); // false

alert(texto.includes('es')); // true

let nombre = prompt('ingresar el nombre')

console.log(`hola ${nombre}`);
console.log(nombre);

nombre = nombre.toUpperCase().trim()

console.log(nombre);