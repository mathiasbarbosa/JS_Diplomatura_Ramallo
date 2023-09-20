// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }


// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }


// for (let i = 0; i < 15; i++) {
//   console.log(i);
// }


// for (let i = 0; i < 25; i++) {
//   alert(i)  
// }

function repetirLog(n, operacion){
  for (let i = 0; i < n; i++) {
    operacion(i)
  }
}

// repetirLog(5, console.log)
// repetirLog(5, (i) => {
//   console.log(`Hola visitante numero ${i}`);
// })

// repetirLog(10)

// let numeros = [1,2,3,4,5,6,7,8,9,10]
// numeros.forEach((input) => {
//   console.log(`el valor es ${input}`);
// })


// function mayorQue(n) {
//   return m => m > 5;
//   // return 11 => 11 > 10;
// }
// let mayorQue10 = mayorQue(10);
// console.log(mayorQue10(11));
// // → true

// let mayorQue5 = mayorQue(5); (m) => m > 5 
// console.log(mayorQue5(10)); (10) => 10 > 5 true
// → true

const personas = [
  { id: 1, nombre: 'Juan', edad: 30 },
  { id: 2, nombre: 'María', edad: 25 },
  { id: 3, nombre: 'Carlos', edad: 35 },
  { id: 4, nombre: 'Ana', edad: 28 },
  { id: 3, nombre: 'Carlos', edad: 60 },
  { id: 5, nombre: 'Luis', edad: 40 },
];

// for (const persona of personas) {
//   console.log(persona);
// }

function filtrar(array, fn){
  let pasaron = []
  for (const element of array) {
    if(fn(element)){
      pasaron.push(element)
    }
  }
  return pasaron
}

// function treadcional
console.log(
  filtrar(personas, (persona) => persona.edad > 34)
);
console.log(
  filtrar(personas, (persona) => persona.edad > 24)
);
console.log(
  filtrar(personas, (persona) => persona.nombre  === 'Carlos')
);

let nuevoAreglo = personas.filter( (persona) => persona.id === 1 )

console.log(nuevoAreglo);