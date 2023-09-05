function saludo(){
    alert('Hola, buenas tardes')
}

let btn = document.getElementById('btn')
console.dir(btn);
console.dir(btn.id);

btn.className = 'boton_primario'

btn.onclick = () => {
    alert('Evento click mediante javaScript')
    console.log('evento clik');
}
btn.onclick = () => {
    document.body.style.background = 'red'

}



// btn.addEventListener('click', () => {
//     alert('Evento mediante add event listener')
// })

// btn.addEventListener('click', () => {
//     document.body.style.background = 'red'
// })

console.log(window);
window.addEventListener('resize', (evento) => {
    // console.log(evento.target.innerWidth);
    console.log('cambio el tamaño de la ventana: ', evento.target.innerWidth);
})