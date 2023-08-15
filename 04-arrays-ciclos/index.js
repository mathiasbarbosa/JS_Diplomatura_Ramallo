// * Arrays: es una estructura de datos que se utiliza para almacenar varios valores/datos
// * Pueden contener diferentes tipós de datos
// * array de string ['Lucas', 'Diego]
// * array mixto [12, true, 'A']


// Como lo decalaramos 
// let letras = []
// console.log(letras);

// letras = ['A', 'B', 'C', 'D', 'E', 'F']

// console.log(letras);

// obtener la cantidad de elementos
// let texto = 'Hola mundo'

// console.log(texto.length);
// console.log(letras.length);


// Obtener un valor del array 

// console.log(letras[0]);
// let a = letras[0]
// modificar un valor del array

// letras[1] = 2

// console.log(letras);

// console.log(letras[6]);
// letras[6] = true
// console.log(letras);
// console.table(letras)
// console.log(letras.at(3));


// Operaciones con arrays 
// Añadir elementos

// const frutas = ['🍎','🍏','🍇','🍓','🍒']
// console.log(frutas);
// frutas.push('🍊') // agregar elementos al final
// frutas.push('🍊', '🍌'); // agregar elementos al final
// console.log('Array modificado ', frutas);


// *eliminar del final
// let fruta = frutas.pop()
// console.log(fruta);
// console.log('Array modificado ', frutas);

// *Agregar al comienzo
// frutas.unshift('🍍')
// console.log('Array modificado ', frutas);

// * eliminar del comienzo
// frutas.shift()
// console.log('Array modificado ', frutas);


// * convertir a array
const text = "12345";
console.log(typeof text);                         // "String"

const letters = Array.from(text);   
console.log(letters);            // ["1", "2", "3", "4", "5"]
// const letters = [...text];     

// const elements = [1, 2, 3];

// elements.push(4, 5, 6);     // Devuelve 6. Ahora elements = [1, 2, 3, 4, 5, 6]
// elements.push([7, 8, 9]);   // Devuelve 7. Ahora elements = [1, 2, 3, 4, 5, 6, [7, 8, 9]]
// console.log(elements);
            //    0  1  2  3  4  5
const elements = [1, 2, 3, 4, 5, 6];

// let nuevo_array = elements.concat(4, 5, 6);     // Devuelve 6. Ahora elements = [1, 2, 3, 4, 5, 6]
// nuevo_array = elements.concat([7, 8, 9]);   // Devuelve 7. Ahora elements = [1, 2, 3, 4, 5, 6, [7, 8, 9]]
// console.log(nuevo_array);
// console.log(elements);

// console.log(elements.splice(2, 4)); // 

// * Separar y unir strings
console.log(elements.join('+'));

console.log("a.b.c".split("."));;   

// console.log(elements.splice(4,1,'a', 'b', 'c')); 
// console.log(elements.toSpliced(4,1)); 
let nuevo_array = elements.toSpliced(4,1)
console.log(nuevo_array);
console.log(elements);

// metodos de busqueda
const frutas = ['🍎','🍏','🍇','🍓','🍒']
console.log(frutas.indexOf('🍓'));
let find_fruta = frutas.indexOf('🍓')
// if ( find_fruta !== -1) {
//     alert(`Tenemos ${frutas[find_fruta]} disponible`)
// }

console.log(frutas.includes('🍓'));
console.log(frutas.includes('🍌'));
