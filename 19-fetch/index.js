// console.log(fetch('https://fakestoreapi.com/products')); Promise




// fetch('https://fakestoreapi.com/products')
//   .then( response => response.json() )
//   .then(data => {createItemList(data)})
//   .catch( err => console.log(err))

// const productos = [{item1}, {item}]

// productos.forEach(producto =>)

// const productos = [
//   {
//     id:1,
//     title: 'Monitor'
//   },
//   {
//     id:2,
//     title: 'Teclado'
//   }

// ]

// createItemList(productos)

// fetch('./productos.json')
//   .then(response => response.json())
//   .then(data => console.log(data))

import { getProducts } from "./services.js"
import { createItemList } from "./functions.js"

const ul = document.querySelector('#list_products')


getProducts('./productos.json')
  .then(response => response.json())
  .then(data => createItemList(data, ul))