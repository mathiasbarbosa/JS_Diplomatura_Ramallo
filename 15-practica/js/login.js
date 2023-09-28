import {id, tagName} from '../utils/funciones.js'
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []


const formulario = id('form')
console.log(formulario);
formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = id('email').value
  const password = id('password').value

  let usario_find = usuarios.find((usuario) =>  usuario.email === email && usuario.password === password)

  if(usario_find){
    sessionStorage.setItem('usuario_login', JSON.stringify(usario_find))
    window.location = '../app.html'
  }else{
    alert('credenciales incorrectas')
  }
})