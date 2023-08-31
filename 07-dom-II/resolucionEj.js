// 1. Creación de elementos: Crea un script que cree dinámicamente un elemento **`<div>`** con un texto dentro y lo agregue al final del cuerpo del documento.
let div = document.createElement('div')

// div.innerText = 'Con innerText podemos colocar texto dentro del elemento'
// div.innerHTML = '<h1> Con innerHTML creamos texto y etiquetas</h1> '
console.dir(div);
div.textContent = 'Texto creado mediante la propieda textContent'
// let texto = document.createTextNode('Nodo de texto creado con el metodo createTextNode')

// div.appendChild(texto)

document.body.appendChild(div)

// 2. Eliminación de elementos: Crea una lista de elementos y un botón. Al hacer clic en el botón, elimina el primer elemento de la lista.
function eliminarNodo(){
    let ul = document.getElementsByTagName('ul')
    // ul[0].firstElementChild.removeChild()
    ul[0].removeChild(ul[0].firstElementChild)
}


// console.log(ul[0].firstElementChild.removeChild());


// 3. Cambio de atributos: Crea una imagen en tu página web y utiliza JavaScript para cambiar su atributo **`src`** a una imagen diferente.

const img = document.getElementById('img')
// img.src = './P.Redes 1.png'
// img.style.width = '25%'

img.setAttribute('src', './P.Redes 1.png')
// img.setAttribute('class', 'anchoImg')
img.classList.add('anchoImg')
// img.classList.remove('anchoImg')


// 4. Cambio de contenido HTML: Crea un párrafo en tu página y utiliza JavaScript para cambiar su contenido HTML a un nuevo párrafo.

// let title = document.getElementById('title')
// title.innerText = prompt('Saluda')

// * 5. Anidación de elementos: Crea un elemento **`<ul>`** y agrega varios elementos **`<li>`** a él utilizando JavaScript.
// let ul = document.createElement('ul')
// let opcion = prompt('ingresar un item o 5 para salir')

// while (opcion != '5') {
//     let li = document.createElement('li')
//     li.innerText = opcion
//     ul.appendChild(li)
//     document.body.appendChild(ul)
//     opcion = prompt('ingresar un item o 5 para salir')
// }

// 6. Reemplazo de elementos: Crea un elemento **`<p>`** en tu página web y utiliza JavaScript para reemplazarlo por un nuevo elemento **`<h2>`**.

let parrafo = document.getElementById('parrafo');
let containerParrafo = document.getElementById('containerParrafo');
let h2 = document.createElement('h2')


h2.innerText = 'Como reemplazamos la etiqueta p?'

document.body.replaceChild(h2, parrafo)
// document.replaceChild(h2, parrafo)

// containerParrafo.replaceChild(h2, parrafo)


// 7. Clonación de elementos: Crea un elemento **`<div>`** con contenido en tu página y utiliza JavaScript para clonarlo y agregar el clon después del original.

let cardSandwich = document.getElementById('cardSandwich')
console.log(cardSandwich);

let newCard = cardSandwich.cloneNode(true)
newCard.children[0].src = 'https://www.w3Schools.com/w3images/cherries.jpg'

document.body.appendChild(newCard)

// let newCard = cardSandwich
// newCard.innerHTML = 'No se me ocurre nada'

// console.log(newCard);

// 8. Movimiento de elementos: Crea dos elementos **`<div>`** y utiliza JavaScript para mover uno de ellos dentro del otro, convirtiéndolo en un elemento secundario.

// 9. Cambio de estilo: Crea un elemento **`<p>`** y utiliza JavaScript para cambiar su estilo, como el color de fuente o el tamaño del texto.

// 10. Edición de contenido: Crea un elemento **`<span>`** con texto en tu página y utiliza JavaScript para permitir que el usuario edite el contenido del **`<span>`**