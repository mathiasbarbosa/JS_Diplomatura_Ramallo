// * DOM

// document
// document.body 


// * Metodos de seleccion 
let titulo = document.getElementById('titulo')
console.dir(titulo);
console.log(titulo.innerText);
// titulo.innerText = '  mi comida con '
// titulo.innerText = ' <p> mi comida con innerHTML</p>'
console.log(titulo.innerHTML);
// titulo.innerHTML = '<p> mi comida con innerHTML</p>'
console.log(titulo.className);
console.log(titulo.id);
console.log(titulo.isConnected);


document.getElementsByClassName('w3-center')
console.log(
document.getElementsByClassName('w3-center')
);

let parrafos = document.getElementsByTagName('p')
console.log(parrafos);

// * modificacion de atributos 
// let cherries = document.getElementById('cherries')
// console.log(cherries);
// console.log(cherries.src);
// cherries.setAttribute('src', 'https://www.w3schools.com/w3images/cherries.jpg')

// let wine = document.getElementById('wine')
// wine.src = './wine.jpg'



function setSrc () {
    // let divs = [...document.getElementsByClassName('w3-quarter')]
    const URL = 'https://www.w3schools.com'

    let divs = document.getElementsByClassName('w3-quarter')
    console.log(typeof divs);
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i]
        console.log(div.children[0]);
        let img = div.children[0]
        let prevSrc = img.src
        // console.log(prevSrc.slice(21));
        prevSrc = prevSrc.slice(21)
        img.setAttribute('src', `${URL}${prevSrc}`)
    }
}

setSrc()

// *  Crear elementos

console.log(document.createElement('h1'));

let h1 = document.createElement('h1')
console.log(h1.isConnected);
let texto = document.createTextNode('Soy un h1 creado con javaScript')

h1.appendChild(texto)
console.log(h1);

// document.body.appendChild(h1)
let contenedorTitulo = document.getElementById('acaVaElTitulo')
contenedorTitulo.appendChild(h1)
console.log(h1.isConnected);

// contenedorTitulo.removeChild(h1)

// contenedorTitulo.innerHTML += `
//     <div class="w3-quarter">
//     <img src="/w3images/steak.jpg" alt="Steak" style="width:100%">
//     <h3>Let Me Tell You About This Steak</h3>
//     <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.
//     </p>
//     </div>
// `


// * Ejemplo :

const arrayFood = [
    {
        nombre: 'The Perfect Sandwich, A Real NYC Classic',
        descr: 'just some random text, lorem ipsum text praesent tincidunt ipsum lipsum',
        img: 'https://www.w3Schools.com/w3images/sandwich.jpg'
    },
    {
        nombre: 'The Perfect Sandwich, A Real NYC Classic',
        descr: 'just some random text, lorem ipsum text praesent tincidunt ipsum lipsum',
        img: 'https://www.w3Schools.com/w3images/cherries.jpg'
    },
    {
        nombre: 'The Perfect Sandwich, A Real NYC Classic',
        descr: 'just some random text, lorem ipsum text praesent tincidunt ipsum lipsum',
        img: 'https://www.w3Schools.com//w3images/steak.jpg'
    },
    {
        nombre: 'The Perfect Sandwich, A Real NYC Classic',
        descr: 'just some random text, lorem ipsum text praesent tincidunt ipsum lipsum',
        img: 'https://www.w3Schools.com/w3images/sandwich.jpg'
    },
    {
        nombre: 'The Perfect Sandwich, A Real NYC Classic',
        descr: 'just some random text, lorem ipsum text praesent tincidunt ipsum lipsum',
        img: 'https://www.w3Schools.com/w3images/cherries.jpg'
    },
    {
        nombre: 'The Perfect Sandwich, A Real NYC Classic',
        descr: 'just some random text, lorem ipsum text praesent tincidunt ipsum lipsum',
        img: 'https://www.w3Schools.com//w3images/steak.jpg'
    }
]

const containerFood = document.getElementById('food')

arrayFood.forEach( (food) => {
    containerFood.innerHTML += `
                <div class="w3-quarter">
                    <img src="${food.img}" alt="Sandwich" style="width:100%">
                    <h3>${food.nombre}</h3>
                    <p>${food.descr}</p>
                </div>
    `
})