// 1° seleccionamos el boton
let boton = document.getElementById('miBoton')

// 2° le asignamos un evento
// boton.addEventListener('click', function(){
//     alert('El boton fue clickeado')
// })

// boton.onclick = () => alert('hiciste click')

// boton.onclick = () => document.body.style.backgroundColor = 'green'

boton.addEventListener('click', function(evento){
    // document.body.style.backgroundColor = 'green'
    console.log(evento);
    console.log(evento.type);
    console.log(evento.target);
})


function hacerAlgo(fn){
    console.log("haciendo algo...");
    setTimeout(() => {
        console.log('tarea finalizada');
        fn()
    },4000)
}

function tareaCompletada(){
    console.log('La tarea ha sido completada');
}

// hacerAlgo(tareaCompletada) 

// console.log('haciendo otra cosa...');


function sumar(a, b, callbackBien, callbackError ){
    if(Number(a) && Number(b)){
        return callbackBien(a,b)
    }

    callbackError()
}

function suma(a ,b){
    let resultado = a + b
    console.log(`El resultado de ${a} + ${b} es: ${resultado}`);
}

function error(){
    alert('algo salio mal')
}

// sumar('t',1,suma, error)
// sumar(2,1,suma, error)

let letras = ['A', 'B', 'C', 'D', 'E', 'F']

// for (let index = 0; index < letras.length; index++) {
// console.log(`i=${index} letra=${letras[index]}`);    
// }

// console.log('---------------');

// letras.forEach(function(letra, i){
//     console.log(`i=${i} letra=${letra}`);    
// })

// document.addEventListener('keydown', function(evento){
//     console.log('Tecla presionada: ' + evento.key);
// })

// document.addEventListener('keyup', function(evento){
//     console.log('Tecla liberada: ' + evento.key);
// })


// * EVENTO FORMULARIO  
const formulario = document.querySelector('#miFormulario')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log('formulario enviado');
})


const input = document.querySelector('input')

input.addEventListener('input', (evento) => {
    const inputValue = evento.target.value
    console.log(`El valor del input es: ${inputValue}`);
})

const select = document.querySelector('select')

select.addEventListener('change', (evento) => {
    console.log('evento change ' + evento.target.value);
})


// document.addEventListener('DOMContentLoaded')
window.addEventListener('scroll', (evento) => {
    console.log(windo);
    console.log('scroll');
} )


