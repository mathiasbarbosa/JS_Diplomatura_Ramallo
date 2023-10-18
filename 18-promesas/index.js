// Promise()

// (resolve, reject) => {}

// const promesa = new Promise((resolve, reject) => {
//   let seCumplio = true
//   setTimeout(() => {
//     if (seCumplio) {
//       resolve('Se cumplio la promesa')
//     } else{
//       reject( new Error('no se cumplio la promesa'))
//     }
//   }, 2000)
// })

// console.log(promesa);


// promesa
//   .then(res => console.log(res))
//   .catch(err => console.log(err) )
// console.log('esto se va a seguir ejecutando');
// Promesa en estado pendiente
// promesa

// console.log(fetch('https://fakestoreapi.com/products/1'));
// fetch('https://fakestoreapi.com/productsasjdkalsfjalf')
//   .then(res => {
//       if (res.status == 404) {
//         throw new Error('Error en la solicitud')
//       }
//     }
//   )
//   .catch(err => console.log('salio por el error ' + err))

// Ejemplo con un set de datos
const productos = ['Item 1', 'item 2', 'item 3']


const cargarDatosServidor = (datos) => {

  return new Promise((resolve, reject) => {
    let seCumplio = Math.random() < 0.5 // true o falso
    console.log(seCumplio);
    setTimeout(() => {
      if(seCumplio && datos) resolve({mensaje: 'Se cumplio la promesa', datos})
      reject(new Error('no se cumplio la promesa'))
    }, 2000)
  })

} 

const frutas = ['🍊','🍎','🍇','🍓','🍒']

cargarDatosServidor(frutas)
  .then((response) => console.log(response) ) // ! Podamos pintar la informacion en el HTML
  .catch((err) =>  console.log(err) )