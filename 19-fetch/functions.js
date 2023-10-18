/**
 * Esta funcion recorre un array y renderiza un li por cada elemento
 * @param {*[]} array 
 * @param {*} contendor 
 */

export function createItemList(array, contendor){
  array.forEach(producto => {
    contendor.innerHTML += `<li> ${producto.id}-${producto.title} </li>`
  })
}

